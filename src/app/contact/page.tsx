export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-blue-100 p-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Contact Info */}
        <div className="space-y-6 text-right">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Address</h2>
            <p className="text-gray-700">
              Virtual Office
              <br />
              ul. Główna 1<br />
              50-001 Wrocław, Poland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Phone</h2>
            <p className="text-gray-700">+48 123 456 789</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Email</h2>
            <p className="text-gray-700">contact@example.com</p>
          </div>
        </div>

        {/* Right Column: Email Form */}
        <form className="space-y-6 w-full md:w-2/3">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Your Name</h2>
            <input
              type="text"
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Your Email</h2>
            <input
              type="email"
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Message</h2>
            <textarea
              rows="4"
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
