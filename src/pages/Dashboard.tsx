
import { Calendar, Car, Bike, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useVehicle } from "@/contexts/VehicleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { vehicleType } = useVehicle();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    if (!userLoggedIn) {
      navigate('/login');
      return;
    }
    setIsLoggedIn(true);
  }, [navigate]);

  // Mock data - in real app this would come from API
  const washStats = {
    totalWashes: 24,
    thisMonth: 4,
    nextWash: "Tomorrow, 10:00 AM",
    currentPlan: "Premium Monthly"
  };

  const recentWashes = [
    { date: "Dec 8, 2024", time: "10:00 AM", status: "Completed", vehicle: vehicleType },
    { date: "Dec 1, 2024", time: "2:00 PM", status: "Completed", vehicle: vehicleType },
    { date: "Nov 24, 2024", time: "11:00 AM", status: "Completed", vehicle: vehicleType },
  ];

  if (!isLoggedIn) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">Dashboard</h1>
            <p className="text-gray-300">Track your {vehicleType} wash service</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="premium-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Total Washes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{washStats.totalWashes}</div>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">{washStats.thisMonth}</div>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-white">{washStats.currentPlan}</div>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Next Wash</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium text-cyan-400">{washStats.nextWash}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-400">Manage your wash service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/scheduling">
                  <Button className="w-full justify-start h-12 bg-gray-800/50 border-cyan-500/30 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50" variant="outline">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule New Wash
                  </Button>
                </Link>
                <Link to="/scheduling">
                  <Button className="w-full justify-start h-12 bg-gray-800/50 border-cyan-500/30 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50" variant="outline">
                    <Clock className="w-5 h-5 mr-3" />
                    Reschedule Existing
                  </Button>
                </Link>
                <Link to="/plans">
                  <Button className="w-full justify-start h-12 bg-gray-800/50 border-cyan-500/30 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50" variant="outline">
                    <Car className="w-5 h-5 mr-3" />
                    Upgrade Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Washes */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-white">Recent Washes</CardTitle>
                <CardDescription className="text-gray-400">Your wash history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWashes.map((wash, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-cyan-500/20">
                      <div className="flex-shrink-0">
                        {vehicleType === 'car' ? 
                          <Car className="w-8 h-8 text-cyan-400" /> : 
                          <Bike className="w-8 h-8 text-cyan-400" />
                        }
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{wash.date}</div>
                        <div className="text-sm text-gray-400">{wash.time}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-medium">{wash.status}</span>
                      </div>
                    </div>
                  ))}
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

export default Dashboard;
