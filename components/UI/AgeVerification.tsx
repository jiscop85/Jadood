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
