import Link from 'next/link';
import { BarChart3, Bell, Lock, Smartphone, Users, CheckCircle } from 'lucide-react';

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/features" className="text-blue-600 font-semibold transition">Features</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Powerful Features</h1>
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
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Credit Keeper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
