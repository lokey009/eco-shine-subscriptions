import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useVehicle } from "@/contexts/VehicleContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Plans = () => {
  const { vehicleType, setVehicleType } = useVehicle();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userHasPlan, setUserHasPlan] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
    
    // Check if user already has a plan
    const existingPlan = localStorage.getItem('userPlan');
    setUserHasPlan(!!existingPlan);
  }, []);

  const carPlans = [
    {
      id: "basic-car",
      name: "Basic Car Plan",
      price: 499,
      frequency: "3 washes/week",
      features: ["Exterior wash", "Eco-friendly products", "Flexible scheduling", "Doorstep service"]
    },
    {
      id: "premium-car", 
      name: "Premium Car Plan",
      price: 799,
      frequency: "Daily wash",
      features: ["Daily exterior wash", "Premium eco products", "Priority scheduling", "WhatsApp support", "Quality guarantee"],
      highlighted: true
    },
    {
      id: "ultimate-car",
      name: "Ultimate Car Plan", 
      price: 999,
      frequency: "Daily + Interior",
      features: ["Daily exterior wash", "Weekly interior dry clean", "Premium products", "Priority support", "Damage protection", "Dashboard polishing"]
    }
  ];

  const bikePlans = [
    {
      id: "basic-bike",
      name: "Basic Bike Plan",
      price: 199,
      frequency: "2 washes/week",
      features: ["Exterior wash", "Eco-friendly products", "Flexible scheduling", "Chain cleaning"]
    },
    {
      id: "standard-bike", 
      name: "Standard Bike Plan",
      price: 299,
      frequency: "3 washes/week",
      features: ["3x weekly wash", "Chain & gear cleaning", "Premium eco products", "WhatsApp support", "Helmet cleaning"],
      highlighted: true
    },
    {
      id: "max-bike",
      name: "Max Bike Plan", 
      price: 399,
      frequency: "Daily wash",
      features: ["Daily exterior wash", "Chain maintenance", "Premium products", "Priority support", "Engine bay cleaning", "Tyre shine"]
    }
  ];

  const currentPlans = vehicleType === "car" ? carPlans : bikePlans;

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    
    if (!isLoggedIn) {
      // Redirect to login with plan info
      navigate('/login', { 
        state: { 
          redirectTo: '/payment',
          selectedPlan: planId, 
          vehicleType 
        } 
      });
    } else {
      // User is logged in, go directly to payment
      navigate('/payment', { 
        state: { 
          selectedPlan: planId, 
          vehicleType,
          userData: JSON.parse(localStorage.getItem('userData') || '{}')
        } 
      });
    }
  };

  const getButtonText = () => {
    return userHasPlan ? "Update Plan" : "Select Plan";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
      </div>
      
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {vehicleType === "car" ? "Car Wash" : "Bike Wash"} Plans
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Professional {vehicleType} washing at your doorstep
            </p>
            
            {userHasPlan && (
              <div className="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <p className="text-sm text-green-200">
                  You currently have an active plan. You can upgrade or change your plan below.
                </p>
              </div>
            )}
            
            {/* Vehicle Type Selector */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30">
                <Button
                  variant={vehicleType === 'car' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('car')}
                  className={`h-10 px-6 ${
                    vehicleType === 'car' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  }`}
                >
                  Car Plans
                </Button>
                <Button
                  variant={vehicleType === 'bike' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVehicleType('bike')}
                  className={`h-10 px-6 ${
                    vehicleType === 'bike' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  }`}
                >
                  Bike Plans
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-xl bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl ${
                  plan.highlighted ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">₹{plan.price}</div>
                  <CardDescription className="text-lg text-gray-300">{plan.frequency}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-8 h-12 font-semibold ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                        : 'bg-gray-800/50 border-cyan-500/30 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                    }`}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    {getButtonText()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Plans;
