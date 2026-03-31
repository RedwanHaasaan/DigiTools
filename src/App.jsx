import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import ProductSection from "./sections/ProductSection";
import StatSection from "./sections/StatSection";

function App() {
  return (
    <>
      <header className="sticky z-50 top-0">
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatSection/>
        <ProductSection/>
      </main>
    </>
  );
}

export default App;
