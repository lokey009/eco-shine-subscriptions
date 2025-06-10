
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    // Check if user is logged in and get their data
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
    
    if (userLoggedIn) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setUserData(user);
        // Pre-fill form with user data
        setFormData(prev => ({
          ...prev,
          firstName: user.fullName?.split(' ')[0] || "",
          lastName: user.fullName?.split(' ').slice(1).join(' ') || "",
          email: user.email || "",
          phone: user.phone || ""
        }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation for non-logged in users
    if (!isLoggedIn) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    
    if (!formData.subject || !formData.message) {
      toast.error("Please fill in subject and message");
      return;
    }
    
    // Here you would typically send the data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset non-user fields
    setFormData(prev => ({
      ...prev,
      subject: "",
      message: ""
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="premium-card shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-gray-300">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-gray-300">hello@ecoshine.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Service Areas</p>
                      <p className="text-gray-300">Hyderabad, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <p>Gachibowli</p>
                    <p>HITEC City</p>
                    <p>Kondapur</p>
                    <p>Madhapur</p>
                    <p>Banjara Hills</p>
                    <p>Jubilee Hills</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="premium-card shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                {!isLoggedIn && (
                  <p className="text-sm text-gray-400">All fields marked with * are required</p>
                )}
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name {!isLoggedIn && "*"}
                      </Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                        readOnly={isLoggedIn}
                        required={!isLoggedIn}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name {!isLoggedIn && "*"}
                      </Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                        readOnly={isLoggedIn}
                        required={!isLoggedIn}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email {!isLoggedIn && "*"}
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                      readOnly={isLoggedIn}
                      required={!isLoggedIn}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number {!isLoggedIn && "*"}
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                      readOnly={isLoggedIn}
                      required={!isLoggedIn}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400" 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
