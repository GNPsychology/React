import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
            alt="Psychology consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Psychology Services in Melbourne
              </h1>
              <p className="text-xl text-white mb-8">
                Providing compassionate and evidence-based psychological support to help you thrive
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;