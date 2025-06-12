
import { useState } from "react";
import { MapPin, Navigation, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Location = () => {
  const [locationData, setLocationData] = useState({
    currentLocation: "",
    locationType: "",
    gatedCommunity: "",
    address: "",
    flatNumber: "",
    parkingArea: "",
    landmark: ""
  });

  const gatedCommunities = [
    "MyHome Avatar",
    "Aparna Sarovar", 
    "Brigade Gateway",
    "Prestige Lakeside Habitat",
    "Mantri Alpyne",
    "Hitech City",
    "Gachibowli Heights",
    "Kondapur Gardens"
  ];

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationData({
            ...locationData,
            currentLocation: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          });
          toast.success("Location detected successfully!");
        },
        (error) => {
          toast.error("Unable to get your location. Please enter manually.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSaveLocation = () => {
    if (!locationData.locationType) {
      toast.error("Please select your living situation");
      return;
    }

    // Save location data to localStorage
    localStorage.setItem('userLocation', JSON.stringify(locationData));
    toast.success("Location saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
      </div>
      
      <section className="relative py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-center space-x-2">
                <MapPin className="w-8 h-8 text-cyan-400" />
                <span>Your Location</span>
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Help us serve you better by providing your location details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Location Detection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Detect Current Location</h3>
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={handleGetCurrentLocation}
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Enable GPS Location</span>
                  </Button>
                </div>
                {locationData.currentLocation && (
                  <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
                    <p className="text-sm text-cyan-200">
                      <strong>Current Location:</strong> {locationData.currentLocation}
                    </p>
                  </div>
                )}
              </div>

              {/* Location Type Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Location Details</h3>
                
                <div>
                  <Label className="text-gray-300">Where do you live?</Label>
                  <Select value={locationData.locationType} onValueChange={(value) => setLocationData({...locationData, locationType: value})}>
                    <SelectTrigger className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Select your living situation" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      <SelectItem value="gated" className="text-white hover:bg-gray-700">Gated Community</SelectItem>
                      <SelectItem value="individual" className="text-white hover:bg-gray-700">Individual House/Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Gated Community Options */}
                {locationData.locationType === "gated" && (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-300">Select your gated community</Label>
                      <Select value={locationData.gatedCommunity} onValueChange={(value) => setLocationData({...locationData, gatedCommunity: value})}>
                        <SelectTrigger className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white">
                          <SelectValue placeholder="Choose your community" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-cyan-500/30">
                          {gatedCommunities.map(community => (
                            <SelectItem key={community} value={community} className="text-white hover:bg-gray-700">{community}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="flatNumber" className="text-gray-300">Flat/House Number</Label>
                        <Input 
                          id="flatNumber"
                          value={locationData.flatNumber}
                          onChange={(e) => setLocationData({...locationData, flatNumber: e.target.value})}
                          className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400"
                          placeholder="e.g., A-101, B2-205"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parkingArea" className="text-gray-300">Parking Area</Label>
                        <Input 
                          id="parkingArea"
                          value={locationData.parkingArea}
                          onChange={(e) => setLocationData({...locationData, parkingArea: e.target.value})}
                          className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400"
                          placeholder="e.g., Basement-1, Slot-25"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Individual Address */}
                {locationData.locationType === "individual" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-gray-300">Complete Address</Label>
                      <Input 
                        id="address"
                        value={locationData.address}
                        onChange={(e) => setLocationData({...locationData, address: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400"
                        placeholder="Enter your complete address"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="landmark" className="text-gray-300">Landmark (Optional)</Label>
                  <Input 
                    id="landmark"
                    value={locationData.landmark}
                    onChange={(e) => setLocationData({...locationData, landmark: e.target.value})}
                    className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400"
                    placeholder="Near metro station, mall, etc."
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveLocation}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
              >
                Save Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Location;
