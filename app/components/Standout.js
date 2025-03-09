"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, DollarSign, ThumbsUp, Truck } from "lucide-react";
import Image from "next/image";

const standoutFeatures = [
  {
    id: 1,
    title: "Safety & Reliability First",
    description: "We handle your belongings with care, ensuring they arrive safely.",
    icon: ShieldCheck,
    image: "/safety.jpg",
  },
  {
    id: 2,
    title: "Always On Time",
    description: "We value your time and guarantee punctual pick-ups and deliveries.",
    icon: Clock,
    image: "/on-time.jpg",
  },
  {
    id: 3,
    title: "No Hidden Costs",
    description: "Transparent pricing with no surprise fees. What you see is what you pay.",
    icon: DollarSign,
    image: "/pricing.jpg",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "Thousands of happy customers trust us for their moving needs.",
    icon: ThumbsUp,
    image: "/customers.jpg",
  },
  {
    id: 5,
    title: "Modern Moving Equipment",
    description: "We use the latest tools and trucks to make your move seamless.",
    icon: Truck,
    image: "/equipment.jpg",
  },
];

const StandOut = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-4xl font-bold text-primary mb-3">What Makes Us Stand Out?</h2>
          <p className="text-lg text-muted-foreground">
            Moving can be stressful, but we make it <strong>effortless, efficient, and affordable.</strong>  
            Here's why people trust us:
          </p>
        </motion.div>

        {/* Features Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standoutFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center space-x-3">
                  <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandOut;
