
import { Award, Droplets, Leaf, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
      title: "Water Conservation",
      description: "We use 80% less water than traditional car washes through our innovative eco-friendly process."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      title: "Eco-Friendly Products",
      description: "100% biodegradable cleaning solutions that are safe for the environment and your vehicle."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Paint Protection",
      description: "Our gentle cleaning process protects your vehicle's paint while delivering a pristine finish."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: "Time Efficient",
      description: "Professional service completed at your doorstep while you focus on what matters most."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Expert Team",
      description: "Trained professionals with years of experience in automotive care and customer service."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on every wash service."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50,000+", label: "Vehicles Washed" },
    { number: "5 Years", label: "Industry Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              About EcoShine
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing vehicle care with eco-friendly, convenient, and professional washing services 
              that come to you. Our mission is to provide exceptional car and bike wash services while protecting 
              the environment for future generations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="premium-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Why Choose EcoShine?
            </h2>
            <p className="text-xl text-gray-300">
              Experience the difference with our premium wash services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="premium-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-700/50 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At EcoShine, we believe that taking care of your vehicle shouldn't come at the cost of our planet. 
                That's why we've developed innovative waterless and eco-friendly washing techniques that deliver 
                exceptional results while minimizing environmental impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team of trained professionals brings the car wash to your doorstep, saving you time while 
                ensuring your vehicle receives the premium care it deserves. We're committed to sustainability, 
                quality, and customer satisfaction in everything we do.
              </p>
            </div>
            <div className="relative">
              <Card className="premium-card p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Eco-Conscious</h3>
                  <p className="text-gray-300">
                    Every wash saves gallons of water and uses only biodegradable products
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
