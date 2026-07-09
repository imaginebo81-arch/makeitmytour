import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { upcomingTrips, recommendedTrips, domesticGetaways } from '../data';
import { ArrowLeft, Star, MapPin, Clock, Calendar, Check, X, CreditCard, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockDetails = {
  whatWeOffer: [
    "Accommodation in premium hotels/camps",
    "Daily Breakfast & Dinner",
    "Private transportation for sightseeing",
    "Professional tour guide",
    "All permits and taxes",
    "24/7 on-call support"
  ],
  notIncluded: [
    "Flights / Train tickets",
    "Lunch",
    "Personal expenses",
    "Entry fees for monuments"
  ],
  places: [
    { day: "Day 1", title: "Arrival & Local Sightseeing", desc: "Arrive at destination, check-in to your premium hotel. Evening free for leisure and exploring local markets." },
    { day: "Day 2", title: "Adventure & Excursion", desc: "Full day excursion to the most famous viewpoints and adventure spots." },
    { day: "Day 3", title: "Cultural Tour", desc: "Visit historical monuments, temples, and interact with the locals." },
    { day: "Day 4", title: "Departure", desc: "After breakfast, check-out and transfer to airport/station with sweet memories." }
  ]
};

export function PackageDetailsPage() {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  let trip: any = null;
  if (id?.startsWith('rec-')) {
    trip = recommendedTrips.find(t => t.id === parseInt(id.replace('rec-', '')));
  } else if (id?.startsWith('dom-')) {
    trip = domesticGetaways.find(t => t.id === parseInt(id.replace('dom-', '')));
  } else if (id?.startsWith('up-')) {
    trip = upcomingTrips.find(t => t.id === parseInt(id.replace('up-', '')));
  }

  if (!trip) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  const price = trip.price || trip.cost;
  const originalPrice = trip.originalPrice;

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Image Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <img src={trip.imageUrl} alt={trip.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 md:mb-6 transition-colors bg-black/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm w-fit text-sm md:text-base">
              <ArrowLeft className="w-4 h-4" /> Back to Packages
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
              {trip.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{trip.rating}</span>
                {trip.reviews && <span className="opacity-80">({trip.reviews} reviews)</span>}
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" />
                <span>{trip.duration}</span>
              </div>
              {(trip.type || trip.location) && (
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>{trip.type || trip.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" /> Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {mockDetails.whatWeOffer.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" /> Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {mockDetails.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-6 md:space-y-8">
                {mockDetails.places.map((place, i) => (
                  <div key={i} className="flex gap-6 relative">
                    {i !== mockDetails.places.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-100"></div>
                    )}
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold z-10 border-4 border-white shadow-sm">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <div className="text-sm font-semibold text-gray-500 mb-1">{place.day}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{place.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{place.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <div className="mb-6 pb-6 border-b border-gray-100">
                <p className="text-gray-500 font-medium mb-2">Starting from</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900 tracking-tight">{price}</span>
                  {originalPrice && <span className="text-lg text-gray-400 line-through font-medium">{originalPrice}</span>}
                </div>
                <p className="text-sm text-gray-500 mt-2">per person</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>{trip.date || "Multiple Dates Available"}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>{trip.duration}</span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Book Now <ChevronRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1.5">
                <CreditCard className="w-4 h-4" /> Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Popup */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Trip</h2>
              <p className="text-gray-500 mb-6">{trip.title}</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking request sent!'); setIsBookingOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="john@example.com" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="+91 98765 43210" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Travel Date</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Travelers</label>
                    <input required type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="2" />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600">Total Price</span>
                    <span className="text-2xl font-bold text-gray-900">{price}</span>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
