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
