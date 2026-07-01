import About from "../components/about/About"
import CallToAction from "../components/call To Action/CallToAction"
import CompanyStatistics from "../components/Company Statistics/CompanyStatistics"
import FactoryShowcase from "../components/factoryShowcase/FactoryShowcase"
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts"
import GlobalPresence from "../components/global Presence/GlobalPresence"
import Hero from "../components/hero/Hero"
import ManufacturingProcess from "../components/manufacturingProcess/ManufacturingProcess"
import Testimonials from "../components/testimonials/Testimonials"
import TrustedBrands from "../components/trustedBrands/TrustedBrands"
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs"

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <About />
      <FeaturedProducts />
      <WhyChooseUs />
       <ManufacturingProcess />
       <FactoryShowcase />
         <CompanyStatistics />
         <Testimonials />
         <CallToAction />
         <GlobalPresence />
    </div>
  )
}

export default Home