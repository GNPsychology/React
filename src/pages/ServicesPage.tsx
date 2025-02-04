import React from 'react';

const services = [
  {
    title: 'Individual Therapy',
    description: 'Our individual therapy sessions provide a safe, confidential space for you to explore personal challenges, develop coping strategies, and work towards your goals. We tailor our approach to your unique needs and circumstances.',
    details: [
      'Depression and anxiety management',
      'Stress and burnout',
      'Trauma and PTSD',
      'Personal growth and self-development',
      'Life transitions and adjustments'
    ]
  },
  {
    title: 'Couples Counseling',
    description: 'Our couples counseling services help partners improve communication, resolve conflicts, and strengthen their relationship. We work with couples at all stages of their relationship.',
    details: [
      'Communication improvement',
      'Conflict resolution',
      'Trust building',
      'Intimacy issues',
      'Pre-marriage counseling'
    ]
  },
  {
    title: 'Anxiety Treatment',
    description: 'We offer evidence-based treatments for various types of anxiety disorders, helping you understand and manage your symptoms while developing long-term coping strategies.',
    details: [
      'Generalized anxiety disorder',
      'Social anxiety',
      'Panic attacks',
      'Phobias',
      'OCD management'
    ]
  },
  {
    title: 'Depression Treatment',
    description: 'Our approach to treating depression combines evidence-based therapies with personalized support to help you recover and develop resilience against future episodes.',
    details: [
      'Major depressive disorder',
      'Persistent depressive disorder',
      'Seasonal affective disorder',
      'Postpartum depression',
      'Mood management strategies'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Comprehensive psychological support tailored to your needs
          </p>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;