import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";

export const OrderOnlinePage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <nav className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="hover:text-[#00824a] cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff4d4f]">Order Online</span>
          </nav>
        </div>
        {/* Header */}
        <div className="bg-[#00824a] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Order Online</h1>
            <p className="text-xl">Easy online ordering for all your car wash chemical needs</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Ordering Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Direct Ordering */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">🛒</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#00824a]">Direct Ordering</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Order directly through our secure online platform. Browse our complete catalog, 
                  compare products, and place orders with just a few clicks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Secure online payment
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Real-time inventory
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Order tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Fast delivery
                  </li>
                </ul>
                <Button className="bg-[#00824a] hover:bg-[#006838] text-white w-full">
                  Shop Now
                </Button>
              </div>

              {/* Contact Sales */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">📞</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#00824a]">Contact Sales</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Prefer to speak with our sales team? Get personalized recommendations, 
                  bulk pricing, and expert advice for your specific needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Personalized consultation
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Bulk pricing options
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Technical support
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#00824a] mr-2">✓</span>
                    Custom solutions
                  </li>
                </ul>
                <Button className="bg-[#00824a] hover:bg-[#006838] text-white w-full">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Product Categories */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#00824a]">Shop by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Presoaks", icon: "💧", count: "12 products" },
                  { name: "Detergents", icon: "🧼", count: "18 products" },
                  { name: "Finishing", icon: "✨", count: "15 products" },
                  { name: "Wheel & Tire", icon: "🚗", count: "8 products" }
                ].map((category, index) => (
                  <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#00824a] transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ordering Process */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#00824a]">How to Order</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Browse Products</h3>
                  <p className="text-gray-600 text-sm">Explore our complete catalog of car wash chemicals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Add to Cart</h3>
                  <p className="text-gray-600 text-sm">Select products and quantities for your order</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Checkout</h3>
                  <p className="text-gray-600 text-sm">Complete your order with secure payment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Receive</h3>
                  <p className="text-gray-600 text-sm">Get your products delivered to your door</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#00824a] to-[#006838] rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
              <p className="text-xl mb-6">
                Start shopping our complete line of professional car wash chemicals today.
              </p>
              <Button className="bg-white text-[#00824a] hover:bg-gray-100 mr-4">
                Browse Products
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#00824a]">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};