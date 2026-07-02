import { useState } from "react";
import Container from "../ui/Container";
import ReportCategoryCard from "./ReportCategoryCard";
import reportCategories from "./reportCategories";

const Categories = () => {
  const [selected, setSelected] = useState(1);

  return (
    <section className="bg-[#0F1115] py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white">
            Select Report Type
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Choose the category that best describes your issue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reportCategories.map((item) => (
            <ReportCategoryCard
              key={item.id}
              {...item}
              active={selected === item.id}
              onClick={() => setSelected(item.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;