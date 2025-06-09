
import { useState } from "react";
import { Calendar, Clock, Car, Bike, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useVehicle } from "@/contexts/VehicleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Scheduling = () => {
  const { vehicleType } = useVehicle();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Available slots for Saturday and Sunday
  const weekendSlots = [
    "7:00 AM - 9:00 AM",
    "9:00 AM - 11:00 AM", 
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const locations = [
    "MyHome Avatar - Block A",
    "Aparna Sarovar - Tower 1", 
    "Brigade Gateway - Phase 2",
    "Prestige Lakeside - Block B",
    "Mantri Alpyne - Tower 3"
  ];

  // Generate next 4 weekends
  const getNextWeekends = () => {
    const weekends = [];
    const today = new Date();
    
    for (let i = 0; i < 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      if (date.getDay() === 0 || date.getDay() === 6) { // Sunday = 0, Saturday = 6
        weekends.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return weekends.slice(0, 8); // Next 8 weekend days
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || !selectedLocation) {
      toast.error("Please select date, time, and location");
      return;
    }
    
    toast.success("Wash scheduled successfully!");
    console.log("Scheduled:", { selectedDate, selectedTime, selectedLocation, vehicleType });
  };

  const handleReschedule = () => {
    toast.info("Reschedule functionality would allow changing existing bookings");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-dark-gray mb-2">Schedule Your Wash</h1>
            <p className="text-gray-600">Book your {vehicleType} wash for the weekend</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule New Wash */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Schedule New Wash</span>
                </CardTitle>
                <CardDescription>Available on weekends only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Vehicle Type Display */}
                <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg">
                  {vehicleType === 'car' ? 
                    <Car className="w-6 h-6 text-primary" /> : 
                    <Bike className="w-6 h-6 text-primary" />
                  }
                  <span className="font-medium text-dark-gray capitalize">{vehicleType} Wash Service</span>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date (Weekends Only)
                  </label>
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a weekend date" />
                    </SelectTrigger>
                    <SelectContent>
                      {getNextWeekends().map((weekend) => (
                        <SelectItem key={weekend.date} value={weekend.date}>
                          {weekend.display}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time Slot
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {weekendSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleSchedule}
                  className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90"
                >
                  Schedule Wash
                </Button>
              </CardContent>
            </Card>

            {/* Reschedule Existing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Reschedule Options</span>
                </CardTitle>
                <CardDescription>Missed your slot? Reschedule here</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Booking Display */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-dark-gray mb-2">Current Booking</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Tomorrow, Dec 10, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>10:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>MyHome Avatar - Block A</span>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    Can't make it to your scheduled slot?<br />
                    Reschedule for the next available weekend.
                  </p>
                  <Button 
                    onClick={handleReschedule}
                    variant="outline" 
                    className="h-12 px-8 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Reschedule This Booking
                  </Button>
                </div>

                {/* Info Box */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Reschedule Policy</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Free reschedule up to 2 hours before slot</li>
                    <li>• Maximum 2 reschedules per month</li>
                    <li>• Weekend slots only</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Scheduling;
