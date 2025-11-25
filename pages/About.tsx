import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">
                درباره <span className="gradient-text">جادود</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                فروشگاه تخصصی محصولات دخانی و ویپ با بیش از 5 سال تجربه
              </p>
            </div>

<div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  جادود با هدف ارائه بهترین و معتبرترین برندهای محصولات دخانی در ایران، فعالیت خود را آغاز کرد. 
                  ما معتقدیم که مشتریان ما حق دارند به محصولاتی با کیفیت بالا و اصل دسترسی داشته باشند.
                </p>
                <p>
                  تیم ما متشکل از متخصصان باتجربه در حوزه محصولات دخانی است که همواره در تلاش هستند 
                  تا جدیدترین و بهترین محصولات را با قیمت‌های مناسب در اختیار شما قرار دهند.
                </p>
                <p>
                  ما همچنین به مسئولیت اجتماعی خود آگاه هستیم و فقط به افراد بالای 18 سال خدمات ارائه می‌دهیم.
                </p>
              </div>
            </div>
