"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, DollarSign, ThumbsUp } from "lucide-react";

const standoutFeatures = [
  {
    id: 1,
    title: "Safe & Secure Moving",
    description: "Your belongings are handled with care and professionalism.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Always On Time",
    description: "Punctual pick-ups and deliveries—your schedule matters.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description: "No hidden fees—just honest, upfront pricing.",
    icon: DollarSign,
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "Trusted by thousands for a smooth moving experience.",
    icon: ThumbsUp,
  },
];

const StandOut = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">

        {/* Left Side - Title & Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <p className="text-sm text-red-600 font-semibold">/ Why Choose Us?</p>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Moving Made Easy & Stress-Free
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            From packing to delivery, our expert movers ensure a smooth and hassle-free experience, so you can focus on your new journey.
          </p>
          <div className="mt-6">
            <a href="/contact" className="text-red-600 font-semibold hover:underline">Call Now →</a>
            <a href="/estimate" className="ml-6 text-red-600 font-semibold hover:underline">Get a Free Estimate →</a>
          </div>
        </motion.div>

        {/* Right Side - Features Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {standoutFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 border-t pt-4"
            >
              <div className="p-3 bg-yellow-500 rounded-full">
                <feature.icon className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandOut;
