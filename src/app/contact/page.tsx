import Heading from "../components/Heading";

export default function ContactPage() {
  return (
    <>
      <Heading level={2}>Contact Us</Heading>

      <div className="flex flex-col md:flex-row gap-16 justify-center md:justify-start">
        {/* Left Column: Contact Info */}
        <div className="flex-1 max-w-[300px] space-y-6 text-center md:text-right">
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
        <form className="flex-1 max-w-[350px] space-y-6 w-full md:w-2/3">
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
              rows={4}
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="block mx-auto md:mx-0 md:ml-auto bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
