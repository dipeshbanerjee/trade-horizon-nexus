import React from "react";
import { Building, Users, Award, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Kasper Trading Corporation</h1>
            <p className="text-xl text-gray-700 mb-8">
              Building global trade relationships with integrity, quality, and excellence since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="/public/lovable-uploads/783d3771-919d-42bb-b716-70b5c4ca4581.png" 
                alt="Our Story - Indian Trading Company" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Kasper Trading Corporation was founded with a vision to connect quality products with global markets. What started as a small export venture has grown into a comprehensive trading company with clients across multiple continents.
              </p>
              <p className="text-lg text-gray-700">
                Our journey has been defined by our commitment to understanding the unique needs of each market we serve, carefully selecting the best products, and ensuring seamless logistics from source to destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">We never compromise on the quality of products we source and deliver.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Relationships</h3>
              <p className="text-gray-600">We build lasting partnerships based on trust and mutual success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">We understand diverse markets and adapt to local requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">We deliver on our promises with consistent and timely service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src="/public/lovable-uploads/2829ca18-bad4-4e49-9f9a-efcc597e91e2.png" alt="CEO" />
                <AvatarFallback>VK</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Vikram Kapoor</h3>
              <p className="text-green-600 mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">With over 20 years of experience in international trade and supply chain management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src="/public/lovable-uploads/8b3b5f07-7e51-4947-8554-584599cb52c1.png" alt="COO" />
                <AvatarFallback>PG</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Priya Gupta</h3>
              <p className="text-green-600 mb-3">Chief Operations Officer</p>
              <p className="text-gray-600">Specializes in optimizing logistics and ensuring smooth operational processes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src="/public/lovable-uploads/151b173d-7798-4da1-bfe5-3c9d60be3ec8.png" alt="CMO" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Raj Mehta</h3>
              <p className="text-green-600 mb-3">Chief Marketing Officer</p>
              <p className="text-gray-600">Expert in developing market entry strategies and building brand presence internationally.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
