import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    date: "2 weeks ago",
    text: "MakeItMyTour organized the most incredible trip to Himachal for our family. Everything from the stays to the transport was perfectly planned. Highly recommend their services!",
    rating: 5,
    pfp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    date: "1 month ago",
    text: "The domestic getaway package to Kasol was totally worth it. The trek was well-guided, and the accommodations were super comfortable. Will definitely book again.",
    rating: 5,
    pfp: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Priya Patel",
    date: "3 months ago",
    text: "I went on my first solo trip through their group departure. Made so many new friends and felt completely safe throughout the journey. Amazing experience overall.",
    rating: 5,
    pfp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-gray-900 mb-3">
            <span className="italic font-serif font-medium text-gray-700">Client</span> <span className="font-bold">Reviews</span>
          </h2>
          <p className="text-gray-500 text-lg">
            What our travelers say about their experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.pfp}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
