
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
    toast.success("Payment successful! Welcome to ShineWay!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-dark-gray mb-4">Complete Your Subscription</h1>
            <p className="text-xl text-gray-600">Secure payment powered by Razorpay</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-dark-gray flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Payment Details
                </CardTitle>
                <CardDescription>Enter your card information securely</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input 
                      id="cardName"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                      className="mt-2"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input 
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      className="mt-2"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryMonth">Month</Label>
                      <Input 
                        id="expiryMonth"
                        value={paymentData.expiryMonth}
                        onChange={(e) => setPaymentData({...paymentData, expiryMonth: e.target.value})}
                        className="mt-2"
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryYear">Year</Label>
                      <Input 
                        id="expiryYear"
                        value={paymentData.expiryYear}
                        onChange={(e) => setPaymentData({...paymentData, expiryYear: e.target.value})}
                        className="mt-2"
                        placeholder="YY"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                        className="mt-2"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-700">
                      Your payment information is encrypted and secure
                    </span>
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-lg font-semibold eco-gradient hover:opacity-90">
                    Subscribe Now - ₹{total}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-xl h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-dark-gray">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Type:</span>
                    <span className="font-medium capitalize">{userData?.vehicleType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-medium">{userData?.selectedPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Price:</span>
                    <span className="font-medium">₹{selectedPlanPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%):</span>
                    <span className="font-medium">₹{gst}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">₹{total}</span>
                    </div>
                  </div>
                </div>

                {userData && (
                  <div className="space-y-4 pt-6 border-t">
                    <h4 className="font-semibold text-dark-gray">Customer Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Name:</span> {userData.fullName}</p>
                      <p><span className="text-gray-600">Phone:</span> {userData.phone}</p>
                      {userData.email && <p><span className="text-gray-600">Email:</span> {userData.email}</p>}
                      <p><span className="text-gray-600">Preferred Time:</span> {userData.preferredTime}</p>
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
