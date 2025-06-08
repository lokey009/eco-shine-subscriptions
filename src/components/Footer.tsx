
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">ShineWay</span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Eco-friendly car & bike washing at your doorstep. Subscribe once, shine always.
            </p>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-primary transition-colors">Home</Link>
              <Link to="/plans" className="block text-gray-400 hover:text-primary transition-colors">Plans</Link>
              <Link to="/about" className="block text-gray-400 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">hello@shineway.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Service Areas</h3>
            <div className="space-y-2 text-gray-400">
              <p>Gachibowli</p>
              <p>HITEC City</p>
              <p>Kondapur</p>
              <p>Madhapur</p>
              <p>Banjara Hills</p>
              <p>Jubilee Hills</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShineWay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
