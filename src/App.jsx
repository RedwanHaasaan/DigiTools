import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import ProductSection from "./sections/ProductSection";
import StatSection from "./sections/StatSection";
import { useState } from "react";
function App() {
   const [cart, setCart] = useState([]);
  return (
    <>
      <header className="sticky z-50 top-0">
        <Navbar cartItem={cart.length} />
      </header>
      <main>
        <Hero />
        <StatSection/>
        <ProductSection cart={cart} setCart={setCart} />
      </main>
    </>
  );
}

export default App;
