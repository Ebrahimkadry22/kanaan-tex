import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Container from "../../ui/Container";


const Footer = () => {
  return (
    <footer className="bg-[#090B0F] border-t border-white/10 pt-20">

      <Container>

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}
          <div>
            <img src={logo} alt="KANAAN TEX" className="h-14" />

            <p className="mt-6 leading-8 text-gray-400">
              Premium woven labels, printed labels, ribbons and textile
              accessories manufactured with international quality standards.
            </p>

            <div className="mt-8 flex gap-4">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-2 hover:border-[#B2D234] hover:bg-[#B2D234] hover:text-black"
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>

          {/* Products */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Products
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Woven Labels</li>
              <li>Printed Labels</li>
              <li>Hang Tags</li>
              <li>Ribbon</li>
              <li>Packaging</li>

            </ul>
          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Newsletter
            </h3>

            <p className="text-gray-400">
              Subscribe to receive our latest news and products.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-full border border-white/10">

              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent px-5 py-4 text-white outline-none"
              />

              <button className="bg-[#B2D234] px-6 text-black transition hover:bg-white">
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} KANAAN TEX. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link to="/privacy">Privacy Policy</Link>

            <Link to="/terms">Terms & Conditions</Link>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;