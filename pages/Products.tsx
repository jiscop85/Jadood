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
