import Link from 'next/link';
import { BarChart3, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition">Features</Link>
            <Link href="/about" className="text-blue-600 font-semibold transition">About</Link>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 size={100} className="text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Advanced Analytics</p>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Credit Keeper?</h1>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Credit Keeper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
