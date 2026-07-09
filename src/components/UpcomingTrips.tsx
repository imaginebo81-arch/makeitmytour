import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { upcomingTrips } from '../data';
import { MapPin, Clock, Star } from 'lucide-react';

export function UpcomingTrips() {
  return (
    <section id="trips" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-5xl text-gray-900 mb-3">
            <span className="italic font-serif font-medium text-gray-700">Upcoming</span> <span className="font-bold">Trips</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Join our carefully curated group trips and explore the world with like-minded travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <Link to={`/package/up-${trip.id}`} className="block h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={trip.imageUrl}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm border border-white/50">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{trip.rating}</span>
                    <span className="text-gray-500 font-normal">({trip.reviews})</span>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-3">
                    <MapPin className="w-4 h-4 text-gray-900" />
                    <span>{trip.location}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {trip.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-lg font-bold text-gray-900">{trip.cost}</p>
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
