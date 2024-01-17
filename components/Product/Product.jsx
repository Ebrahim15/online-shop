import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, } from "@fortawesome/free-regular-svg-icons";
import "./product.css";
import { faStar as faStarSolid, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Product = ({
  product: { name, image, category, price, rating, description },
}) => {
  const ratingStars = [0, 1, 2, 3, 4];

  const [favorite, setFavorite] = useState(false)

  return (
    <div className="relative w-fit flex flex-col gap-2">
      {/* Image */}
      <div className="image_container flex justify-end relative w-60 h-60 rounded-md">
        <Image src={image} alt={category} fill="true" />
        {/* Favorite heart */}
        <div className="bg-white rounded-full absolute flex items-center justify-center p-2 m-2 cursor-pointer" onClick={() => setFavorite(!favorite)}>
          {
          favorite ?   
          <FontAwesomeIcon icon={faHeartSolid} color="red" />
          :
          <FontAwesomeIcon icon={faHeart} />
          }
        </div>
      </div>
      <div className="font-bold text-lg flex justify-between">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <p className="text-sm">{description}</p>
      {/* Rating stars bar */}
      <div className="flex items-center">
        {ratingStars.map((index) => {
          return rating > index ? (
            <FontAwesomeIcon
              className="star_icon"
              key={index}
              icon={faStarSolid}
              color="#0DA810"
              size="sm"
            />
          ) : (
            <FontAwesomeIcon key={index} icon={faStar} size="sm" />
          );
        })}
        <p>({rating})</p>
      </div>
      <button className="w-fit border-black border-solid border-2 rounded-full px-4 py-1 hover:bg-main hover:text-white transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
