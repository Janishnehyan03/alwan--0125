'use client';
import Link from "next/link";
import { useState } from "react";

type Service = {
  _id: string;
  title: string;
  slug: { current: string };
  icon: { asset: { url: string } };
  description: string;
};

function Services() {
  const [services, setServices] = useState<Service[]>([
    {
      _id: "1",
      title: "General",
      slug: { current: "general" },
      icon: { asset: { url: "/images/icons/general.svg" } },
      description:
        "Our general services are designed to provide comprehensive care for patients of all ages.",
    },
  ]);

  return (
    <section
      className="max-w-screen-lg mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      id="service"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-2xl sm:text-3xl font-semibold text-gray-800">
            Our Special Service
          </h2>
          <p className="max-w-xl text-gray-500 text-sm sm:text-base">
            Beyond simply providing medical care, our commitment lies in
            delivering unparalleled service tailored to your unique needs.
          </p>
        </div>
        <button className="py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base text-primary border border-primary bg-transparent rounded whitespace-nowrap transition duration-300 hover:text-white hover:bg-primary">
          Ask A Service
        </button>
      </div>

      {/* Services Grid */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug.current}`} key={service._id}>
            <div
              key={service._id}
              className="p-6 sm:p-8 relative rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <span className="inline-block mb-4 p-4 text-4xl text-primary bg-primary-light rounded-full transition duration-300 hover:text-primary-light hover:bg-primary">
                <img
                  src={service.icon?.asset?.url}
                  alt={service.title}
                  className="h-12 w-12"
                />
              </span>
              <h4 className="mb-2 text-xl lowercase text-left font-semibold text-gray-800">
                {service.title} Services
              </h4>
              <p className=" text-gray-500 text-left text-sm sm:text-base mb-8 flex-grow">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
