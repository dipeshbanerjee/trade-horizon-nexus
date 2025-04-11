
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                DELIVERING EXCELLENCE ACROSS BORDERS
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Global Solutions for Your Trading Challenges. 
                Connecting Businesses Worldwide with Quality Products and Reliable Service.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Global Trade" 
                className="rounded-lg shadow-md object-cover h-80 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Delivering Quality, Innovation, and Global Reach
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            At Veeam, we are committed to providing the top quality products across areas of businesses worldwide. 
            As a trusted supplier, we pride ourselves on fast delivery, reliability, and efficiency of our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                  alt="Global Network" 
                  className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-center">Global Network</h3>
                <p className="text-gray-600 text-center">Extensive network of partners across continents</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                  alt="Quality Assurance" 
                  className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-center">Quality Assurance</h3>
                <p className="text-gray-600 text-center">Rigorous quality control for all products</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                  alt="Fast Delivery" 
                  className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-center">Efficient logistics and timely delivery</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                  alt="Customer Service" 
                  className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-center">Customer Service</h3>
                <p className="text-gray-600 text-center">Dedicated support for your needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Product Categories</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our wide range of high-quality products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/2829ca18-bad4-4e49-9f9a-efcc597e91e2.png" 
                  alt="Agro Commodities" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Agro Commodities</h3>
                  <p className="text-gray-600">Fresh produce and agricultural products</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/783d3771-919d-42bb-b716-70b5c4ca4581.png" 
                  alt="General Trading" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">General Trading</h3>
                  <p className="text-gray-600">Various consumer goods and products</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="/lovable-uploads/8b3b5f07-7e51-4947-8554-584599cb52c1.png" 
                  alt="Paper Products" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Paper Products</h3>
                  <p className="text-gray-600">Paper and packaging materials</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
