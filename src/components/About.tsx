import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
              alt="Psychologist office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About GN Psychology</h2>
            <p className="text-lg text-gray-600 mb-6">
              At GN Psychology, we are committed to providing high-quality psychological services
              in a warm, supportive environment. Our experienced team of psychologists brings
              extensive expertise in various therapeutic approaches to help you achieve your goals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in creating a safe, non-judgmental space where you can explore your
              thoughts and feelings, develop new insights, and work towards positive change.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;