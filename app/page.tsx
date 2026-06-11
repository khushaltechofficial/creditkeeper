import Link from 'next/link';
import { ArrowRight, BarChart3, Bell, Lock, Smartphone, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            💳 Credit Keeper
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition">Privacy</a>
            <a href="https://play.google.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Manage Your Customer Credits Easily
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Credit Keeper helps you track customer accounts, manage payments, and grow your business with confidence. Simple, secure, and powerful.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://play.google.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                Download Now <ArrowRight size={20} />
              </a>
              <a href="#features" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Smartphone size={100} className="text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Credit Keeper Mobile App</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer Management",
                description: "Easily add and manage all your customers in one place with complete profiles"
              },
              {
                icon: BarChart3,
                title: "Payment Tracking",
                description: "Track payments, due dates, and payment history with detailed analytics"
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Get reminders for upcoming payments and never miss a transaction"
              },
              {
                icon: Lock,
                title: "Secure & Private",
                description: "Your data is encrypted and protected with PIN/biometric authentication"
              },
              {
                icon: Smartphone,
                title: "Works Offline",
                description: "Access your data even without internet connection"
              },
              {
                icon: CheckCircle,
                title: "Bill Management",
                description: "Upload and organize bills with photos and generate payment receipts"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <feature.icon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 size={100} className="text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600">Advanced Analytics</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Credit Keeper?</h2>
              <ul className="space-y-4">
                {[
                  "Simple and intuitive interface - no learning curve",
                  "Works perfectly for small shops and large businesses",
                  "100% data privacy - your data stays on your device",
                  "No hidden fees or subscriptions",
                  "Regular updates with new features",
                  "24/7 support available"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Manage Your Credits Better?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download Credit Keeper today and start organizing your customer accounts
          </p>
          <a href="https://play.google.com" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Download on Play Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Credit Keeper</h3>
              <p className="text-sm">Manage your customer credits with ease and confidence.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">Email: smartkhushal2007@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">&copy; 2026 Credit Keeper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
