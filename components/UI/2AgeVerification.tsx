import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

const AgeVerification = () => {
  const [open, setOpen] = useState(false);

 useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) {
      setOpen(true);
    }
  }, []);


  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem("ageVerified", "true");
      setOpen(false);
    } else {
      window.location.href = "https://google.com";
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <div className="text-center space-y-6 py-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>

 <div className="space-y-2">
            <h2 className="text-2xl font-bold">تایید سن</h2>
            <p className="text-muted-foreground">
              آیا شما بالای 18 سال سن دارید؟
            </p>
            <p className="text-sm text-muted-foreground">
              محصولات این سایت فقط برای افراد بالای 18 سال قابل خرید است
            </p>
          </div>

 <div className="flex gap-4 pt-4">
            <Button 
              onClick={() => handleVerify(true)}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              بله، بالای 18 سال هستم
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleVerify(false)}
              className="flex-1"
            >
              خیر
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;
