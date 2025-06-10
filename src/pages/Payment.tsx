
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Payment = () => {
  const location = useLocation();
  const userData = location.state?.userData;
  
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: ""
  });

  // Sample plan data (in real app, this would come from API)
  const planPrices = {
    'basic-car': 499,
    'premium-car': 799,
    'ultimate-car': 999,
    'basic-bike': 199,
    'standard-bike': 299,
    'max-bike': 399
  };

  const selectedPlanPrice = planPrices[userData?.selectedPlan as keyof typeof planPrices] || 799;
  const gst = Math.round(selectedPlanPrice * 0.18);
  const total = selectedPlanPrice + gst;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentData.cardName || !paymentData.cardNumber || !paymentData.cvv) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    // Simulate payment processing
    toast.success("Payment successful! Welcome to EcoShine!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Complete Your Subscription
            </h1>
            <p className="text-xl text-gray-300">Secure payment powered by Razorpay</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <Card className="shadow-xl premium-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <CreditCard className="w-6 h-6 mr-2 text-cyan-400" />
                  Payment Details
                </CardTitle>
                <CardDescription className="text-gray-300">Enter your card information securely</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="cardName" className="text-gray-300">Name on Card</Label>
                    <Input 
                      id="cardName"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber" className="text-gray-300">Card Number</Label>
                    <Input 
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryMonth" className="text-gray-300">Month</Label>
                      <Input 
                        id="expiryMonth"
                        value={paymentData.expiryMonth}
                        onChange={(e) => setPaymentData({...paymentData, expiryMonth: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryYear" className="text-gray-300">Year</Label>
                      <Input 
                        id="expiryYear"
                        value={paymentData.expiryYear}
                        onChange={(e) => setPaymentData({...paymentData, expiryYear: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="YY"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
                      <Input 
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                        className="mt-2 bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-300">
                      Your payment information is encrypted and secure
                    </span>
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30">
                    Subscribe Now - ₹{total}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-xl premium-card h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vehicle Type:</span>
                    <span className="font-medium text-white capitalize">{userData?.vehicleType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan:</span>
                    <span className="font-medium text-white">{userData?.selectedPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monthly Price:</span>
                    <span className="font-medium text-white">₹{selectedPlanPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">GST (18%):</span>
                    <span className="font-medium text-white">₹{gst}</span>
                  </div>
                  <div className="border-t border-cyan-500/30 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-cyan-400">₹{total}</span>
                    </div>
                  </div>
                </div>

                {userData && (
                  <div className="space-y-4 pt-6 border-t border-cyan-500/30">
                    <h4 className="font-semibold text-white">Customer Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-400">Name:</span> <span className="text-white">{userData.fullName}</span></p>
                      <p><span className="text-gray-400">Phone:</span> <span className="text-white">{userData.phone}</span></p>
                      {userData.email && <p><span className="text-gray-400">Email:</span> <span className="text-white">{userData.email}</span></p>}
                      <p><span className="text-gray-400">Preferred Time:</span> <span className="text-white">{userData.preferredTime}</span></p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Payment;
