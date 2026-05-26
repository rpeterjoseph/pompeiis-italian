import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import GlutenFree from "./components/GlutenFree";
import Catering from "./components/Catering";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <GlutenFree />
        <Catering />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
