
import { Car, Bike, MapPin, User, Droplets, Users, Building2, Sparkles, Star, Shield, Clock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useVehicle } from "@/contexts/VehicleContext";
import { useState } from "react";
import Footer from "@/components/Footer";

const Welcome = () => {
  const { vehicleType, setVehicleType } = useVehicle();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Bar */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EcoShine
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Vehicle Toggle */}
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-cyan-500/30">
                <Button
                  variant={vehicleType === 'car' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('car')}
                  className={`flex items-center space-x-2 h-8 ${
                    vehicleType === 'car' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Car className="w-4 h-4" />
                  <span>Car</span>
                </Button>
                <Button
                  variant={vehicleType === 'bike' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('bike')}
                  className={`flex items-center space-x-2 h-8 ${
                    vehicleType === 'bike' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  <span>Bike</span>
                </Button>
              </div>

              {/* Navigation Items */}
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50" asChild>
                <Link to="/location">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50" asChild>
                <Link to="/plans">Plans</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50" asChild>
                <Link to="/about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30" 
                asChild
              >
                <Link to="/login">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-cyan-500/20 py-4">
              <div className="flex flex-col space-y-4">
                {/* Vehicle Toggle for Mobile */}
                <div className="flex items-center justify-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 mx-4">
                  <Button
                    variant={vehicleType === 'car' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setVehicleType('car')}
                    className={`flex items-center space-x-2 h-10 flex-1 ${
                      vehicleType === 'car' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <Car className="w-4 h-4" />
                    <span>Car</span>
                  </Button>
                  <Button
                    variant={vehicleType === 'bike' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setVehicleType('bike')}
                    className={`flex items-center space-x-2 h-10 flex-1 ${
                      vehicleType === 'bike' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>Bike</span>
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-2 px-4">
                  <Button 
                    variant="ghost" 
                    className="justify-start text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 h-12" 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/location">
                      <MapPin className="w-5 h-5 mr-3" />
                      Location
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="justify-start text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 h-12" 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/plans">Plans</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="justify-start text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 h-12" 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/about">About</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="justify-start text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 h-12" 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/contact">Contact</Link>
                  </Button>
                  <Button 
                    className="justify-start bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30 h-12" 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/login">
                      <User className="w-5 h-5 mr-3" />
                      Login
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
        </div>
        
        {/* Premium Vehicle Image Section */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-96 opacity-30">
          {vehicleType === 'car' ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent rounded-l-3xl"></div>
              <Car className="w-full h-full text-cyan-400/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-400/10 animate-pulse"></div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent rounded-l-3xl"></div>
              <Bike className="w-full h-full text-blue-400/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-400/10 animate-pulse"></div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Premium 
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Eco-Friendly
              </span>
              <br />
              <span className="text-white">
                {vehicleType === 'car' ? 'Car' : 'Bike'} Wash Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Subscribe once, shine always. Professional {vehicleType} washing at your doorstep 
              with 100% eco-friendly products and water conservation technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-16 px-8 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-xl shadow-cyan-500/25 border border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Shining Today
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto h-16 px-8 text-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  Login to Account
                </Button>
              </Link>
            </div>

            {/* Premium Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <Shield className="w-8 h-8 text-cyan-400" />
                    <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
                <p className="text-gray-300">Professional grade equipment and eco-friendly products</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <Clock className="w-8 h-8 text-blue-400" />
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full blur-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">On-Time Service</h3>
                <p className="text-gray-300">Reliable scheduling with doorstep convenience</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <Star className="w-8 h-8 text-purple-400" />
                    <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full blur-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">5-Star Rated</h3>
                <p className="text-gray-300">Trusted by thousands of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Users className="w-16 h-16 text-cyan-400" />
                  <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-md"></div>
                </div>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">5,000+</h3>
              <p className="text-gray-300 text-lg">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Building2 className="w-16 h-16 text-blue-400" />
                  <div className="absolute inset-0 w-16 h-16 bg-blue-400/20 rounded-full blur-md"></div>
                </div>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">200+</h3>
              <p className="text-gray-300 text-lg">Gated Communities</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Droplets className="w-16 h-16 text-purple-400" />
                  <div className="absolute inset-0 w-16 h-16 bg-purple-400/20 rounded-full blur-md"></div>
                </div>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-2">1M+</h3>
              <p className="text-gray-300 text-lg">Liters Water Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional {vehicleType === 'car' ? 'Car' : 'Bike'} Care
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                {vehicleType === 'car' ? (
                  <Car className="w-24 h-24 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Bike className="w-24 h-24 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Exterior Wash</h3>
              <p className="text-gray-300">Complete exterior cleaning with premium eco-friendly products</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <Droplets className="w-24 h-24 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Water Conservation</h3>
              <p className="text-gray-300">Advanced water recycling and minimal usage technology</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                {vehicleType === 'car' ? (
                  <Car className="w-24 h-24 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Bike className="w-24 h-24 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/10 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Premium Finish</h3>
              <p className="text-gray-300">Spotless shine that lasts longer with protective coating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Welcome;
