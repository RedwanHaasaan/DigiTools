import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import ProductSection from "./sections/ProductSection";
import StatSection from "./sections/StatSection";
import { useState } from "react";
function App() {
   const [cart, setCart] = useState([]);
   const [active, setActive] = useState("products");
  return (
    <>
      <header className="sticky z-50 top-0">
        <Navbar cartItem={cart.length} setActive={setActive} />
      </header>
      <main>
        <Hero />
        <StatSection/>
        <ProductSection cart={cart} setCart={setCart} active={active} setActive={setActive} />
      </main>
    </>
  );
}

export default App;
