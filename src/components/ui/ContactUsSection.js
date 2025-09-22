import { LuMail, LuPhone } from "react-icons/lu";
import { useForm, ValidationError } from "@formspree/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const contactdetails = [
    {
      id: 1,
      icon: <LuMail />,
      title: "Email",
      description: "Our friendly team is here to help.",
      link: "protech@gmail.com",
    },
      {
          id: 2,
          icon: <FaWhatsapp />,
          title: "WhatsApp",
          description: "Mon-Fri from 9am to 6pm.",
          link: ["+880 1619 109909", "+49 1575 4255758"],
      },
  ];

  return (
    <section id="contact" className="font-['SatoshiVariable'] w-full pt-28 py-20 px-4 sm:px-6 md:px-12 lg:px-5 rounded-4xl">
      <div className="w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto flex flex-col items-top justify-center lg:flex-row gap-12">
        <div>
          <h2 className="text-2xl text-center lg:text-left sm:text-4xl md:text-3xl 2xl:text-4xl font-bold text-gray-800">
            Get in touch with our team
          </h2>
          <p className="text-gray-600 text-center lg:text-left mt-2 text-sm sm:text-base">
            We&apos;d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>

          <div className="mt-6 flex flex-col item-center justify-center md:flex-row md:space-x-6 lg:flex-col space-y-6">
              {contactdetails.map((contact) => {
                  // make sure link is always an array
                  const links = Array.isArray(contact.link) ? contact.link : [contact.link];

                  return (
                      <div
                          key={contact.id}
                          className="bg-[#211951] w-3/4 rounded-lg flex items-center relative z-0 space-x-4"
                      >
                          <div className="bg-white z-20 rounded-lg cursor-pointer border border-[#211951] w-full h-full relative p-5 transition-transform md:hover:translate-y-[-8px] md:hover:translate-x-[-8px]">
        <span className="text-[#211951] text-xl sm:text-2xl">
          {contact.icon}
        </span>
                              <div>
                                  <h3 className="font-semibold text-gray-800 text-lg">{contact.title}</h3>
                                  <p className="text-gray-600 text-sm sm:text-base">{contact.description}</p>

                                  {/* Render multiple links stacked */}
                                  <div className="flex flex-col mt-1 space-y-1">
                                      {links.map((item, idx) => (
                                          <a
                                              key={idx}
                                              href={
                                                  contact.id === 1
                                                      ? "mailto:" + item
                                                      : "https://wa.me/" + item.replace(/\D/g, "")
                                              }
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className={`font-semibold ${
                                                  contact.id === 2 ? "text-[#25D366]" : "text-[#211951]"
                                              } hover:underline`}
                                          >
                                              {item}
                                          </a>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              })}

          </div>
        </div>

        <div
          id="contact"
          className="bg-[#211951] xl:w-1/2 2xl:w-2/5 rounded-lg shadow-lg w-full"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// components/ContactForm.jsx

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mqapgqro"
      method="POST"
      className="bg-white w-full h-full p-5 space-y-4 border border-[#211951] rounded-lg mx-auto hover:translate-y-[-8px] hover:translate-x-[-8px] transition-transform duration-300"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">First name</label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full sm:p-1 xl:p-2 border rounded mt-1"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Last name</label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full sm:p-1 xl:p-2 border rounded mt-1"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full sm:p-1 xl:p-2 border rounded mt-1"
          placeholder="you@company.com"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm text-gray-600">Message</label>
        <textarea
          className="w-full sm:p-1 xl:p-2 border rounded mt-1"
          name="message"
          required
          rows="5"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="privacy"
          name="policy"
          required
          className="mr-2"
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          You agree to our friendly{" "}
          <a href="/privacy" className="text-[#211951] underline">
            privacy policy
          </a>
          .
        </label>
      </div>
      <button type="submit" className="w-full bg-[#211951] text-white py-2 mt-4 rounded cursor-pointer hover:bg-[#191241] transition">
        Send message
      </button>
    </form>
  );
}
