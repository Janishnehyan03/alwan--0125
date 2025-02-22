const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-10 xl:px-[10rem] py-20"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(50, 7, 62, 0.9), rgba(0, 0, 0, 0.7)), url("https://img.freepik.com/free-photo/businessman-with-tablet-after-closing-deal_1098-3372.jpg?uid=R23430030&ga=GA1.1.693543164.1727334307&semt=ais_hybrid")',
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-center lg:text-left max-w-2xl">
          {/* Heading */}
          <h1 className="font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Colouring Your Dreams with Alwan
          </h1>

          {/* Description */}
          <p className="mb-8 text-sm sm:text-base text-primary-light max-w-lg mx-auto lg:mx-0">
            We are dedicated to helping individuals and businesses achieve their
            language goals, providing top-quality, interpretation, and language
            training services. Our team of skilled professionals is committed to
            delivering exceptional work while ensuring the timely delivery of
            your projects. At Trustword, we prioritize excellence, reliability,
            confidentiality, and customer satisfaction.
          </p>

          {/* Button */}
          <button className="btn py-2 px-6 sm:py-3 sm:px-8 outline-none border-none text-sm sm:text-base whitespace-nowrap bg-secondary text-white rounded cursor-pointer hover:bg-secondary-dark transition-all duration-300 ease-in-out">
            See Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;