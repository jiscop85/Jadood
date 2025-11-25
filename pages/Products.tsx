import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "JUUL Device - Rose Gold Edition",
      price: "2,500,000",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=500&q=80",
      category: "ویپ",
      isNew: true,
    },
 {
      id: "2",
      name: "Elf Bar 5000 Puffs - Mixed Berry",
      price: "850,000",
      image: "https://images.unsplash.com/photo-1587328376107-c9d0e89d9717?w=500&q=80",
      category: "پاد یکبار مصرف",
      isNew: true,
    },
{
      id: "3",
      name: "IQOS 3 DUO Premium Kit",
      price: "4,200,000",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&q=80",
      category: "سیگار الکترونیکی",
    },
 {
      id: "4",
      name: "Premium Cuban Cigars Set",
      price: "1,800,000",
      image: "https://images.unsplash.com/photo-1606400082777-ef05f37f7caf?w=500&q=80",
      category: "سیگار برگ",
    },
 {
      id: "5",
      name: "Vaporesso XROS 3 Mini",
      price: "1,200,000",
      image: "https://images.unsplash.com/photo-1565514779301-c0bc49e6c2d2?w=500&q=80",
      category: "ویپ",
    },
    {
      id: "6",
      name: "Lost Mary BM5000 - Strawberry Ice",
      price: "920,000",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
      category: "پاد یکبار مصرف",
      isNew: true,
    },
  ];

 return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              تمام <span className="gradient-text">محصولات</span>
            </h1>
            <p className="text-muted-foreground">بهترین برندهای جهان در یک جا</p>
          </div>

<div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">فیلترها</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">دسته‌بندی</h4>
                    <div className="space-y-2">
                      {["ویپ", "پاد یکبار مصرف", "سیگار الکترونیکی", "سیگار برگ"].map((cat) => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

 <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-2">محدوده قیمت</h4>
                    <div className="space-y-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="5000000" 
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0</span>
                        <span>5,000,000 تومان</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>

 {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">{products.length} محصول یافت شد</p>
                <select className="bg-card border border-border rounded-lg px-4 py-2">
                  <option>جدیدترین</option>
                  <option>پرفروش‌ترین</option>
                  <option>ارزان‌ترین</option>
                  <option>گران‌ترین</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
