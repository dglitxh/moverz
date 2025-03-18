"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";
import { httpReq } from "../util/helpers";
import { toast } from "sonner"; // ✅ Import toast

const LoginModal = ({ isOpen, onClose, openSignup }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = JSON.stringify(formData);

    try {
      let response = await httpReq("POST", "../api/auth/login", data);
      setLoading(false);

      if (response === 201 || response === 200) {
        toast.success("✅ Login successful! Welcome back! 🎉");
        onClose(); // ✅ Close modal on success
      } else {
        toast.error("❌ Invalid credentials. Please try again!");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Check your connection!");
    }

    setTimeout(() => setLoading(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // ✅ Fix form state update
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
              Log In
            </DialogTitle>
          </DialogHeader>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              className="w-full bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80 flex justify-center items-center h-12 text-lg"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin w-6 h-6" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>

          {/* Don't have an account? Sign Up */}
          <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <button
              className="underline font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition"
              onClick={() => {
                onClose();
                openSignup();
              }}
            >
              Sign up
            </button>
          </p>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
