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
