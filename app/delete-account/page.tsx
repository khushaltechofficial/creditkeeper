import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative flex flex-col">
      {/* Background glowing orbs */}
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition">Home</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-16 relative z-10 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">Account Deletion Request</h1>
            
            <p className="text-gray-400 leading-relaxed text-left">
              At Credit Keeper, we value your privacy. If you wish to delete your account and all associated data (including customer records, ledgers, and personal information), you can do so by contacting our support team.
            </p>

            <div className="bg-[#1e293b] rounded-xl p-6 text-left border border-white/5 my-6">
              <h3 className="text-lg font-semibold text-white mb-2">How to request data deletion:</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Send an email from your registered email address to <strong>smartkhushal2007@gmail.com</strong>.</li>
                <li>Use the subject line: <strong>"Account Deletion Request"</strong>.</li>
                <li>Include your registered Phone Number or Email ID in the body of the email.</li>
              </ol>
            </div>

            <p className="text-gray-500 text-sm text-left">
              <strong>Note:</strong> Once your request is received, all your data will be permanently deleted from our servers within 30 days. This action cannot be undone.
            </p>

            <div className="pt-6">
              <a href="mailto:smartkhushal2007@gmail.com?subject=Account Deletion Request" className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Request Deletion via Email
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0f1c] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          &copy; 2026 Credit Keeper. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
