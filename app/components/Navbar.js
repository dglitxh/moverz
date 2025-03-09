"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog"; // Import for accessibility

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-background shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
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

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right Section: Dark Mode Toggle, Call Icon, Login/Signup */}
        <div className="flex items-center space-x-4">
          {/* Call Icon with Number */}
          <a href="tel:+1234567890" className="hidden md:flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
            <Phone className="w-5 h-5 mr-1" /> +1 234 567 890
          </a>

          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            <Moon className="w-6 h-6" />
          </Button>

          {/* Login & Sign Up */}
          <div className="hidden md:flex space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                {/* Hidden Title for Accessibility */}
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

                <div className="flex flex-col space-y-6 mt-10">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                  {/* Login & Sign Up (Mobile View) */}
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button variant="outline">Login</Button>
                    <Button>Sign Up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
