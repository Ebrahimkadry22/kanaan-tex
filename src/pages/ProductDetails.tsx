
import woven from "../assets/images/products/woven.png";
import FAQ from "../components/products/FAQ/FAQ";
import ProductGallery from "../components/products/productDetails/ProductGallery";
import ProductInfo from "../components/products/productDetails/ProductInfo";
import ProductSpecifications from "../components/products/ProductSpecifications";
import  RelatedProducts from "../components/products/RelatedProducts";

const ProductDetails = () => {
  const images = [
    woven,
    woven,
    woven,
    woven,
  ];

  return (
    <section className="bg-[#0F1115] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <ProductGallery images={images} />

        <ProductInfo />

      </div>
      <ProductSpecifications />
      <RelatedProducts currentProductId={1} />
      <FAQ />
    </section>
  );
};

export default ProductDetails;