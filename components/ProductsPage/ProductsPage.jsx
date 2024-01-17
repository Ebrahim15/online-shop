import React from "react";
import "./productsPage.css";
import Filter from "../Filter/Filter";
import SortBy from "../SortBy/SortBy";
import Product from "../Product/Product";
import Image from "next/image";


const ProductsPage = ({
  products,
  offer: { offerImage, offerText },
  filters,
  sortByOptions,
  category
}) => {
  return (
    <div className="px-16 flex flex-col gap-10">
      {/* Image for offers */}
      <div className="offer_container relative w-full min-h-[250px]">
        <Image src={offerImage} fill="true" />
        <div className="absolute p-14 flex flex-col items-start gap-5">
          <div className="w-80">
            <p className="text-main text-3xl font-bold">
              {offerText}
            </p>
          </div>
          <button className="text-white bg-main rounded-full px-6 py-2">
            Buy Now
          </button>
        </div>
      </div>
      {/* Filters & Sort by */}
      <div className="flex gap-3 justify-between">
        <div className="flex gap-3">
          {filters.map((filter) => {
            return <Filter key={filter.name} filter={filter} />;
          })}
        </div>
        <SortBy sortByOptions={sortByOptions}/>
      </div>

      <p className="font-bold text-2xl">{category} For You!</p>

      {/* Products list */}
      <div className="flex gap-10 flex-wrap">
        {
          products.map((product) => <Product product={product}/>)
        }
      </div>
    </div>
  );
};

export default ProductsPage;
