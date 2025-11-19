import { Link } from "react-router-dom";
import { Cigarette, Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
                <Cigarette className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Jadood</span>
            </div>
            <p className="text-muted-foreground text-sm">
              فروشگاه تخصصی محصولات دخانی و ویپ با بهترین کیفیت و قیمت
            </p>
          </div>
