
import { useState } from "react";
import { ChevronDown, CheckCircle, Calendar, Sparkles, Droplets, Users, Car, Bike, Phone, Mail, MapPin, Shield, Leaf, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    society: "",
    vehicleType: "car",
    preferredDays: [],
    preferredTime: ""
  });

  const communities = [
    "MyHome Avatar",
    "Aparna Sarovar", 
    "Brigade Gateway",
    "Prestige Lakeside Habitat",
    "Mantri Alpyne"
  ];

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

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setFormData({...formData, vehicleType});
    setShowSignupForm(true);
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Welcome to ShineWay! We'll contact you soon to confirm your subscription.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-dark-gray">ShineWay</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-dark-gray hover:text-primary transition-colors">How it Works</a>
              <a href="#plans" className="text-dark-gray hover:text-primary transition-colors">Plans</a>
              <a href="#features" className="text-dark-gray hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-dark-gray hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-dark-gray hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white hero-pattern py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-dark-gray mb-6 tracking-tight">
            Eco-Friendly Car & Bike Wash.<br />Daily. At Your Doorstep.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 font-light max-w-4xl mx-auto">
            Serving gated societies & individual apartments across Hyderabad
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <Label htmlFor="location" className="block text-lg font-medium text-dark-gray mb-4">
              Where do you live?
            </Label>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Select your living situation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gated">Gated Community</SelectItem>
                <SelectItem value="individual">Individual Apartment</SelectItem>
              </SelectContent>
            </Select>
            
            {selectedLocation === "gated" && (
              <Select value={formData.society} onValueChange={(value) => setFormData({...formData, society: value})}>
                <SelectTrigger className="h-12 text-lg mt-4">
                  <SelectValue placeholder="Select your community" />
                </SelectTrigger>
                <SelectContent>
                  {communities.map(community => (
                    <SelectItem key={community} value={community}>{community}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            
            {selectedLocation === "individual" && (
              <Input 
                placeholder="Enter your address with landmark"
                className="h-12 text-lg mt-4"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            )}
          </div>

          {/* Vehicle Type Selector */}
          <div className="mb-12">
            <Label className="block text-lg font-medium text-dark-gray mb-4">
              Choose your vehicle type
            </Label>
            <ToggleGroup 
              type="single" 
              value={vehicleType} 
              onValueChange={(value) => value && setVehicleType(value)}
              className="justify-center"
            >
              <ToggleGroupItem 
                value="car" 
                className="flex items-center space-x-2 px-8 py-3 data-[state=on]:bg-primary data-[state=on]:text-white"
              >
                <Car className="w-5 h-5" />
                <span>Car</span>
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="bike" 
                className="flex items-center space-x-2 px-8 py-3 data-[state=on]:bg-primary data-[state=on]:text-white"
              >
                <Bike className="w-5 h-5" />
                <span>Bike</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <Button 
            size="lg" 
            className="h-14 px-12 text-lg font-semibold eco-gradient hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Plans
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-dark-gray mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="text-center border-none shadow-none">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-gray">Subscribe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 font-light leading-relaxed">
                  Pick a plan that suits your vehicle and schedule
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-gray">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 font-light leading-relaxed">
                  Choose your preferred time slots and days
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-gray">Shine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 font-light leading-relaxed">
                  We visit and clean your vehicle, hassle-free
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dynamic Plans Section */}
      <section id="plans" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-4">
              {vehicleType === "car" ? "Car Wash" : "Bike Wash"} Plans
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Professional {vehicleType} washing at your doorstep
            </p>
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
                    onClick={() => handleSubscribe(plan.id)}
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features/USPs Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-dark-gray mb-16">
            Why Choose ShineWay?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Waterless Wash</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Saves 200L water per wash using eco-friendly cleaning methods
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Verified Cleaners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Trained and background-verified staff for consistent quality
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Pause, resume, or reschedule your service anytime
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Eco Detergents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  100% biodegradable, pet-safe and non-toxic cleaning products
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About/Impact Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-8">
              Built for Eco & Efficiency
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              ShineWay is a sustainable car & bike wash platform serving urban apartments and gated communities. 
              We save water, time, and effort while keeping your ride spotless.
            </p>
          </div>
          
          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">12,000+</div>
                <CardTitle className="text-lg text-dark-gray">Cars Cleaned</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">7,500+</div>
                <CardTitle className="text-lg text-dark-gray">Bikes Cleaned</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">5M+</div>
                <CardTitle className="text-lg text-dark-gray">Litres Saved</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">4,000+</div>
                <CardTitle className="text-lg text-dark-gray">Subscribers</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      {showSignupForm && (
        <section id="signup" className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-dark-gray">Start Your ShineWay</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Complete your {vehicleType} wash subscription in just a few steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-2"
                        placeholder="10-digit mobile number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Vehicle Type</Label>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        {vehicleType === "car" ? <Car className="w-5 h-5" /> : <Bike className="w-5 h-5" />}
                        <span className="font-medium capitalize">{vehicleType}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Preferred Days</Label>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox id={day} />
                          <Label htmlFor={day} className="text-sm">{day}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7-10">7-10 AM</SelectItem>
                        <SelectItem value="10-1">10-1 PM</SelectItem>
                        <SelectItem value="1-4">1-4 PM</SelectItem>
                        <SelectItem value="4-7">4-7 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
                    Start My ShineWay
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-dark-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold">ShineWay</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Eco-friendly car & bike washing at your doorstep. Subscribe once, shine always.
              </p>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 hover:text-primary transition-colors">Home</a>
                <a href="#plans" className="block text-gray-400 hover:text-primary transition-colors">Plans</a>
                <a href="#features" className="block text-gray-400 hover:text-primary transition-colors">Features</a>
                <a href="#about" className="block text-gray-400 hover:text-primary transition-colors">About</a>
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
    </div>
  );
};

export default Index;
