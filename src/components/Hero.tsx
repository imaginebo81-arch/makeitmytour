import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://video.gumlet.io/6898677fc34d4aa0c864379a/6960e22c525cbb355626e117/main.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-2">
            <span className="font-serif italic font-medium">Discover Your Next</span> <br className="md:hidden" />
            <span className="font-heading font-bold">Adventure</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md px-4">
            Explore breathtaking destinations, create unforgettable memories, and embark on journeys of a lifetime with us.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-md p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center max-w-2xl mx-auto shadow-2xl border border-white/50"
          >
            <div className="w-full flex items-center px-4 py-3 md:py-2">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 text-lg"
              />
            </div>
            <button className="w-full md:w-auto mt-2 md:mt-0 bg-black hover:bg-gray-900 text-white px-6 md:px-8 py-3.5 md:py-3 rounded-xl md:rounded-full font-semibold transition-all shadow-md transform hover:-translate-y-0.5 flex-shrink-0">
              Search
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
