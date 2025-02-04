import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us to schedule an appointment or learn more about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-900 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+61 3 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-900 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@gnpsychology.com.au</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-900 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: By appointment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-900 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">123 Example Street</p>
                    <p className="text-gray-600">Melbourne, VIC 3000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Information</h3>
              <p className="text-gray-600 mb-4">
                If you're experiencing a mental health emergency or crisis, please contact:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Lifeline: 13 11 14 (24/7)</li>
                <li>• Beyond Blue: 1300 22 4636 (24/7)</li>
                <li>• Emergency Services: 000</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;