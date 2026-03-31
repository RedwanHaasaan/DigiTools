import { ShoppingCart } from "lucide-react";

const NoCartItem = ({ setActive }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
      
      <div className="p-6 rounded-full bg-base-200">
        <ShoppingCart className="w-10 h-10 text-gray-400" />
      </div>

      <h1 className="text-xl xl:text-2xl font-bold">
        Your Cart is Empty
      </h1>

      <p className="text-sm xl:text-base text-gray-500 max-w-sm">
        Looks like you haven’t added any products yet. Start exploring and add your favorite tools to your cart.
      </p>

      <button onClick={() => setActive("products")} className="btn btn-primary bg-gradient rounded-full px-6 mt-2">
        Browse Products
      </button>

    </div>
  );
};

export default NoCartItem;