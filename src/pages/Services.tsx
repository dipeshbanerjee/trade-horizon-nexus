
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Services</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive trading and logistics solutions for your business needs
        </p>
      </div>

      {/* Export Services */}
      <div className="mb-16">
        <Card className="border-t-4 border-t-green-500">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Merchant Export / Trading Export</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Kasper Trading Corporation handles a trusted place in the global trade ecosystem, facilitating the import and export of a wide array of 
              products and commodities. We provide sourcing, distribution expertise, quality inspection, manufacturing, and distribution across the 
              globe to meet your needs.
            </p>
            <p className="text-gray-700">
              Our extensive supplier network enables proven quality control processes, ensuring you're only paying the finest products and getting 
              commodities from our network of reliable suppliers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Distribution Services */}
      <div className="mb-16">
        <Card className="border-t-4 border-t-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Product Distribution Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              At Kasper Trading Corporation Services, we enable businesses to expand globally through seamless procurement, distribution, and delivery 
              solutions. With strong governance standards and established markets such as Africa, Asia, USA, Canada, and the 
              Middle East, we empower businesses to establish effective distribution channels and reach their target markets efficiently.
            </p>
            <p className="text-gray-700">
              Our dedicated network of professionals, agents, and local partners ensures complete support in product placement, vendor 
              promotion, and targeted market rooting.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Strategy */}
      <div className="mb-16">
        <Card className="border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Partnership & Negotiation Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              We specialize in building cross-border alliances and collaborative ventures that foster mutual growth and profit. Our partnership strategy is 
              based on detailed procurement and negotiation practices for all stakeholders.
            </p>
            <p className="text-gray-700">
              Entering a foreign market often requires the right local collaboration - we help you identify, negotiate deals, and form strategic 
              partnerships with trust brokers for a successful market entry.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
