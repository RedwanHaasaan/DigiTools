import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import StatSection from "./sections/StatSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatSection/>
      </main>
    </>
  );
}

export default App;
