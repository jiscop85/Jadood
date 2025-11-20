import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {isNew && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
              جدید
            </div>
          )}
          <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </Link>
