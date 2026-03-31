import DigitalArt from "/digital-art.png"
import { Trash2 } from "lucide-react";
const CartItemShow = () => {
  return (
    <>
      <h1 className="xl:text-2xl font-bold">Your Cart</h1>
      <div>
        <div className="bg-base-200 p-5 rounded-2xl flex justify-between items-center">
          <div className="flex flex-row gap-4">
            <div>
              <img
                src={DigitalArt}
                className="w-12 h-12 p-2 border border-none bg-white rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold">AI Writing Pro</h1>
              <p className="text-base font-medium">$29</p>
            </div>
          </div>
          <div>
            <Trash2 className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between ">
        <span className="text-gray-500 font-normal text-base">Total:</span>
        <span className="text-gray-800 font-bold text-2xl">$78</span>
      </div>
      <button className="btn btn-primary bg-gradient rounded-full text-base font-bold">
        Proceed To Checkout
      </button>
    </>
  );
};

export default CartItemShow;
