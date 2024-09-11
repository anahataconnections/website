import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

const ContactUsDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#094C3B] px-4 py-2 font-semibold text-white rounded-md shadow-lg hover:bg-[#0A5C48] transition-colors">
          Contact Us
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md bg-gradient-to-br from-[#F0F4F3] to-[#E0E8E6] border-[#094C3B]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-[#094C3B]">
            Let&apos;s Connect
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-[#2C3E50]">
            We&apos;d love to hear from you! Drop us a line anytime.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-6 p-4 bg-white rounded-lg shadow-inner flex items-center space-x-3">
          <Mail className="text-[#094C3B] w-6 h-6" />
          <p className="text-lg font-medium text-[#2C3E50]">
            anahataconnections@gmail.com
          </p>
        </div>
        <p className="text-sm text-[#5D6D7E] mt-2 italic">
          We aim to respond within 24 hours during business days.
        </p>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel className="bg-[#E0E8E6] text-[#094C3B] hover:bg-[#D0D8D6]">
            Close
          </AlertDialogCancel>
          <AlertDialogAction asChild className="bg-[#094C3B] text-white">
            <Link href="mailto:anahataconnections@gmail.com">Send Email</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactUsDialog;
