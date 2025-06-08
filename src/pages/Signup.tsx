
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Car, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useVehicle } from "@/contexts/VehicleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicleType: globalVehicleType } = useVehicle();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    vehicleType: location.state?.vehicleType || globalVehicleType,
    selectedPlan: location.state?.selectedPlan || "",
    locationType: "",
    society: "",
    address: "",
    preferredDays: [] as string[],
    preferredTime: ""
  });

  const communities = [
    "MyHome Avatar",
    "Aparna Sarovar", 
    "Brigade Gateway",
    "Prestige Lakeside Habitat",
    "Mantri Alpyne"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    
    // Redirect to payment page
    navigate('/payment', { state: { userData: formData } });
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-dark-gray">Start Your ShineWay</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Complete your {formData.vehicleType} wash subscription
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-dark-gray">Personal Information</h3>
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
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input 
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="mt-2"
                        placeholder="Min 6 characters"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input 
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Type */}
                <div>
                  <Label>Vehicle Type</Label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      {formData.vehicleType === "car" ? <Car className="w-5 h-5" /> : <Bike className="w-5 h-5" />}
                      <span className="font-medium capitalize">{formData.vehicleType}</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-dark-gray">Location</h3>
                  <div>
                    <Label>Where do you live?</Label>
                    <Select value={formData.locationType} onValueChange={(value) => setFormData({...formData, locationType: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your living situation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gated">Gated Community</SelectItem>
                        <SelectItem value="individual">Individual Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.locationType === "gated" && (
                    <div>
                      <Label>Select your community</Label>
                      <Select value={formData.society} onValueChange={(value) => setFormData({...formData, society: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choose your community" />
                        </SelectTrigger>
                        <SelectContent>
                          {communities.map(community => (
                            <SelectItem key={community} value={community}>{community}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {formData.locationType === "individual" && (
                    <div>
                      <Label>Address</Label>
                      <Input 
                        placeholder="Enter your address with landmark"
                        className="mt-2"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  )}
                </div>

                {/* Schedule Preferences */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-dark-gray">Schedule Preferences</h3>
                  <div>
                    <Label>Preferred Days</Label>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox 
                            id={day} 
                            checked={formData.preferredDays.includes(day)}
                            onCheckedChange={() => handleDayToggle(day)}
                          />
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
                </div>

                <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
                  Continue to Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Signup;
