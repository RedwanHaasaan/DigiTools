import CartItemShow from "../CartItemShow";
import NoCartItem from "../NoCartItem";
const Cart = ({cart,setActive,setCart}) => {
    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }
    return (
        <div className="border border-gray-300 p-10 rounded-2xl flex flex-col gap-6">
            {cart.length === 0 ? <NoCartItem setActive={setActive}/> : <CartItemShow cart={cart} handleRemoveItem={handleRemoveItem}/> }
        </div>
    );
};

export default Cart;