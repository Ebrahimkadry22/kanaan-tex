import { useState } from "react";

interface Props {
  images: string[];
}

const ProductGallery = ({ images }: Props) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-[32px] border border-white/10">
        <img
          src={selected}
          alt="Product"
          className="h-[550px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelected(image)}
            className={`overflow-hidden rounded-2xl border transition ${
              selected === image
                ? "border-[#B2D234]"
                : "border-white/10"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;