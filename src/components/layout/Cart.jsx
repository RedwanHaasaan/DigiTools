import CartItemShow from "../CartItemShow";
import NoCartItem from "../NoCartItem";
const Cart = ({cart,setActive}) => {
    return (
        <div className="border border-gray-300 p-10 rounded-2xl flex flex-col gap-6">
            {cart.length === 0 ? <NoCartItem setActive={setActive}/> : <CartItemShow cart={cart}/> }
        </div>
    );
};

export default Cart;