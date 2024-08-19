import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import landingPageData from "./constant/webdata";
function App() {
  const { header, hero, features, testimonials } = landingPageData;
  return (
    <>
      <div>
        {/* header section  */}
        <Header header={header} />

        {/* hero section  */}

        <Hero hero={hero} />

        {/* features section  */}

        <Features features={features} />

        {/* testimonials section  */}

        <Testimonials testimonials={testimonials} />

        {/* footer section  */}

        <Footer header={header} />
      </div>
    </>
  );
}

export default App;
