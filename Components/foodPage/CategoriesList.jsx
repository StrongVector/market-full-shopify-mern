import React from "react";

import { FaFemale, FaMale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { MdImportantDevices } from "react-icons/md";

import CategoryCard from "./CategoryCard";
const CategoriesList = () => {
  const categories = [
    {
      title: "Men",
      logo: <FaMale className="text-3xl" />,
      ref: "products/Men",
    },
    {
      title: "Women",
      logo: <FaFemale className="text-3xl" />,
      ref: "products/Women",
    },

    {
      title: "Electronic",
      logo: <MdImportantDevices className="text-3xl" />,
      ref: "products/Electronic",
    },
    {
      title: "Jellery",
      logo: <GiBigDiamondRing className="text-3xl" />,
      ref: "products/jellery",
    },
  ];

  return (
    <div
      className="container mx-auto flex justify-center items-center gap-3 flex-wrap
     mt-4 lg:mt-2 p-2 "
    >
      {categories.map((data, ind) => {
        return <CategoryCard data={data} ind={ind} key={ind} />;
      })}
    </div>
  );
};

export default CategoriesList;
