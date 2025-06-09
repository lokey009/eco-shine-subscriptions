
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
  
  // Mock authentication check - replace with actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (mock check)
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-4">
              {vehicleType === "car" ? "Car Wash" : "Bike Wash"} Plans
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Professional {vehicleType} washing at your doorstep
            </p>
            
            {/* Vehicle Type Selector */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-md">
                <Button
                  variant={vehicleType === 'car' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVehicleType('car')}
                  className="h-10 px-6"
                >
                  Car Plans
                </Button>
                <Button
                  variant={vehicleType === 'bike' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVehicleType('bike')}
                  className="h-10 px-6"
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
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-dark-gray">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">₹{plan.price}</div>
                  <CardDescription className="text-lg text-gray-600">{plan.frequency}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-8 h-12 font-semibold ${
                      plan.highlighted 
                        ? 'eco-gradient hover:opacity-90' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    Select Plan
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
