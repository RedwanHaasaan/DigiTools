import { useState } from "react";
import ToggleButtons from "../components/ToggleButtons";
import ProductShow from "../components/layout/ProductShow";
import Cart from "../components/layout/Cart";
const ProductSection = () => {
  const [active, setActive] = useState("products");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const loadProducts = async () => {
    const res = await fetch("/product.json");
    const data = await res.json();
    setProducts(data);
    setLoaded(true);
  };
  if (!loaded) {
    loadProducts();
  }
  const cartItem = cart.length;
    const AddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    };
  return (
    <div className="flex flex-col max-w-7xl mx-auto py-10 xl:py-32 px-4 gap-5 lg:gap-10">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl xl:text-5xl font-extrabold">
          Premium Digital Tools
        </h1>
        <p className="text-xs xl:text-base font-normal text-gray-500 md:w-1/2 mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <ToggleButtons
          active={active}
          setActive={setActive}
          cartItem={cartItem}
        />
      </div>
      {active === "products" ? (
        <ProductShow products={products} AddToCart={AddToCart} />
      ) : (
        <Cart cart={cart} setActive={setActive}/>
      )}
    </div>
  );
};

export default ProductSection;
