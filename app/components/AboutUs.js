"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground text-center">
      {/* Centered Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg font-semibold text-primary uppercase tracking-wide mb-6"
      >
        About Us
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image Stack with Overlay Effect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center w-full h-[400px]"
        >
          {/* Smaller Background Image - Offset Position */}
          <div className="absolute top-6 left-6 w-3/4 h-[320px] rounded-lg overflow-hidden">
            <Image 
              src="/equipment.jpg" 
              alt="Moving Equipment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg opacity-70"
            />
          </div>

          {/* Foreground Image - Stands Out More */}
          <div className="relative w-4/5 h-[270px] shadow-xl rounded-lg overflow-hidden border-4 border-white">
            <Image 
              src="/customers.jpg" 
              alt="Happy Customers"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Small team, <br />
            <span className="text-primary">Big hearts.</span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            MoveMaster is an experienced and passionate team of relocation experts. 
            We specialize in local and long-distance moving, ensuring a stress-free 
            experience for every client. Our commitment is to handle your move with 
            professionalism and care.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            With a culture of collaboration, a team of dedicated movers, and a passion 
            for helping people settle into their new homes, MoveMaster is your trusted 
            partner in every transition.
          </p>

          {/* Signature Image */}
          <div className="mt-6">
            <Image 
              src="/signature.png" 
              alt="Signature" 
              width={150} 
              height={50} 
              className="opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
