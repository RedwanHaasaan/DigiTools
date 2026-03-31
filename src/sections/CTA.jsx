import React from "react";

const CTA = () => {
  return (
    <section className="bg-gradient py-16 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
        <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            className="btn rounded-full border-none bg-white text-primary hover:bg-gray-100 px-6"
          >
            <a href="#products">Explore Products</a>
          </button>

          <button
            className="btn rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-primary px-6"
          >
            <a href="#pricing">View Pricing</a>
          </button>
        </div>

        <p className="text-xs md:text-sm text-white/70">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTA;
