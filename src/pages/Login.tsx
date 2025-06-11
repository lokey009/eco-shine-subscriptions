
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Mock login - set user as logged in
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify({
      email: formData.email,
      fullName: "John Doe", // Mock data
      phone: "+91 9876543210"
    }));
    
    toast.success("Login successful!");
    
    // Handle redirect logic
    const redirectData = location.state;
    if (redirectData?.redirectTo === '/payment') {
      navigate('/payment', {
        state: {
          selectedPlan: redirectData.selectedPlan,
          vehicleType: redirectData.vehicleType,
          userData: {
            email: formData.email,
            fullName: "John Doe",
            phone: "+91 9876543210"
          }
        }
      });
    } else {
      navigate('/home'); // Changed from '/dashboard' to '/home'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl premium-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Welcome Back</CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Sign in to your EcoShine account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email or Phone</Label>
                  <Input 
                    id="email"
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                    placeholder="Enter your email or phone number"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative mt-2">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 pr-10"
                      placeholder="Enter your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => setFormData({...formData, rememberMe: checked as boolean})}
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-gray-300">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30">
                  Sign In
                </Button>
                
                <div className="text-center">
                  <p className="text-gray-400">
                    Don't have an account?{" "}
                    <Link 
                      to="/signup" 
                      state={location.state}
                      className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;
