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

 if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 pt-32 pb-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

 return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold gradient-text mb-8">سبد خرید شما</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h2>
            <Button onClick={() => navigate('/products')}>مشاهده محصولات</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                if (!item.products) return null;
                
 return (
                  <Card key={item.id} className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {item.products.image_url && (
                          <img
                            src={item.products.image_url}
                            alt={item.products.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        )}
                        
 <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{item.products.name}</h3>
                          <p className="text-primary font-bold mb-4">
                            {item.products.price.toLocaleString('fa-IR')} تومان
                          </p>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.products.stock_quantity}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            
<Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div>
              <Card className="glass-effect sticky top-32">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">خلاصه سفارش</h3>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span>جمع کل:</span>
                      <span className="font-bold">
                        {calculateTotal().toLocaleString('fa-IR')} تومان
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => navigate('/checkout')}
                  >
                    ادامه خرید
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
