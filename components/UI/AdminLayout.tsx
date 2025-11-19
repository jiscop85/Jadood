import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  FolderTree, 
  Users,
  LogOut,
  Cigarette
} from 'lucide-react';

const AdminLayout = () => {
  const { signOut, user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'داشبورد' },
    { path: '/admin/products', icon: Package, label: 'محصولات' },
    { path: '/admin/orders', icon: ShoppingBag, label: 'سفارشات' },
    { path: '/admin/categories', icon: FolderTree, label: 'دسته‌بندی‌ها' },
    { path: '/admin/users', icon: Users, label: 'کاربران' },
  ];

 return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
              <Cigarette className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Jadood Admin</span>
          </Link>
        </div>
