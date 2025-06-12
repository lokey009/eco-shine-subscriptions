
import { useState } from "react";
import { User, Car, Bike, MapPin, Mail, Phone, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    vehicleType: "car",
    vehicleNumber: "TS 09 XX 1234",
    parkingNumber: "A-25",
    address: "MyHome Avatar, Gachibowli, Hyderabad",
    landmark: "Near HITEC City Metro Station"
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setEditData(profileData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-8 h-8 text-cyan-400" />
                  <CardTitle className="text-3xl font-bold text-white">Profile</CardTitle>
                </div>
                {!isEditing ? (
                  <Button 
                    onClick={handleEdit}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleSave}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button 
                      onClick={handleCancel}
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
              <CardDescription className="text-lg text-gray-300">
                Manage your personal and vehicle information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    {isEditing ? (
                      <Input 
                        id="name"
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                      />
                    ) : (
                      <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white">
                        {profileData.name}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                    {isEditing ? (
                      <Input 
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({...editData, email: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                      />
                    ) : (
                      <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                        {profileData.email}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  {isEditing ? (
                    <Input 
                      id="phone"
                      value={editData.phone}
                      onChange={(e) => setEditData({...editData, phone: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                    />
                  ) : (
                    <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                      {profileData.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Vehicle Information</h3>
                
                <div>
                  <Label className="text-gray-300">Vehicle Type</Label>
                  {isEditing ? (
                    <ToggleGroup 
                      type="single" 
                      value={editData.vehicleType} 
                      onValueChange={(value) => value && setEditData({...editData, vehicleType: value})}
                      className="justify-start mt-2"
                    >
                      <ToggleGroupItem 
                        value="car" 
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border-cyan-500/30 text-gray-300 data-[state=on]:bg-gradient-to-r data-[state=on]:from-cyan-500 data-[state=on]:to-blue-500 data-[state=on]:text-white"
                      >
                        <Car className="w-4 h-4" />
                        <span>Car</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem 
                        value="bike" 
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border-cyan-500/30 text-gray-300 data-[state=on]:bg-gradient-to-r data-[state=on]:from-cyan-500 data-[state=on]:to-blue-500 data-[state=on]:text-white"
                      >
                        <Bike className="w-4 h-4" />
                        <span>Bike</span>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  ) : (
                    <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white flex items-center">
                      {profileData.vehicleType === 'car' ? (
                        <><Car className="w-4 h-4 mr-2 text-cyan-400" />Car</>
                      ) : (
                        <><Bike className="w-4 h-4 mr-2 text-cyan-400" />Bike</>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleNumber" className="text-gray-300">Vehicle Number</Label>
                    {isEditing ? (
                      <Input 
                        id="vehicleNumber"
                        value={editData.vehicleNumber}
                        onChange={(e) => setEditData({...editData, vehicleNumber: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                        placeholder="e.g., TS 09 XX 1234"
                      />
                    ) : (
                      <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white">
                        {profileData.vehicleNumber}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="parkingNumber" className="text-gray-300">Parking Number</Label>
                    {isEditing ? (
                      <Input 
                        id="parkingNumber"
                        value={editData.parkingNumber}
                        onChange={(e) => setEditData({...editData, parkingNumber: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                        placeholder="e.g., A-25, Basement-1"
                      />
                    ) : (
                      <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white">
                        {profileData.parkingNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Address Information</h3>
                
                <div>
                  <Label htmlFor="address" className="text-gray-300">Address</Label>
                  {isEditing ? (
                    <Input 
                      id="address"
                      value={editData.address}
                      onChange={(e) => setEditData({...editData, address: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                      placeholder="Enter your complete address"
                    />
                  ) : (
                    <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {profileData.address}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="landmark" className="text-gray-300">Landmark</Label>
                  {isEditing ? (
                    <Input 
                      id="landmark"
                      value={editData.landmark}
                      onChange={(e) => setEditData({...editData, landmark: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white"
                      placeholder="Near metro station, mall, etc."
                    />
                  ) : (
                    <div className="mt-2 p-3 bg-gray-800/20 border border-gray-600 rounded-md text-white">
                      {profileData.landmark}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Profile;
