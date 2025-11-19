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

  {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  محصولات
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  دسته‌بندی‌ها
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

 {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">خدمات مشتریان</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  قوانین و مقررات
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  ارسال و تحویل
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  بازگشت کالا
                </Link>
              </li>
            </ul>
          </div>

  {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">09336236112 _ 09101754308</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">arash.javadyfar@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">تهران - چهار راه مولوی - بازار حضرتی - کوچه موسوی - (ارامنه) پاساژ صفویه - پلاک 21                                            </span>
              </li>
            </ul>

<div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
