"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleEstimate = () => {
    if (from && to) {
      alert(`Estimated cost from ${from} to ${to} will be calculated soon.`);
    }
  };

  return (
    <section id="hero" className="relative bg-background py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Move with Ease & Confidence
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Affordable & professional moving services tailored for you. 
            Get a free estimate and book hassle-free moving today!
          </p>

          {/* Search Bar */}
          <div className="mt-6 bg-card shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 w-full bg-card px-3 py-2 rounded-lg border border-border">
              <MapPin className="text-muted-foreground" />
              <Input
                type="text"
                placeholder="Moving from..."
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
              />
            </div>
            <MoveRight className="hidden sm:block text-muted-foreground" />
            <div className="flex items-center space-x-2 w-full bg-card px-3 py-2 rounded-lg border border-border">
              <MapPin className="text-muted-foreground" />
              <Input
                type="text"
                placeholder="Moving to..."
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
              />
            </div>
            <Button onClick={handleEstimate} className="w-full sm:w-auto">
              Get Estimate
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get a Quote</Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Book Us</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0 w-full md:w-1/2"
        >
          <Image
            src="/pexels-tima-miroshnichenko-6169194.jpg" // Replace with actual image path
            alt="Moving Truck"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
