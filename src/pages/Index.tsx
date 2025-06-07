
import { useState } from "react";
import { ChevronDown, CheckCircle, Calendar, Sparkles, Droplets, Users, Car, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    society: "",
    preferredDays: [],
    preferredTime: ""
  });

  const communities = [
    "Green Valley Society",
    "Sunshine Apartments",
    "Royal Gardens",
    "Eco Heights",
    "Palm Residency"
  ];

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 499,
      frequency: "3 washes/week",
      features: ["Exterior wash", "Eco-friendly products", "Flexible scheduling"]
    },
    {
      id: "premium", 
      name: "Premium",
      price: 799,
      frequency: "Daily wash",
      features: ["Daily exterior wash", "Premium eco products", "Priority scheduling", "WhatsApp support"],
      highlighted: true
    },
    {
      id: "deluxe",
      name: "Deluxe", 
      price: 999,
      frequency: "Daily + Interior",
      features: ["Daily exterior wash", "Weekly interior cleaning", "Premium products", "Priority support", "Damage protection"]
    }
  ];

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
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
            Eco Wash, Daily at Your Doorstep
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Subscribe once. Shine always.
          </p>
          
          <div className="max-w-md mx-auto mb-12">
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
                placeholder="Enter your address"
                className="h-12 text-lg mt-4"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            )}
          </div>

          <Button 
            size="lg" 
            className="h-14 px-12 text-lg font-semibold eco-gradient hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
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
                  Choose your preferred time slots
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

      {/* Subscription Plans Section */}
      <section id="plans" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-dark-gray mb-16">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
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
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Eco Mission Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-8">
                Our Eco Mission
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                ShineWay is saving 200L of water per car monthly through our innovative eco-friendly 
                washing techniques. We use biodegradable products and water-efficient methods to keep 
                your vehicle sparkling while protecting our planet.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Every wash contributes to a greener future. Join thousands of subscribers who have 
                chosen convenience without compromise.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Car className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-gray-600 font-light">Professional eco-friendly car washing</p>
              </div>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">50,000+</div>
                <CardTitle className="text-lg text-dark-gray">Cars Washed</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">10M+</div>
                <CardTitle className="text-lg text-dark-gray">Litres Saved</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">5,000+</div>
                <CardTitle className="text-lg text-dark-gray">Happy Subscribers</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      {showSignupForm && (
        <section id="signup" className="py-24 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-dark-gray">Start Your ShineWay</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Complete your subscription in just a few steps
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
              <p className="text-gray-400 font-light leading-relaxed">
                Eco-friendly car washing at your doorstep. Subscribe once, shine always.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 hover:text-primary transition-colors">Home</a>
                <a href="#plans" className="block text-gray-400 hover:text-primary transition-colors">Plans</a>
                <a href="#about" className="block text-gray-400 hover:text-primary transition-colors">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors">Contact</a>
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
                  <span className="text-gray-400">Bangalore, India</span>
                </div>
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
