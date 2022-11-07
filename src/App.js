import Business from "./components/Business";
import CallToAction from "./components/CallToAction";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="flex items-start justify-center bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <HeroBanner></HeroBanner>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 bg-primary sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <Stats></Stats>
          <Business></Business>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CallToAction></CallToAction>
          <Footer></Footer>
          {/* <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
