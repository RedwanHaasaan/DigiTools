const StepCard = ({step,title,description,image}) => {
  return (
    <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm">
      
      {/* Step Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient text-white font-bold">
        {step}
      </div>

      {/* Icon */}
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-6">
        <img src={image}/>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;