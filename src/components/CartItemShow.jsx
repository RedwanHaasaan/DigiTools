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
  Trash2,
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
const CartItemShow = ({ cart, handleRemoveItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <h1 className="xl:text-2xl font-bold">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cart.map((item, index) => {
          const Icon = iconMap[item.icon] || FileText;

          return (
            <div
              key={index}
              className="bg-base-200 p-5 rounded-2xl flex justify-between items-center"
            >
              <div className="flex flex-row gap-4 items-center">
                <div>
                  <Icon className="w-12 h-12 p-2 bg-white text-primary rounded-full" />
                </div>

                <div>
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p className="text-base font-medium">${item.price}</p>
                </div>
              </div>

              <div onClick={()=>handleRemoveItem(item.id)}>
                <Trash2 className="hover:text-red-400 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between ">
        <span className="text-gray-500 font-normal text-base">Total:</span>
        <span className="text-gray-800 font-bold text-2xl">${totalPrice}</span>
      </div>
      <button className="btn btn-primary bg-gradient rounded-full text-base font-bold">
        Proceed To Checkout
      </button>
    </>
  );
};

export default CartItemShow;
