import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: string;
  quantity: number;
  products: {
    id: string;
    name: string;
    price: number;
    image_url: string | null;
    stock_quantity: number;
  } | null;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchCartItems();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchCartItems = async () => {
    if (!user) return;

    const { data: cart } = await supabase
      .from('cart')
      .select('*')
      .eq('user_id', user.id);

    if (!cart) {
      setLoading(false);
      return;
    }

    // Fetch products separately
    const itemsWithProducts = await Promise.all(
      cart.map(async (item) => {
        const { data: product } = await supabase
          .from('products')
          .select('id, name, price, image_url, stock_quantity')
          .eq('id', item.product_id)
          .maybeSingle();
        
        return { ...item, products: product };
      })
    );

 setCartItems(itemsWithProducts);
    setLoading(false);
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const { error } = await supabase
      .from('cart')
      .update({ quantity: newQuantity })
      .eq('id', itemId);
