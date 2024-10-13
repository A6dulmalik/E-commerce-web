import { FaPhone, FaRegEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="font-inter flex flex-col sm:flex-row gap-4  w-full mt-48 sm:mt-36 mb-10 mx-auto max-w-7xl px-4">
      <div className="w-full sm:w-[340px] px-7 py-10 shadow-xl ">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#DB4444] p-2 rounded-2xl">
              <FaPhone className="text-white" />
            </span>
            <span className="font-bold">Call To Us</span>
          </div>
          <p className="text-sm">We are available 24/7, 7 days a week.</p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#DB4444] p-2 rounded-2xl">
              <FaRegEnvelope className="text-white" />
            </span>
            <span className="font-bold">Write To US</span>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="shadow-xl px-7 py-10">
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Your name"
            required
            className="bg-[#F5F5F5] px-5 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="bg-[#F5F5F5] px-5 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            required
            className="bg-[#F5F5F5] px-5 py-2  rounded"
          />
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block w-full rounded-md border-none outline-none px-3.5 py-2 bg-[#F5F5F5] text-gray-900 shadow-sm placeholder:text-gray-400"
          defaultValue={""}
        />
        {/* Button */}
        <button
          type="submit"
          className="px-5 py-2 mt-8 bg-[#DB4444] text-center text-white text-sm rounded float-right"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
