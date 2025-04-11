
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Products and Categories</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We offer a diverse range of high-quality products to meet your business needs
        </p>
      </div>

      {/* Agro Commodities */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Agro Commodities</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img 
              src="/lovable-uploads/2829ca18-bad4-4e49-9f9a-efcc597e91e2.png" 
              alt="Agro Commodities" 
              className="rounded-lg h-64 w-full object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-4">
              Our Agro Commodities lineup includes premium quality products sourced directly from trusted farms. 
              We source and supply cereals, vegetables and fruits, pulses, oil seeds, and many other agricultural products.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rice Mills</li>
              <li>Fruit</li>
              <li>Tea</li>
              <li>Coffee</li>
            </ul>
          </div>
        </div>
      </div>

      {/* General Trading */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">General Trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img 
              src="/lovable-uploads/783d3771-919d-42bb-b716-70b5c4ca4581.png" 
              alt="General Trading - Grocery Products" 
              className="rounded-lg h-64 w-full object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-4">
              Our General Trading Division offers a diverse range of products tailored to end-markets with 
              steady demand. These include household goods, health and personal care items, as well as other consumer goods.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Furniture</li>
              <li>LED Bulbs</li>
              <li>Small Plants</li>
              <li>Plastic Bottles and Containers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Papers and Packaging */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Papers and Packaging</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img 
              src="/lovable-uploads/8b3b5f07-7e51-4947-8554-584599cb52c1.png" 
              alt="Papers and Packaging" 
              className="rounded-lg h-64 w-full object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-4">
              We supply a variety of paper products designed for use with publishing, printing, 
              consumer packaged goods, and other industrial uses. Our papers include specialty grades for various needs.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kraft Papers</li>
              <li>Printing Materials</li>
              <li>Paper Napkins</li>
              <li>Toilet Tissue</li>
              <li>Card Papers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Textile and Garments */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Textile and Garments</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
              alt="Textile and Garments" 
              className="rounded-lg h-64 w-full object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-4">
              Our textile and garments line includes a wide range of high-quality products, including traditional 
              clothing, modern apparel, and fabrics. We source from ethical manufacturers who maintain quality standards.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rugs</li>
              <li>Mats</li>
              <li>Cotton Shirts</li>
              <li>Woven Apparel</li>
              <li>Sweaters</li>
              <li>Shawls</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FMCG */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">FMCG</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img 
              src="/lovable-uploads/151b173d-7798-4da1-bfe5-3c9d60be3ec8.png" 
              alt="FMCG Products - Cookies" 
              className="rounded-lg h-64 w-full object-cover shadow-sm"
            />
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700 mb-4">
              We offer a variety of fast-moving consumer goods (FMCG) designed to meet the demands of your 
              customer base. Our selection includes food products, beverages, household essentials, 
              confectionery, and products we source for major distributors. Our FMCG products include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Biscuits</li>
              <li>Carbonated Drinks</li>
              <li>Milk Solids</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
