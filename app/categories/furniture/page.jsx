"use client";

import ProductsPage from "@/components/ProductsPage/ProductsPage";
import { faChevronDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const category = "Furniture";
  const offer = {
    offerImage: "/assets/images/furniture.jpg",
    offerText: "Grab Upto 50% Off On Selected Headphones",
  };
  const products = useSelector((state) => state.products).filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  const filters = [
    {
      name: `${category} Type`,
      choices: ["chair", "Bed", "Table"],
      icon: faChevronDown,
    },
    {
      name: "Price",
      choices: ["0 to 50", "50 to 100", "100 to 150"],
      icon: faChevronDown,
    },
    {
      name: "Review",
      choices: ["Bad", "Good", "Very good", "Excellent"],
      icon: faChevronDown,
    },
    {
      name: "Color",
      choices: ["white", "black", "red"],
      icon: faChevronDown,
    },
    {
      name: "Material",
      choices: ["Chair", "Bed", "Table"],
      icon: faChevronDown,
    },
    {
      name: "Offer",
      choices: ["chair", "Bed", "Table"],
      icon: faChevronDown,
    },
    {
      name: "All Filters",
      choices: ["chair", "Bed", "Table"],
      icon: faSliders,
    },
  ];

  const sortByOptions = [
    {
      name: "Price Low to High",
    },
    {
      name: "Price High to Low",
    },
    {
      name: "Customer Review",
    },
    {
      name: "Newest Arrivals",
    },
  ];

  return (
    <div>
      <ProductsPage
        products={products}
        offer={offer}
        filters={filters}
        sortByOptions={sortByOptions}
        category={category}
      />
    </div>
  );
};

export default page;
