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
