import React from "react";

const doctors = [
  {
    name: "Dr. Emily Smith",
    specialty: "Cardiologist",
    image:
      "https://img.freepik.com/free-photo/dedicated-arab-person-using-desktop-pc_482257-96968.jpg?uid=R23430030&ga=GA1.1.693543164.1727334307&semt=ais_hybrid",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Neurosurgeon",
    image:
      "https://img.freepik.com/free-photo/hotel-receptionist-work_23-2149661542.jpg?uid=R23430030&ga=GA1.1.693543164.1727334307&semt=ais_hybrid",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    image:
      "https://img.freepik.com/free-photo/industrial-designers-working-together_23-2149307802.jpg?uid=R23430030&ga=GA1.1.693543164.1727334307&semt=ais_hybrid",
  },
];

const socialIcons = [
  { icon: "ri-instagram-line" },
  { icon: "ri-facebook-fill" },
  { icon: "ri-heart-fill" },
  { icon: "ri-twitter-fill" },
];

function Features() {
  return (
    <section className="max-w-screen-lg mx-auto py-20 px-4" id="pages">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Services</h2>
          <p className="max-w-xl text-gray-500">
            We take pride in our exceptional team of doctors, each a specialist in their respective fields.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="text-center shadow-lg rounded-lg cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="absolute left-0 bottom-[-4rem] w-full flex items-center justify-center gap-4 transition-all duration-500">
                {socialIcons.map((social, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-2 text-2xl text-gray-800 bg-white rounded cursor-pointer transition-all duration-300 hover:text-blue-600"
                  >
                    <i className={social.icon} />
                  </span>
                ))}
              </div>
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-800">{doctor.name}</h4>
            <p className="mb-4 text-gray-500">{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
