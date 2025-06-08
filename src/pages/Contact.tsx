
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-dark-gray">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-gray">Phone</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-gray">Email</p>
                      <p className="text-gray-600">hello@shineway.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-gray">Service Areas</p>
                      <p className="text-gray-600">Hyderabad, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-dark-gray">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
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
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-dark-gray">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" className="mt-2" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" className="mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" className="mt-2" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
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
