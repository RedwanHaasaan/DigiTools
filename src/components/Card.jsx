import { useState } from "react";
import {
  FileText,
  Layout,
  Mic,
  ClipboardList,
  Mail,
  Award,
  Briefcase,
  TrendingUp,
  Map,
  Package,
  Search,
  Bell,
} from "lucide-react";

const iconMap = {
  FileText,
  Layout,
  Mic,
  ClipboardList,
  Mail,
  Award,
  Briefcase,
  TrendingUp,
  Map,
  Package,
  Search,
  Bell,
};

const tagStyles = {
  popular: "badge-warning",
  new: "badge-success",
  "best seller": "badge-primary",
};

const Card = ({ product, AddToCart }) => {
  const [added, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
    AddToCart(product);
    setTimeout(() => setAdded(false), 3000);
  };
  const Icon = iconMap[product.icon] || FileText;

  return (
    <div className="card max-w-96 bg-base-100 shadow-sm border border-gray-100 rounded-2xl cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="card-body">
        <div className="flex justify-end">
          <span
            className={`badge badge-sm xl:badge-lg text-white ${tagStyles[product.tag]}`}
          >
            {product.tag}
          </span>
        </div>
        <div>
          <Icon className="w-12 h-12 border border-gray-200 p-2 rounded-full text-primary" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl xl:text-3xl font-bold">{product.name}</h2>

          <p className="text-sm xl:text-base text-gray-500">
            {product.description}
          </p>

          {/* 🔥 Price */}
          <p className="text-xl font-bold">
            ${product.price}/
            <span className="text-base font-normal text-gray-500">
              {product.period === "monthly"
                ? "mo"
                : product.period === "yearly"
                  ? "yr"
                  : "one-time"}
            </span>
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-xs xl:text-sm">
          {product.features.map((feature, i) => (
            <li key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={handleClick}
            className={`btn btn-block rounded-full transition-all ${
              added ? "btn-success text-white" : "btn-primary bg-gradient"
            }`}
          >
            {added ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
