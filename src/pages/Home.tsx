
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Home = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

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
            At Kasper Trading Corporation, we are committed to providing top-tier products that meet the diverse needs of businesses worldwide. As a trusted exporter, we pride ourselves on the quality, reliability, and efficiency of our services. Whether you are looking to source high-quality agro commodities, modern consumer goods, or sustainable packaging solutions,
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

      {/* Contact Us Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Get in touch with our team to discuss your trading needs
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-6">Reach Out to Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@kaspertrading.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Business Avenue,<br />New York, NY 10001<br />United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={4} />
                  </div>
                  
                  <div className="text-right">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
