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
      className="hover:bg-slate-100 backdrop-blur-sm rounded-lg"
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

        <div className="p-4 flex flex-col">
          <h3>{product.title}</h3>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};
