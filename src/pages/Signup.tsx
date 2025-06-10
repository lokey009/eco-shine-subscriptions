
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    locationType: "",
    society: "",
    address: ""
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
    
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
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

    // Save user data and set as logged in
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(formData));
    
    toast.success("Account created successfully!");
    
    // Navigate to plans page after successful signup
    navigate('/plans');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl premium-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Join EcoShine</CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Create your account to start your car/bike wash subscription
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                  
                  <div>
                    <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
                    <Input 
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="10-digit mobile number"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password" className="text-gray-300">Password *</Label>
                      <Input 
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="Min 6 characters"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password *</Label>
                      <Input 
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <div>
                    <Label className="text-gray-300">Where do you live?</Label>
                    <Select value={formData.locationType} onValueChange={(value) => setFormData({...formData, locationType: value})}>
                      <SelectTrigger className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white">
                        <SelectValue placeholder="Select your living situation" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-cyan-500/30">
                        <SelectItem value="gated">Gated Community</SelectItem>
                        <SelectItem value="individual">Individual Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.locationType === "gated" && (
                    <div>
                      <Label className="text-gray-300">Select your community</Label>
                      <Select value={formData.society} onValueChange={(value) => setFormData({...formData, society: value})}>
                        <SelectTrigger className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white">
                          <SelectValue placeholder="Choose your community" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-cyan-500/30">
                          {communities.map(community => (
                            <SelectItem key={community} value={community}>{community}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {formData.locationType === "individual" && (
                    <div>
                      <Label className="text-gray-300">Address</Label>
                      <Input 
                        placeholder="Enter your address with landmark"
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30">
                  Create Account
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
