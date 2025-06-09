
import { Calendar, Car, Bike, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useVehicle } from "@/contexts/VehicleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { vehicleType } = useVehicle();

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-dark-gray mb-2">Dashboard</h1>
            <p className="text-gray-600">Track your {vehicleType} wash service</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Washes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-dark-gray">{washStats.totalWashes}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{washStats.thisMonth}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-dark-gray">{washStats.currentPlan}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Next Wash</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium text-primary">{washStats.nextWash}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your wash service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/scheduling">
                  <Button className="w-full justify-start h-12" variant="outline">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule New Wash
                  </Button>
                </Link>
                <Link to="/scheduling">
                  <Button className="w-full justify-start h-12" variant="outline">
                    <Clock className="w-5 h-5 mr-3" />
                    Reschedule Existing
                  </Button>
                </Link>
                <Link to="/plans">
                  <Button className="w-full justify-start h-12" variant="outline">
                    <Car className="w-5 h-5 mr-3" />
                    Upgrade Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Washes */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Washes</CardTitle>
                <CardDescription>Your wash history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWashes.map((wash, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {vehicleType === 'car' ? 
                          <Car className="w-8 h-8 text-primary" /> : 
                          <Bike className="w-8 h-8 text-primary" />
                        }
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-dark-gray">{wash.date}</div>
                        <div className="text-sm text-gray-600">{wash.time}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">{wash.status}</span>
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
