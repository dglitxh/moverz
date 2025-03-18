"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Building, Boxes, Truck } from "lucide-react";

const services = [
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Residential Moving",
    description: "Smooth and stress-free home relocations with expert care.",
    color: "bg-green-600",
  },
  {
    icon: <Building className="w-6 h-6 text-white" />,
    title: "Commercial Moving",
    description: "Seamless office relocations with minimal downtime.",
    color: "bg-red-600",
  },
  {
    icon: <Boxes className="w-6 h-6 text-white" />,
    title: "Packing Services",
    description: "Secure and professional packing for your valuables.",
    color: "bg-blue-600",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Long-Distance Moving",
    description: "Reliable moving services across states and countries.",
    color: "bg-purple-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 ">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-lg font-semibold text-primary uppercase tracking-wide mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            From local moves to long distances, we make every move seamless and hassle-free.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-xl shadow-md  text-center flex flex-col items-center border border-gray-800"
            >
              {/* Icon with background */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold  mt-4">{service.title}</h3>
              <p className=" mt-2 text-sm">{service.description}</p>

              {/* View More Button */}
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
