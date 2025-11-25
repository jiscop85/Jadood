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
