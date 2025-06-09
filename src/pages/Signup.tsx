
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

    // Save user data and set as logged in
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(formData));
    
    toast.success("Account created successfully!");
    
    // Navigate to plans page after successful signup
    navigate('/plans');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-dark-gray">Join EcoShine</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Create your account to start your car wash subscription
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-dark-gray">Personal Information</h3>
                  
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

                <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
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
