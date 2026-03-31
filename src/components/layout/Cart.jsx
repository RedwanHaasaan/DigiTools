import CartItemShow from "../CartItemShow";
import NoCartItem from "../NoCartItem";
const Cart = ({cart,setActive,setCart}) => {
    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }
    const handleCheckout = () => {    
    alert(`Proceeding to checkout.`);
    setCart([]);
  }
    return (
        <div className="border border-gray-300 p-10 rounded-2xl flex flex-col gap-6">
            {cart.length === 0 ? <NoCartItem setActive={setActive}/> : <CartItemShow cart={cart} handleRemoveItem={handleRemoveItem} handleCheckout={handleCheckout}/> }
        </div>
    );
};

export default Cart;