
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
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleTime, setRescheduleTime] = useState("");

  // Available slots for weekdays (new wash scheduling)
  const weekdaySlots = [
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM", 
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM"
  ];

  // Available slots for weekends (reschedule)
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

  // Generate next weekdays (Monday to Friday)
  const getNextWeekdays = () => {
    const weekdays = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      if (date.getDay() >= 1 && date.getDay() <= 5) { // Monday = 1, Friday = 5
        weekdays.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return weekdays.slice(0, 10); // Next 10 weekdays
  };

  // Generate next weekends (Saturday and Sunday)
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
    if (!rescheduleDate || !rescheduleTime) {
      toast.error("Please select reschedule date and time");
      return;
    }
    
    toast.success("Booking rescheduled successfully!");
    console.log("Rescheduled:", { rescheduleDate, rescheduleTime, vehicleType });
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
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">Schedule Your Wash</h1>
            <p className="text-gray-300">Book your {vehicleType} wash for weekdays</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule New Wash */}
            <Card className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Schedule New Wash</span>
                </CardTitle>
                <CardDescription className="text-gray-300">Available on weekdays only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Vehicle Type Display */}
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
                  {vehicleType === 'car' ? 
                    <Car className="w-6 h-6 text-cyan-400" /> : 
                    <Bike className="w-6 h-6 text-cyan-400" />
                  }
                  <span className="font-medium text-white capitalize">{vehicleType} Wash Service</span>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Date (Weekdays Only)
                  </label>
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger className="bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Choose a weekday date" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      {getNextWeekdays().map((weekday) => (
                        <SelectItem key={weekday.date} value={weekday.date} className="text-white hover:bg-gray-700">
                          {weekday.display}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Time Slot
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      {weekdaySlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="text-white hover:bg-gray-700">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Choose your location" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      {locations.map((location) => (
                        <SelectItem key={location} value={location} className="text-white hover:bg-gray-700">
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleSchedule}
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                >
                  Schedule Wash
                </Button>
              </CardContent>
            </Card>

            {/* Reschedule Existing */}
            <Card className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Reschedule Options</span>
                </CardTitle>
                <CardDescription className="text-gray-300">Missed your slot? Reschedule for weekends</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Booking Display */}
                <div className="p-4 bg-gray-700/50 border border-gray-600/30 rounded-lg backdrop-blur-sm">
                  <h3 className="font-medium text-white mb-2">Current Booking</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Tomorrow, Dec 10, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>10:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>MyHome Avatar - Block A</span>
                    </div>
                  </div>
                </div>

                {/* Reschedule Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Reschedule Date (Weekends Only)
                  </label>
                  <Select value={rescheduleDate} onValueChange={setRescheduleDate}>
                    <SelectTrigger className="bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Choose a weekend date" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      {getNextWeekends().map((weekend) => (
                        <SelectItem key={weekend.date} value={weekend.date} className="text-white hover:bg-gray-700">
                          {weekend.display}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Reschedule Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Reschedule Time Slot
                  </label>
                  <Select value={rescheduleTime} onValueChange={setRescheduleTime}>
                    <SelectTrigger className="bg-gray-800/50 border-cyan-500/30 text-white">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-500/30">
                      {weekendSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="text-white hover:bg-gray-700">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleReschedule}
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25"
                >
                  Reschedule This Booking
                </Button>

                {/* Info Box */}
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm">
                  <h4 className="font-medium text-blue-200 mb-2">Reschedule Policy</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• Free reschedule up to 2 hours before slot</li>
                    <li>• Maximum 2 reschedules per month</li>
                    <li>• Weekend slots only for reschedules</li>
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
