"use client";
import React, { useState } from "react";
import { IProduct } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: IProduct;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="hover:bg-zinc-300/80 hover:shadow-xl rounded-lg transition duration-300"
    >
      <div className="rounded-md overflow-hidden fade-in">
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover object-center rounded-sm"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />

        <div className="p-4 flex flex-col justify-between h-28">
          <h3>{product.title}</h3>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};
