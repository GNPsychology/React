import React from 'react';

const services = [
  {
    title: 'Individual Therapy',
    description: 'Personalized therapy sessions tailored to your unique needs and goals.',
  },
  {
    title: 'Couples Counseling',
    description: 'Support for couples looking to strengthen their relationship and overcome challenges.',
  },
  {
    title: 'Anxiety Treatment',
    description: 'Evidence-based approaches to managing and reducing anxiety symptoms.',
  },
  {
    title: 'Depression Treatment',
    description: 'Comprehensive support for managing depression and improving well-being.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive psychological services to support your mental health journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;