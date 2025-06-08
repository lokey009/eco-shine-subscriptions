
import { Sparkles, Car, Bike } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useVehicle } from "@/contexts/VehicleContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { vehicleType, setVehicleType } = useVehicle();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-dark-gray">ShineWay</span>
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

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/plans" 
              className={`transition-colors ${isActive('/plans') ? 'text-primary font-medium' : 'text-dark-gray hover:text-primary'}`}
            >
              Plans
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-dark-gray hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-dark-gray hover:text-primary'}`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className={`transition-colors ${isActive('/login') ? 'text-primary font-medium' : 'text-dark-gray hover:text-primary'}`}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
