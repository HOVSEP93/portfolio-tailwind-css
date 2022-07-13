import Service from "./components/Service";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="font-nunito ">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
