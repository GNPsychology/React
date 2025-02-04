import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About GN Psychology</h1>
          <p className="text-xl text-gray-600">
            Dedicated to providing exceptional psychological care in Melbourne
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
              alt="Psychologist office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Practice</h2>
            <p className="text-lg text-gray-600 mb-6">
              At GN Psychology, we are committed to providing high-quality psychological services
              in a warm, supportive environment. Our experienced team of psychologists brings
              extensive expertise in various therapeutic approaches to help you achieve your goals.
            </p>
            <p className="text-lg text-gray-600">
              We believe in creating a safe, non-judgmental space where you can explore your
              thoughts and feelings, develop new insights, and work towards positive change.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every client with empathy, understanding, and genuine care for their
                well-being.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional practice and continue to develop
                our expertise.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold strong ethical principles and maintain confidentiality in all our
                interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Take the First Step?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to schedule a consultation and begin your journey towards well-being.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;