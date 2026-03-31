import StepCard from "../components/StepCard";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";
const GetStarted = () => {
  return (
    <div className="mx-auto bg-base-200 text-center">
      <div className="py-16 px-4 flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-800">Get Started In 3 Steps</h1>
          <p className="text-base font-normal text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div>
          <div className="flex flex-col gap-4 justify-centers items-center">
            <ul className="steps w-4/6 mx-auto">
              <li className="step step-primary text-xs lg:text-lg">Create Account</li>
              <li className="step step-primary text-xs lg:text-lg">Choose Products</li>
              <li className="step step-primary text-xs lg:text-lg">Start Creating</li>
            </ul>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
              <StepCard
                step="01"
                title="Create Account"
                description="Sign up for free in seconds. No credit card required to get started."
                image={User}
              />
              <StepCard
                step="02"
                title="Choose Products"
                description="Browse our catalog and select the tools that fit your needs."
                image={Package}
              />
              <StepCard
                step="03"
                title="Start Creating"
                description="Download and start using your premium tools immediately."
                image={Rocket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
