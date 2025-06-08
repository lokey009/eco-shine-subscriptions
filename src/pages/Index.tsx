
import { useState } from "react";
import { ChevronDown, CheckCircle, Calendar, Sparkles, Car, Bike } from "lucide-react";
import { Link } from "react-router-dom";
import { useVehicle } from "@/contexts/VehicleContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const { vehicleType, setVehicleType } = useVehicle();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [address, setAddress] = useState("");
  const [society, setSociety] = useState("");

  const communities = [
    "MyHome Avatar",
    "Aparna Sarovar", 
    "Brigade Gateway",
    "Prestige Lakeside Habitat",
    "Mantri Alpyne"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
              <Select value={society} onValueChange={setSociety}>
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
              onValueChange={(value) => value && setVehicleType(value as 'car' | 'bike')}
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

          <Link to="/plans">
            <Button 
              size="lg" 
              className="h-14 px-12 text-lg font-semibold eco-gradient hover:opacity-90 transition-opacity"
            >
              Check Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
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

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            Ready to Start Your ShineWay?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans">
              <Button size="lg" className="h-12 px-8 eco-gradient hover:opacity-90">
                View Plans
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="h-12 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
