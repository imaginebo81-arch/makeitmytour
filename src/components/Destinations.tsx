import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { recommendedTrips } from '../data';
import { MapPin, Star, Calendar, Phone, ArrowUpRight, Tag, ChevronDown } from 'lucide-react';

export function Destinations() {
  const filters = [
    { label: "All Destinations", icon: true },
    { label: "Under ₹50K" },
    { label: "₹50K to ₹1.5L" },
    { label: "₹1.5L to ₹5L" },
    { label: "All Upcoming Trips" }
  ];

  return (
    <section id="destinations" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-5xl text-gray-900 mb-3">
            <span className="italic font-serif font-medium text-gray-700">Recommended</span> <span className="font-bold">Trips</span>
          </h2>
          <p className="text-gray-500 text-lg">
            best suited for new explorers with a mix of popular and offbeat destinations
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter, idx) => (
            <button 
              key={idx}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 bg-white hover:border-gray-400 hover:bg-gray-50 transition-all font-medium whitespace-nowrap text-sm"
            >
              {filter.label}
              {filter.icon && <ChevronDown className="w-4 h-4 text-gray-500" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col transition-all group"
            >
              <Link to={`/package/rec-${trip.id}`} className="flex flex-col flex-grow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={trip.imageUrl}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {trip.saveTag && (
                    <div className="absolute top-4 left-0 bg-[#ff3b3b] text-white px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 rounded-r-lg shadow-md z-10">
                      <Tag className="w-3.5 h-3.5" /> {trip.saveTag}
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                    {trip.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 mb-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /> <span className="truncate">{trip.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 flex-shrink-0" /> 
                      <span className="font-medium text-gray-900">{trip.rating}</span>
                      {trip.reviews && <span className="text-gray-400">({trip.reviews})</span>}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /> <span className="truncate">{trip.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-between items-end mt-auto pt-1">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">{trip.price}</span>
                        {trip.originalPrice && <span className="text-sm text-gray-400 line-through font-medium whitespace-nowrap">{trip.originalPrice}</span>}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">{trip.duration}</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <button 
                        className="p-2.5 border-2 border-gray-200 rounded-full hover:border-gray-900 hover:bg-gray-50 transition-colors text-gray-700 flex-shrink-0"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle phone click
                        }}
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black transition-colors flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4" /> Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
