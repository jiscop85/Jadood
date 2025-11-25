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

if (error) {
      toast({
        title: 'خطا',
        description: 'خطا در بروزرسانی تعداد',
        variant: 'destructive',
      });
    } else {
      fetchCartItems();
    }
  };

 const removeItem = async (itemId: string) => {
    const { error } = await supabase
      .from('cart')
      .delete()
      .eq('id', itemId);

    if (error) {
      toast({
        title: 'خطا',
        description: 'خطا در حذف محصول',
        variant: 'destructive',
      });
    } else {
      toast({ title: 'موفق', description: 'محصول از سبد خرید حذف شد' });
      fetchCartItems();
    }
  };

 const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      if (item.products) {
        return sum + (item.products.price * item.quantity);
      }
      return sum;
    }, 0);
  };

 if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center py-20">
            <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-4">برای مشاهده سبد خرید وارد شوید</h2>
            <Button onClick={() => navigate('/auth')}>ورود / ثبت‌نام</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
