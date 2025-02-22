import React from "react";

function Footer() {
  return (
    <footer className="bg-primaryLight">
      <div className="max-w-[var(--max-width)] mx-auto p-6 sm:p-10 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[400px_repeat(3,_1fr)] gap-8">
        {/* Logo & Intro */}
        <div className="text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
            <img
              src="/alwan-logo.png"
              alt="Alwan Logo"
              className="h-20 w-20 mr-0 sm:mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-primary">Alwan</h1>
              <p className=" text-secondary">
                Translation & Document Clearing Services
              </p>
            </div>
          </div>
          <p className="text-text-dark cursor-pointer transition duration-300 hover:text-primary">
            We are honored to be a part of your healthcare journey and committed
            to delivering compassionate, personalized, and top-notch care every
            step of the way.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="mb-4 text-xl font-semibold text-primary">About Us</h4>
          {["Home", "About Us", "Work With Us", "Our Blog", "Terms & Conditions"].map((item, index) => (
            <p key={index} className="mb-4 text-text-dark cursor-pointer transition duration-300 hover:text-primary">
              {item}
            </p>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-xl font-semibold text-primary">Services</h4>
          {["Search Terms", "Advance Search", "Privacy Policy", "Suppliers", "Our Stores"].map((item, index) => (
            <p key={index} className="mb-4 text-text-dark cursor-pointer transition duration-300 hover:text-primary">
              {item}
            </p>
          ))}
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="mb-4 text-xl font-semibold text-primary">Contact Us</h4>
          {[
            { icon: "ri-map-pin-2-fill", text: "123, London Bridge Street, London" },
            { icon: "ri-mail-fill", text: "support@care.com" },
            { icon: "ri-phone-fill", text: "(+012) 3456 789" }
          ].map((contact, index) => (
            <p key={index} className="mb-4 text-text-dark cursor-pointer transition duration-300 hover:text-primary flex items-center">
              <i className={`${contact.icon} text-primary mr-2`} /> {contact.text}
            </p>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-primary">
        <div className="max-w-[var(--max-width)] mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 text-center sm:text-left">
          <p className="text-xs text-white">
             &copy; {new Date().getFullYear()}  {' '}
             <a href="https://digitiostack.vercel.app" className="text-secondary">Digitio Stack </a>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white text-lg cursor-pointer">
            {["ri-instagram-line", "ri-facebook-fill", "ri-heart-fill", "ri-twitter-fill"].map((icon, index) => (
              <span key={index}>
                <i className={icon} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
