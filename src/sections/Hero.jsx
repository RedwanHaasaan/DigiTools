import Banner from "../assets/banner.png";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-16 py-10 lg:py-16">

        {/* IMAGE */}
        <img
          src={Banner}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
        />

        {/* TEXT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8">

          {/* Badge */}
          <div className="badge badge-soft badge-primary text-sm md:text-base font-medium flex gap-2 items-center px-3 py-2 md:px-4 md:py-3">
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-primary animate-ping"></div>
              <div className="status status-primary"></div>
            </div>
            New: AI-Powered Tools Available
          </div>

          {/* Heading + Text */}
          <div className="flex flex-col gap-3 lg:gap-4 items-center xl:items-start">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight lg:leading-20 text-gray-800">
              Supercharge Your Digital Workflow
            </h1>

            <p className="text-xs sm:text-base md:text-lg font-normal leading-6 md:leading-7 text-gray-600 max-w-sm md:max-w-lg">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">

            {/* Explore Products */}
            <a href="#products"
              className="btn w-full sm:w-auto text-white text-sm md:text-base lg:text-lg font-semibold 
              py-3 md:py-4 lg:py-5 px-4 md:px-5 lg:px-6 
              rounded-full
              bg-linear-to-r from-[#4F39F6] to-[#9514FA]
              hover:bg-none hover:bg-white hover:text-[#4F39F6] hover:border hover:border-[#4F39F6]
              transition-all duration-300"
            >
              Explore Products
            </a>

            {/* Watch Demo */}
            <a
              className="btn w-full sm:w-auto flex items-center justify-center gap-2
              text-sm md:text-base lg:text-lg font-semibold 
              py-3 md:py-4 lg:py-5 px-4 md:px-5 lg:px-6 
              rounded-full border border-[#4F39F6] text-[#4F39F6]
              hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] 
              hover:text-white hover:border-transparent
              transition-all duration-300"
            >
              <Play size={18} />
              Watch Demo
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;