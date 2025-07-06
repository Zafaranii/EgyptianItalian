import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";

export const ProductsPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <nav className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="hover:text-[#00824a] cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff4d4f]">Products</span>
          </nav>
        </div>
        {/* Header */}
        <div className="bg-[#00824a] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Discover our comprehensive range of car wash chemicals</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Categories */}
            {[
              {
                name: "Presoaks",
                image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "Advanced presoak solutions for effective cleaning"
              },
              {
                name: "Detergents",
                image: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "High-performance detergents for superior results"
              },
              {
                name: "Finishing Products",
                image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "Premium finishing products for the perfect shine"
              },
              {
                name: "Wheel & Tire",
                image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "Specialized wheel and tire cleaning solutions"
              },
              {
                name: "Specialty",
                image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "Unique specialty products for specific needs"
              },
              {
                name: "Eco-Friendly",
                image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                description: "Environmentally conscious cleaning solutions"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#00824a]">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button className="bg-[#00824a] hover:bg-[#006838] text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};