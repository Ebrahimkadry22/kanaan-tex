import { BiSearch } from "react-icons/bi";


interface Props {
  search: string;
  setSearch: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

const categories = [
  "All",
  "Woven",
  "Printed",
  "Ribbon",
  "Hang Tags",
  "Packaging",
  "Accessories",
];

const ProductFilters = ({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <section className="bg-[#0F1115] py-14">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}

          <div className="relative w-full lg:max-w-md">

            <BiSearch
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-14 w-full rounded-full border border-white/10 bg-white/5 pl-14 pr-5 text-white outline-none transition focus:border-[#B2D234]"
            />

          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#B2D234] text-black"
                    : "border border-white/10 bg-white/5 text-white hover:border-[#B2D234]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductFilters;