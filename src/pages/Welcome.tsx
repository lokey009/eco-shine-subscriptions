
import { Car, Bike, MapPin, User, Droplets, Users, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useVehicle } from "@/contexts/VehicleContext";
import Footer from "@/components/Footer";

const Welcome = () => {
  const { vehicleType, setVehicleType } = useVehicle();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Navigation Bar */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-dark-gray">EcoShine</span>
            </Link>
            
            {/* Vehicle Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={vehicleType === 'car' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('car')}
                  className="flex items-center space-x-2 h-8"
                >
                  <Car className="w-4 h-4" />
                  <span>Car</span>
                </Button>
                <Button
                  variant={vehicleType === 'bike' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('bike')}
                  className="flex items-center space-x-2 h-8"
                >
                  <Bike className="w-4 h-4" />
                  <span>Bike</span>
                </Button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2" asChild>
                <Link to="/location">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2" asChild>
                <Link to="/login">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-gray mb-6">
            Premium <span className="text-primary">Eco-Friendly</span>
            <br />
            {vehicleType === 'car' ? 'Car' : 'Bike'} Wash Service
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Subscribe once, shine always. Professional {vehicleType} washing at your doorstep 
            with 100% eco-friendly products and water conservation technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold eco-gradient hover:opacity-90">
                Sign Up & Start Shining
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Login to Account
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-dark-gray mb-2">5,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-dark-gray mb-2">200+</h3>
              <p className="text-gray-600">Gated Communities</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Droplets className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-dark-gray mb-2">1M+ Liters</h3>
              <p className="text-gray-600">Water Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car/Bike Cleaning Images Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">
            Professional {vehicleType === 'car' ? 'Car' : 'Bike'} Care
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                {vehicleType === 'car' ? <Car className="w-24 h-24 text-primary" /> : <Bike className="w-24 h-24 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Exterior Wash</h3>
              <p className="text-gray-600">Complete exterior cleaning with eco-friendly products</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                <Droplets className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Water Conservation</h3>
              <p className="text-gray-600">Advanced water recycling and minimal usage technology</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                {vehicleType === 'car' ? <Car className="w-24 h-24 text-primary" /> : <Bike className="w-24 h-24 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Premium Finish</h3>
              <p className="text-gray-600">Spotless shine that lasts longer</p>
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
