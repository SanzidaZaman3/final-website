/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing star icons

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

// Helper function to render star ratings
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return stars;
};

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const numericPrice = parseFloat(price);

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        {/* Ensure the image is rendered properly */}
        <img
          className="w-full h-auto"
          src={img}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>

        {/* Render the star ratings */}
        <div className="flex space-x-1">
          {renderStars(rating)}
        </div>

        {/* Render price and discount */}
        <div className="font-bold flex gap-4">
          ${numericPrice.toFixed(2)}
          <del className="text-gray-500 font-normal">
            ${(numericPrice * 1.5).toFixed(2)} {/* 50% discount */}
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
