import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative flex flex-col">
      {/* Background glowing orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Effective Date: January 1, 2026</p>

          <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, and using the Credit Keeper mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. License Grant</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not reproduce, redistribute, or resell the App or any part of it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Ensuring your use of the App complies with all applicable laws</li>
                <li>Not using the App for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Restrictions</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Attempt to gain unauthorized access to the App or its systems</li>
                <li>Use the App to transmit viruses or malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Disclaimers</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>The App is provided "AS IS" without warranties of any kind</li>
                <li>We do not warrant that the App will be error-free or uninterrupted</li>
                <li>Your use of the App is at your own risk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about these Terms of Service, please contact us at:
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
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-white transition">Terms of Service</Link>
            <Link href="/delete-account" className="text-gray-400 hover:text-white transition">Delete Account</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
