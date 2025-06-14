
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 sm:py-24 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Eco-Friendly Car & Bike Wash.
            </span>
            <br />
            <span className="text-white">Daily. At Your Doorstep.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 font-light max-w-4xl mx-auto">
            Serving gated societies & individual apartments across Hyderabad
          </p>
          
          <Link to="/plans">
            <Button 
              size="lg" 
              className="h-14 px-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30"
            >
              Check Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <Card className="text-center border-none shadow-none bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Subscribe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-300 font-light leading-relaxed">
                  Pick a plan that suits your vehicle and schedule
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-300 font-light leading-relaxed">
                  Choose your preferred time slots and days
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-none bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Shine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-300 font-light leading-relaxed">
                  We visit and clean your vehicle, hassle-free
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-black border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Start Your EcoShine?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25">
                View Plans
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="h-12 px-8 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
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
