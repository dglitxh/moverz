"use client";

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-primary">MoveMaster</h2>
          <p className="text-sm mt-2">
            Stress-free, affordable moving services. We handle your belongings with care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-4 h-4 text-primary" /> contact@movemaster.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-4 h-4 text-primary" /> 123 Moving St, City, State
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <Link key={index} href="#" className="hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-muted-foreground pt-4">
        © {new Date().getFullYear()} MoveMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
