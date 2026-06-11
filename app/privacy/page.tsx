import Link from 'next/link';

export default function Privacy() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 1, 2026</p>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Credit Keeper ("App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Information:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Name and contact details (email, phone number)</li>
              <li>Business/shop information</li>
              <li>Customer payment records and transaction history</li>
              <li>Payment proofs and bill documents (photos/PDFs)</li>
              <li>Profile pictures and avatars</li>
              <li>Authentication credentials (encrypted PIN/password)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">Automatically Collected Information:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Device information (device type, OS version)</li>
              <li>App usage analytics</li>
              <li>Log data (crashes, errors)</li>
              <li>Location data (if you grant permission)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">Your data is used to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Provide core app functionality (customer management, bill tracking)</li>
              <li>Send notifications about payments and reminders</li>
              <li>Improve app performance and user experience</li>
              <li>Secure your account with biometric/PIN authentication</li>
              <li>Process and store your business records</li>
              <li>Generate reports and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Storage & Security</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Data is stored securely using Supabase (encrypted cloud database)</li>
              <li>We use encryption for sensitive information (PINs, passwords)</li>
              <li>Access is protected with authentication mechanisms</li>
              <li>Data is NOT shared with third parties without consent</li>
              <li>We implement industry-standard security practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-3">This app uses:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Supabase</strong> - Backend database for data storage</li>
              <li><strong>Google Play Services</strong> - For app distribution</li>
              <li><strong>Local Authentication</strong> - Biometric/PIN security on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access your data anytime within the app</li>
              <li>Request data deletion</li>
              <li>Update or correct your information</li>
              <li>Disable certain app permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Your data is retained as long as your account is active</li>
              <li>Upon account deletion, data is permanently removed</li>
              <li>Backup data may take up to 30 days to be completely deleted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700">
              This app is not intended for children under 13. We do not knowingly collect personal data from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of significant changes through the app or by other reasonable means.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> smartkhushal2007@gmail.com<br />
              <strong>Support:</strong> Available through the app
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
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
