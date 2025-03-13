"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Truck, Home, Building, Boxes, Move } from "lucide-react";

const services = [
  { icon: <Home className="w-10 h-10 text-primary" />, title: "Residential Moving", description: "We handle home moves with care and professionalism." },
  { icon: <Building className="w-10 h-10 text-primary" />, title: "Commercial Moving", description: "Efficient office and business relocations with minimal downtime." },
  { icon: <Boxes className="w-10 h-10 text-primary" />, title: "Packing Services", description: "Secure and professional packing for a stress-free move." },
  { icon: <Truck className="w-10 h-10 text-primary" />, title: "Long-Distance Moving", description: "Reliable long-haul moving services across states or countries." },
  { icon: <Move className="w-10 h-10 text-primary" />, title: "Storage Solutions", description: "Safe and flexible storage options for your belongings." },
];

const Services = () => {
  return (
    <section id="services" className=" py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Engaging Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-lg  font-semibold text-primary uppercase tracking-wide">Moving Made Simple</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Whether it's a new home or office, moving can be overwhelming. That's why we offer hassle-free services tailored to your needs. Let us handle the heavy lifting!
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Button size="lg">Get a Free Quote</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
