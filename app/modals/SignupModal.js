"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";

const SignupModal = ({ isOpen, onClose, openLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-0" 
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-black p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative border border-gray-300 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Close Button */}
          <DialogClose asChild>
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogClose>

          {/* Header */}
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-black dark:text-white">
              Sign Up
            </DialogTitle>
          </DialogHeader>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-4 mt-4">
            <Input type="text" placeholder="Full Name" required className="px-4 py-3 text-lg" />
            <Input type="email" placeholder="Email" required className="px-4 py-3 text-lg" />
            <Input type="password" placeholder="Password" required className="px-4 py-3 text-lg" />
            
            <Button 
              type="submit" 
              className="w-full bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80 flex justify-center items-center h-12 text-lg" 
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Sign Up"}
            </Button>
          </form>

          {/* Already have an account? */}
          <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button 
              className="underline font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition" 
              onClick={() => {
                onClose();  // Close signup modal
                openLogin(); // Open login modal
              }}
            >
              Log in
            </button>
          </p>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default SignupModal;
