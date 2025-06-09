
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-dark-gray flex items-center justify-center space-x-2">
                <MapPin className="w-8 h-8 text-primary" />
                <span>Your Location</span>
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Help us serve you better by providing your location details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Location Detection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-gray">Detect Current Location</h3>
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={handleGetCurrentLocation}
                    className="flex items-center space-x-2 eco-gradient hover:opacity-90"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Enable GPS Location</span>
                  </Button>
                </div>
                {locationData.currentLocation && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Current Location:</strong> {locationData.currentLocation}
                    </p>
                  </div>
                )}
              </div>

              {/* Location Type Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-gray">Location Details</h3>
                
                <div>
                  <Label>Where do you live?</Label>
                  <Select value={locationData.locationType} onValueChange={(value) => setLocationData({...locationData, locationType: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your living situation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gated">Gated Community</SelectItem>
                      <SelectItem value="individual">Individual House/Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Gated Community Options */}
                {locationData.locationType === "gated" && (
                  <div className="space-y-4">
                    <div>
                      <Label>Select your gated community</Label>
                      <Select value={locationData.gatedCommunity} onValueChange={(value) => setLocationData({...locationData, gatedCommunity: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choose your community" />
                        </SelectTrigger>
                        <SelectContent>
                          {gatedCommunities.map(community => (
                            <SelectItem key={community} value={community}>{community}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="flatNumber">Flat/House Number</Label>
                        <Input 
                          id="flatNumber"
                          value={locationData.flatNumber}
                          onChange={(e) => setLocationData({...locationData, flatNumber: e.target.value})}
                          className="mt-2"
                          placeholder="e.g., A-101, B2-205"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parkingArea">Parking Area</Label>
                        <Input 
                          id="parkingArea"
                          value={locationData.parkingArea}
                          onChange={(e) => setLocationData({...locationData, parkingArea: e.target.value})}
                          className="mt-2"
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
                      <Label htmlFor="address">Complete Address</Label>
                      <Input 
                        id="address"
                        value={locationData.address}
                        onChange={(e) => setLocationData({...locationData, address: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your complete address"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="landmark">Landmark (Optional)</Label>
                  <Input 
                    id="landmark"
                    value={locationData.landmark}
                    onChange={(e) => setLocationData({...locationData, landmark: e.target.value})}
                    className="mt-2"
                    placeholder="Near metro station, mall, etc."
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveLocation}
                className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90"
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
