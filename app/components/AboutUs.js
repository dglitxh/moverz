"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
            About Us
          </h3>
          <h2 className="text-4xl font-bold mt-2">Who We Are</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            MoveMaster is your trusted partner in making every move effortless. 
            Whether it's a local relocation or a long-distance move, our team ensures 
            a smooth, stress-free experience with professionalism and care.
          </p>
          <div className="mt-6">
            <Button size="lg">Learn More</Button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[350px]"
        >
          <Image 
            src="/on-time.jpg" 
            alt="Moving Team" 
            fill 
            className="rounded-lg object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
