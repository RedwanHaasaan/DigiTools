import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import ProductSection from "./sections/ProductSection";
import StatSection from "./sections/StatSection";
import { useState } from "react";
import GetStarted from "./sections/GetStarted";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";
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
        <GetStarted/>
        <Pricing/>
        <CTA/>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
