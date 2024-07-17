/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Loading from "@/app/Loading";
import { BsStarFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { ProductContext } from "@/app/components/provider/AddtoCartProvider";
import { Product } from "@/types/Products.types";

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { setSelectedProducts, selectedProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const title = decodeURIComponent(name);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-8 flex justify-center items-center">
      {products
        .filter((product) =>
          product.title.toLowerCase().includes(title.toLowerCase())
        )
        .map((product: Product) => (
          <div
            key={product.id}
            className="grid grid-cols-2 gap-4 place-content-center"
          >
            <img src={product.image} alt="image" className="w-1/2 mx-auto" />

            <div className="w-8/12">
              <h3 className="my-4 text-2xl uppercase font-bold text-gray-400">
                {product.category}
              </h3>
              <h1 className="my-4 text-4xl">{product.title}</h1>

              <div className="flex items-center my-4">
                <p className="space-x-4 flex">
                  <span className="flex flex-col justify-center items-center">
                    <BsStarFill />
                    {product.rating.rate}
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <BsFillPersonFill />
                    {product.rating.count}
                  </span>
                </p>
              </div>

              <p className="font-semibold text-2xl mr-4 my-4">
                $ <span className="text-4xl ml-2">{product.price}</span>
              </p>

              <p className="text-justify my-4">{product.description}</p>

              <div className="flex items-center space-x-4 my-4">
                <button
                  type="submit"
                  className="border border-black rounded px-4 py-1 
                                hover:bg-sky-950 
                                hover:text-white"
                  onClick={() => {
                    const updatedProducts = [...selectedProducts, product.id];
                    setSelectedProducts(updatedProducts);
                  }}
                >
                  Add to Cart
                </button>

                <Link href={"/cart"}>
                  <button
                    type="submit"
                    className="bg-sky-700 rounded text-white px-4 py-1 opacity-100 hover:opacity-50"
                  >
                    Go to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
