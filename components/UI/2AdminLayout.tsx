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

  <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-primary text-white'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

 <div className="p-4 border-t border-border">
          <div className="mb-3 px-4 py-2 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">ایمیل</p>
            <p className="text-sm font-medium truncate">{user?.email}</p>
          </div>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={signOut}>
            <LogOut className="w-4 h-4" />
            خروج
          </Button>
        </div>
      </aside>

{/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
