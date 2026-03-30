const statsData = [
  { id: 1, value: "50K+", title: "Active Users" },
  { id: 2, value: "200+", title: "Premium Tools" },
  { id: 3, value: "4.9", title: "Rating" },
];

const StatSection = () => {
  return (
    <div className="bg-gradient py-10 xl:py-14 px-4">
      
      <div className="
        stats 
        stats-vertical lg:stats-horizontal
        text-white  
        w-full
        text-center
      ">
        
        {statsData.map((item, index) => (
          <div
            key={item.id}
            className={`
              stat 
              flex-1
              flex flex-col items-center justify-center
              gap-3 xl:gap-4

              ${index !== statsData.length - 1
                ? "border-b lg:border-b-0 lg:border-r border-white/30"
                : ""
              }
            `}
          >
            <div className="stat-value text-3xl md:text-4xl xl:text-6xl font-extrabold">
              {item.value}
            </div>
            <div className="stat-title text-gray-300 font-medium text-sm md:text-lg xl:text-2xl">
              {item.title}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default StatSection;