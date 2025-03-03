export const metadata = {
  title: "Contact Us - Simple",
  description: "Page description",
};

export default function ContactForm() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="Carlos Suarez"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="corybarker@email.com"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="form-input w-full py-2"
              rows={4}
              placeholder="Your message here"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Send Message
          </button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By contacting us, you agree to the{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
