const PricingCard = ({
  title,
  subtitle,
  price,
  features = [],
  buttonText,
  highlighted = false,
  badgeText = "Most Popular",
}) => {
  return (
    <div
      className={`relative rounded-2xl max-w-xs md:max-w-sm lg:max-w-lg p-8 shadow-md transition-all duration-300
      ${
        highlighted
          ? "bg-gradient text-white scale-105"
          : "bg-base-200"
      }`}
    >
      {/* Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-4 py-1 rounded-full font-medium">
          {badgeText}
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold text-left">{title}</h2>
      <p className={`text-left text-sm mt-1 ${highlighted ? "text-white/80" : "text-gray-500"}`}>
        {subtitle}
      </p>

      {/* Price */}
      <div className="mt-4 mb-6 text-left">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm ml-1">/Month</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`btn w-full rounded-full border-none
        ${
          highlighted
            ? "bg-white text-purple-600 hover:bg-gray-100"
            : "bg-gradient text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;