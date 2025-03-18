"use client";

import { motion } from "framer-motion";
import { Dialog, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";
import { httpReq } from "../util/helpers";
import { toast } from "sonner"; // Import toast notification

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    let data = JSON.stringify({ email });
    console.log("Sending request with:", data);

    let response = await httpReq("POST", "../api/auth/forgot-password", data);

    setLoading(false);
    if (response && (response.status === 200 || response.status === 201)) {
      toast.success("Password reset link sent to your email!");
      onClose(); // Close modal after success
    } else {
      toast.error("Error sending reset link. Try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-0"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-black p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative border border-gray-300 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
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
              Forgot Password
            </DialogTitle>
          </DialogHeader>

          {/* Form */}
          <form onSubmit={handleForgotPassword} className="space-y-4 mt-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 text-lg bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <Button
              type="submit"
              className="w-full bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80 flex justify-center items-center h-12 text-lg"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Send Reset Link"}
            </Button>
          </form>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default ForgotPasswordModal;
