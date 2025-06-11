
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 sm:py-16 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EcoShine</span>
            </Link>
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              Eco-friendly car & bike washing at your doorstep. Subscribe once, shine always.
            </p>
            <div className="space-y-3">
              <Link to="/home" className="block text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/plans" className="block text-gray-400 hover:text-cyan-400 transition-colors">Plans</Link>
              <Link to="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 w-5 h-5 bg-cyan-400/20 rounded-full blur-sm"></div>
                </div>
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 w-5 h-5 bg-cyan-400/20 rounded-full blur-sm"></div>
                </div>
                <span className="text-gray-300">hello@ecoshine.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div className="absolute inset-0 w-5 h-5 bg-cyan-400/20 rounded-full blur-sm"></div>
                </div>
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Gachibowli</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">HITEC City</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Kondapur</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Madhapur</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Banjara Hills</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Jubilee Hills</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 EcoShine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
