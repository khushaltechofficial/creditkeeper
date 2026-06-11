import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative flex flex-col">
      {/* Background glowing orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/features" className="text-sm font-medium text-gray-400 hover:text-white transition">Features</Link>
            <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white transition">About</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Effective Date: January 1, 2026</p>

          <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p>
                Credit Keeper ("App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Personal Information:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Name and contact details (email, phone number)</li>
                <li>Business/shop information</li>
                <li>Customer payment records and transaction history</li>
                <li>Payment proofs and bill documents (photos/PDFs)</li>
                <li>Profile pictures and avatars</li>
                <li>Authentication credentials (encrypted PIN/password)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 text-blue-400">Automatically Collected Information:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Device information (device type, OS version)</li>
                <li>App usage analytics</li>
                <li>Log data (crashes, errors)</li>
                <li>Location data (if you grant permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide core app functionality (customer management, bill tracking)</li>
                <li>Send notifications about payments and reminders</li>
                <li>Improve app performance and user experience</li>
                <li>Secure your account with biometric/PIN authentication</li>
                <li>Process and store your business records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Storage & Security</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Data is stored securely using encrypted cloud databases</li>
                <li>We use encryption for sensitive information (PINs, passwords)</li>
                <li>Access is protected with authentication mechanisms</li>
                <li>Data is NOT shared with third parties without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
              <p className="mb-2">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white">
                <strong>Email:</strong> smartkhushal2007@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0f1c] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            &copy; 2026 Credit Keeper. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
