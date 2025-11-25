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
