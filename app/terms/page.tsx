import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            💳 Credit Keeper
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-900">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 1, 2026</p>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By downloading, installing, and using the Credit Keeper mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. License Grant</h2>
            <p className="text-gray-700">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not reproduce, redistribute, or resell the App or any part of it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-3">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Ensuring your use of the App complies with all applicable laws</li>
              <li>Not using the App for illegal or unauthorized purposes</li>
              <li>Providing accurate and current information in your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Restrictions</h2>
            <p className="text-gray-700 mb-3">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Use the App to transmit viruses or malicious code</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Create derivative works or modifications of the App</li>
              <li>Use the App for commercial purposes without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
            <p className="text-gray-700">
              All content, features, and functionality of the App (including but not limited to all information, software, and text) are owned by Credit Keeper, its licensors, or other providers. You may not use this content except as permitted by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Disclaimers</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>The App is provided "AS IS" without warranties of any kind</li>
              <li>We do not warrant that the App will be error-free or uninterrupted</li>
              <li>We are not responsible for data loss or corruption</li>
              <li>Your use of the App is at your own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Credit Keeper be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Credit Keeper from any claims, damages, losses, or expenses arising from your violation of these Terms or your misuse of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-gray-700">
              We may terminate your access to the App at any time if you violate these Terms or engage in conduct that we believe is harmful to other users or Credit Keeper. Upon termination, your rights to use the App will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with applicable laws, and you agree to submit to the exclusive jurisdiction of the courts in the relevant jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> smartkhushal2007@gmail.com
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Credit Keeper. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
