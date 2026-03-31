import PricingCard from "../components/PricingCard";
const Pricing = () => {
  return (
    <div id="pricing" className="mx-auto bg-white text-center">
      <div className="py-16 px-4 flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-800">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base font-normal text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto justify-items-stretch mt-4">
          <PricingCard
            title="Starter"
            subtitle="Perfect for getting started"
            price="0"
            features={[
              "Access to 10 free tools",
              "Basic templates",
              "Community support",
              "1 project per month",
            ]}
            buttonText="Get Started Free"
          />

          <PricingCard
            title="Pro"
            subtitle="Best for professionals"
            price="49"
            features={[
              "Access to all premium tools",
              "Unlimited templates",
              "Priority support",
              "Unlimited projects",
              "Cloud sync",
              "Advanced analytics",
            ]}
            buttonText="Start Pro Trial"
            highlighted={true}
          />

          <PricingCard
            title="Enterprise"
            subtitle="For teams and businesses"
            price="120"
            features={[
              "Everything in Pro",
              "Team collaboration",
              "Custom integrations",
              "Dedicated support",
              "SLA guarantee",
              "Custom branding",
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
