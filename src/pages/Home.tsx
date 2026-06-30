import About from "../components/about/About"
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts"
import Hero from "../components/hero/Hero"
import TrustedBrands from "../components/trustedBrands/TrustedBrands"

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <About />
      <FeaturedProducts />
    </div>
  )
}

export default Home