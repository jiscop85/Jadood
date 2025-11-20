import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Cigarette, User, LogOut, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const {
    user,
    signOut,
    isAdmin
  } = useAuth();
  useEffect(() => {
    if (user) {
      fetchCartCount();

 // Subscribe to cart changes
      const channel = supabase.channel('cart-changes').on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'cart',
        filter: `user_id=eq.${user.id}`
      }, () => fetchCartCount()).subscribe();
      return () => {
        supabase.removeChannel(channel);
      };
    } else {
      setCartCount(0);
    }
  }, [user]);
  const fetchCartCount = async () => {
    if (!user) return;
    const {
      count
    } = await supabase.from('cart').select('*', {
      count: 'exact',
      head: true
    }).eq('user_id', user.id);
    setCartCount(count || 0);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
              <Cigarette className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold gradient-text text-gray-50 font-serif text-2xl">Jadood</span>
          </Link>

 {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              خانه
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              محصولات
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors font-medium">
              دسته‌بندی‌ها
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              درباره ما
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              تماس با ما
            </Link>
          </nav>
