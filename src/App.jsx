/**
 * @copyright 2025 Dhruvil Patel
 * @license Apache-2.0
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
