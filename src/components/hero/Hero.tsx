import Container from "../ui/Container";
import heroImage from "../../assets/images/hero.png";
import { RiScrollToBottomLine } from "react-icons/ri";

const Hero = () => {
  return (

       <section
  className="relative min-h-screen overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/75 via-[#0F1115]/70 to-[#0F1115]/30"></div>

  <Container className="relative z-10 flex min-h-screen items-center py-32">
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-20 w-full">

      {/* Left Content */}
      <div className="max-w-3xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#B2D234]/30 bg-[#B2D234]/10 backdrop-blur-md px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#B2D234]">
          ✦ Since 1991 • Premium Textile Accessories
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-6xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-white">
          <span className="text-[#B2D234]">Precision</span>
          <br />
          Woven Into
          <br />
          Every Detail
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg md:text-xl leading-9 text-gray-300">
          We manufacture premium woven labels, printed labels, ribbons,
          hang tags, and textile accessories for global fashion brands that
          demand exceptional quality and precision.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">

          <button className="rounded-full bg-[#B2D234] px-10 py-5 font-bold text-black shadow-[0_0_40px_rgba(178,210,52,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            Request a Quote →
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-10 py-5 font-semibold text-white transition-all duration-300 hover:border-[#B2D234] hover:bg-white/10">
            Explore Products
          </button>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-[#B2D234]/40">
            <h3 className="text-4xl font-bold text-[#B2D234]">30+</h3>
            <p className="mt-2 text-gray-300">Years Experience</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-[#B2D234]/40">
            <h3 className="text-4xl font-bold text-[#B2D234]">500+</h3>
            <p className="mt-2 text-gray-300">Clients Worldwide</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-[#B2D234]/40">
            <h3 className="text-4xl font-bold text-[#B2D234]">20+</h3>
            <p className="mt-2 text-gray-300">Product Categories</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-[#B2D234]/40">
            <h3 className="text-4xl font-bold text-[#B2D234]">24h</h3>
            <p className="mt-2 text-gray-300">Fast Response</p>
          </div>

        </div>

      </div>

      {/* Right Floating Card */}
      <div className="hidden xl:flex justify-end">

        <div className="w-[420px] rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm uppercase tracking-widest text-[#B2D234]">
                Premium Quality
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Crafted For Global Brands
              </h2>
            </div>

            <div className="h-16 w-16 rounded-full bg-[#B2D234]/20 flex items-center justify-center text-3xl">
              🏷️
            </div>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3">
              <span className="text-[#B2D234] text-xl">✔</span>
              <p className="text-gray-200">Premium Woven Labels</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#B2D234] text-xl">✔</span>
              <p className="text-gray-200">Printed Labels</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#B2D234] text-xl">✔</span>
              <p className="text-gray-200">Ribbons & Hang Tags</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#B2D234] text-xl">✔</span>
              <p className="text-gray-200">Worldwide Shipping</p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl bg-[#B2D234] p-6">

            <p className="text-sm uppercase tracking-widest text-black/70">
              Trusted Manufacturing
            </p>

            <h3 className="mt-2 text-4xl font-black text-black">
              Since 1991
            </h3>

          </div>

        </div>

      </div>

    </div>
  </Container>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white animate-bounce flex flex-col justify-center items-center gap-1">
    <div className="text-sm tracking-[4px] uppercase">Scroll</div>
    <div className="text-2xl"><RiScrollToBottomLine /></div>
  </div>
</section>
   
);
};

export default Hero;