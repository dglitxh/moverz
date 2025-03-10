"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Truck, BadgeDollarSign, ShieldCheck, Users } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic Move",
    price: "$199",
    description: "Perfect for small moves and apartments.",
    icon: <Truck className="w-8 h-8 text-primary" />,
    features: ["1 Truck", "2 Movers", "3 Hours Service"],
  },
  {
    title: "Standard Move",
    price: "$399",
    description: "Great for medium-sized homes.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    features: ["Large Truck", "3 Movers", "5 Hours Service"],
    highlight: true, // Best value
  },
  {
    title: "Premium Move",
    price: "$699",
    description: "Ideal for full-house moves.",
    icon: <Users className="w-8 h-8 text-primary" />,
    features: ["2 Trucks", "5 Movers", "8 Hours Service"],
  },
];

const Pricing = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");

  const calculateEstimate = () => {
    if (!from || !to) return;
    const baseCost = 150;
    const distanceFactor = Math.random() * 100;
    setEstimatedCost(`$${(baseCost + distanceFactor).toFixed(2)}`);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wide">Simple & Transparent Pricing</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Choose a plan that fits your needs, or get a <strong className="text-muted-foreground mt-4 leading-relaxed">real-time moving estimate</strong>.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-6 rounded-xl border transition-colors ${
                plan.highlight
                  ? "bg-primary text-white dark:bg-primary/30 dark:text-black scale-105 shadow-lg"
                  : "bg-background text-foreground border-gray-300 dark:border-gray-700"
              }`}
            >
              <div className="flex justify-center">{plan.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{plan.title}</h3>
              <p className="text-lg font-semibold">{plan.price}</p>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex justify-center text-sm">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <Button className={`mt-6 w-full ${plan.highlight ? "bg-white text-primary dark:bg-black dark:text-yellow-500" : ""}`}>
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Pricing;
