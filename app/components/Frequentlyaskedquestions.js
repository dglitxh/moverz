"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book my move?",
    answer: "We recommend booking at least 2-4 weeks in advance to ensure availability, especially during peak moving seasons.",
  },
  {
    question: "Do you offer packing and unpacking services?",
    answer: "Yes! We provide full packing and unpacking services to make your move hassle-free.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Absolutely! We offer various insurance options to ensure your belongings are protected during transit.",
  },
  {
    question: "What areas do you serve?",
    answer: "We provide local and long-distance moving services across the country. Contact us to check availability in your area!",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees! Our pricing is transparent, and we provide a detailed quote before your move.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Removed TypeScript types

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Got questions? We have answers. Here are some of the most common inquiries from our customers.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-muted rounded-lg"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-foreground">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.span>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
