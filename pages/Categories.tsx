import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "ویپ و پاد",
      icon: "💨",
      count: 45,
      description: "جدیدترین مدل‌های ویپ و پاد از بهترین برندها",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
      link: "/products?category=vape",
    },
    {
      name: "سیگار الکترونیکی",
      icon: "🔋",
      count: 32,
      description: "IQOS، GLO و دیگر برندهای معتبر سیگار الکترونیکی",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80",
      link: "/products?category=electronic",
    },
    {
      name: "سیگار برگ",
      icon: "🌿",
      count: 28,
      description: "سیگارهای برگ اصل کوبایی و دومینیکن",
      image: "https://images.unsplash.com/photo-1606400082777-ef05f37f7caf?w=800&q=80",
      link: "/products?category=cigar",
    },
    {
      name: "قلیان و تنباکو",
      icon: "💭",
      count: 52,
      description: "تنباکوهای معطر و لوازم جانبی قلیان",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      link: "/products?category=hookah",
    },
    {
      name: "لوازم جانبی",
      icon: "🔧",
      count: 67,
      description: "کویل، باتری، شارژر و سایر لوازم جانبی",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      link: "/products?category=accessories",
    },
    {
      name: "مایعات و طعم‌ها",
      icon: "🍓",
      count: 89,
      description: "طعم‌های متنوع با بهترین کیفیت",
      image: "https://images.unsplash.com/photo-1565514779301-c0bc49e6c2d2?w=800&q=80",
      link: "/products?category=liquids",
    },
  ];

 return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              دسته‌بندی <span className="gradient-text">محصولات</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              انتخاب از میان بیش از 300 محصول در 6 دسته مختلف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.name} to={category.link}>
                <div className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 right-4 text-5xl">
                      {category.icon}
                    </div>
                  </div>
