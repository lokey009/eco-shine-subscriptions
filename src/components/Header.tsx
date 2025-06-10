
import { Sparkles, Car, Bike, MapPin, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useVehicle } from "@/contexts/VehicleContext";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "./ProfileDropdown";
import { useState, useEffect } from "react";

const Header = () => {
  const { vehicleType, setVehicleType } = useVehicle();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/dashboard" 
              className={`transition-colors ${
                isActive('/dashboard') 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/plans" 
              className={`transition-colors ${
                isActive('/plans') 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Plans
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile and controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Vehicle Toggle */}
            <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-cyan-500/30">
              <Button
                variant={vehicleType === 'car' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setVehicleType('car')}
                className={`flex items-center space-x-1 h-8 px-2 text-xs sm:text-sm ${
                  vehicleType === 'car' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                }`}
              >
                <Car className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Car</span>
              </Button>
              <Button
                variant={vehicleType === 'bike' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setVehicleType('bike')}
                className={`flex items-center space-x-1 h-8 px-2 text-xs sm:text-sm ${
                  vehicleType === 'bike' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                }`}
              >
                <Bike className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Bike</span>
              </Button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-8 w-8 p-0 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Location Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center space-x-1 h-8 px-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50" 
              asChild
            >
              <Link to="/location">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline text-xs sm:text-sm">Location</span>
              </Link>
            </Button>

            {/* Profile/Login */}
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
