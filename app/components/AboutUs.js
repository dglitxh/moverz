"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Users, PackageCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        
        {/* Top Section - About Info (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
            About Us
          </h3>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            MoveMaster is dedicated to making your moving experience seamless and
            stress-free. With years of expertise, we handle your belongings with
            the utmost care and professionalism.
          </p>
        </motion.div>

        {/* Perks Card (Underneath the Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-border rounded-lg p-6 bg-card shadow-lg max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Truck className="w-6 h-6 text-primary" />,
                title: "Reliable Movers",
                text: "Experienced professionals to handle your move with care.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: "Safe & Secure",
                text: "Your belongings are insured and protected throughout the journey.",
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Customer Satisfaction",
                text: "We prioritize excellent service and a hassle-free experience.",
              },
              {
                icon: <PackageCheck className="w-6 h-6 text-primary" />,
                title: "Packing & Unpacking",
                text: "Professional packing services to ensure safe transport.",
              },
            ].map((perk, index) => (
              <div key={index} className="flex items-start gap-3">
                {perk.icon}
                <div>
                  <h4 className="text-lg font-semibold">{perk.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{perk.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
