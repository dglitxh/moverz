"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "MoveMaster made my move so easy! The team was professional, on time, and handled my items with care.",
    rating: 5,
    image: "/customers.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    text: "Best moving experience ever! No hidden fees, great service, and very friendly staff.",
    rating: 5,
    image: "/equipment.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    text: "Highly recommend MoveMaster! They made my relocation stress-free and smooth. Amazing job!",
    rating: 5,
    image: "/on-time.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            We’ve helped thousands move stress-free. Here’s what they have to say:
          </p>
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Customer Image */}
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full mb-4 shadow-lg"
              />
              
              {/* Testimonial Text */}
              <p className="text-xl text-muted-foreground italic max-w-lg">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Star Ratings */}
              <div className="flex justify-center mt-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Customer Name */}
              <h3 className="text-lg font-semibold mt-2 text-foreground">
                {testimonials[currentIndex].name}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
