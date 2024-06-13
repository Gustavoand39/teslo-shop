"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (newQuantity: number) => setCount(newQuantity);

  return (
    <div className="flex items-center">
      <button
        onClick={() => onQuantityChange(count - 1)}
        disabled={count === 1}
      >
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 mx-3 px-3 bg-gray-100 text-center rounded">
        {count}
      </span>

      <button onClick={() => onQuantityChange(count + 1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
