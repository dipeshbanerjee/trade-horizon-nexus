
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
              {/* This would be an image in the real implementation */}
              <div className="bg-amber-200 h-80 rounded-lg shadow-md"></div>
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
                <h3 className="font-semibold text-lg mb-2">Global Network</h3>
                <p className="text-gray-600">Extensive network of partners across continents</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control for all products</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Efficient logistics and timely delivery</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Customer Service</h3>
                <p className="text-gray-600">Dedicated support for your needs</p>
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
                <div className="h-48 bg-amber-100"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Agro Commodities</h3>
                  <p className="text-gray-600">Fresh produce and agricultural products</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-red-100"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">General Trading</h3>
                  <p className="text-gray-600">Various consumer goods and products</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-blue-100"></div>
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
