
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-dark-gray">Welcome Back</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Sign in to your ShineWay account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email or Phone</Label>
                  <Input 
                    id="email"
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2"
                    placeholder="Enter your email or phone number"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="mt-2"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => setFormData({...formData, rememberMe: checked as boolean})}
                    />
                    <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
                  Sign In
                </Button>
                
                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline font-medium">
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
