import React from "react";

function About() {
  return (
    <section
      className="max-w-screen-lg mx-auto py-12 px-4 md:py-20 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      id="about"
    >
      <div>
        <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-gray-800">About Us</h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
        </p>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
        </p>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          className="max-w-xs md:max-w-sm lg:max-w-md mx-auto rounded-lg shadow-lg"
          src="https://img.freepik.com/free-photo/entrepreneurs-discussing-work-results-meeting_1163-5277.jpg?uid=R23430030&ga=GA1.1.693543164.1727334307&semt=ais_hybrid"
          alt="about"
        />
      </div>
    </section>
  );
}

export default About;
