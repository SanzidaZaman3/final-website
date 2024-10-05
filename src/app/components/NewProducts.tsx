/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ProductCard from './ProductCard';

// Products data array
const productsData = [
  {
    img: "/jacket.jpeg",
    title: "JACKET",
    desc: "MEN FULL ZIP JACKET",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/shirt.jpeg",
    title: "SHIRT",
    desc: "MEN CASUAL SHIRT",
    rating: 4,
    price: "30.00",
  },
  {
    img: "/heel.jpeg",
    title: "HEELS",
    desc: "WOMEN HIGH HEEL SHOES",
    rating: 4,
    price: "60.00",
  },
  {
    img: "/shoe.jpeg",
    title: "SHOES",
    desc: "MEN LEATHER SHOES",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/skirt.jpeg",
    title: "SKIRT",
    desc: "WOMEN CASUAL SKIRT",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/watch.jpeg",
    title: "WATCH",
    desc: "MEN WRIST WATCH",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/watch2.jpeg",
    title: "WATCH",
    desc: "WOMEN WRIST WATCH",
    rating: 5,
    price: "150.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard 
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
