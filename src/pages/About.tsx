
import { Droplets, Shield, Clock, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-8">
              Built for Eco & Efficiency
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              ShineWay is a sustainable car & bike wash platform serving urban apartments and gated communities. 
              We save water, time, and effort while keeping your ride spotless.
            </p>
          </div>
          
          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">12,000+</div>
                <CardTitle className="text-lg text-dark-gray">Cars Cleaned</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">7,500+</div>
                <CardTitle className="text-lg text-dark-gray">Bikes Cleaned</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">5M+</div>
                <CardTitle className="text-lg text-dark-gray">Litres Saved</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">4,000+</div>
                <CardTitle className="text-lg text-dark-gray">Subscribers</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-dark-gray mb-16">
            Why Choose ShineWay?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Waterless Wash</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Saves 200L water per wash using eco-friendly cleaning methods
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Verified Cleaners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trained and background-verified staff for consistent quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pause, resume, or reschedule your service anytime
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-dark-gray">Eco Detergents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  100% biodegradable, pet-safe and non-toxic cleaning products
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
