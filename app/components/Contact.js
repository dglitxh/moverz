"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! 🚀"); // Replace with actual API call
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-lg  font-semibold text-primary uppercase tracking-wide">Get in Touch</h2>
          <p className="text-muted-foreground mt-2">
            Have questions or need a quote? Contact us today, and let's make your move effortless.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card p-6 rounded-lg shadow-lg space-y-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-muted-foreground/10 text-foreground"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-muted-foreground/10 text-foreground"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your move..."
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-muted-foreground/10 text-foreground"
          />
          <Button type="submit" size="lg" className="flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Get a Free Quote</span>
          </Button>
        </motion.form>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row md:justify-around text-center md:text-left space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">contact@movemaster.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">123 Moving St, City, State</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
