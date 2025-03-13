"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog"; 
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Controls sidebar
  const [isScrolled, setIsScrolled] = useState(false); // Adds background when scrolling

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Smooth scroll function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSheetOpen(false); // Close sidebar on mobile
  };

  // Add background when scrolling down
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold text-primary">
              MoveMaster
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 mx-auto">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
        
            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              <Moon className="w-6 h-6" />
            </Button>

            {/* Login & Sign Up */}
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" onClick={() => setIsLoginOpen(true)}>Login</Button>
              <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(true)}>
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-background w-72 shadow-lg backdrop-blur-md border-r border-gray-200 dark:border-gray-800"
                >
                  {/* Hidden Title for Accessibility */}
                  <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

                  {/* Sidebar Content */}
                  <div className="flex flex-col space-y-6 mt-10 px-4">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                        onClick={(e) => handleScroll(e, link.href)}
                      >
                        {link.name}
                      </a>
                    ))}

                    {/* Login & Sign Up */}
                    <div className="flex flex-col space-y-2 mt-6">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setIsLoginOpen(true);
                          setIsSheetOpen(false); // Close sidebar
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsSignupOpen(true);
                          setIsSheetOpen(false); // Close sidebar
                        }}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals - Will ONLY open when triggered */}
      {isLoginOpen && (
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          openSignup={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
        />
      )}

      {isSignupOpen && (
        <SignupModal 
          isOpen={isSignupOpen} 
          onClose={() => setIsSignupOpen(false)} 
          openLogin={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }} 
        />
      )}
    </>
  );
};

export default Navbar;
