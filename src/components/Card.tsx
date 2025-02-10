/** @format */

import React from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  content: string;
  footer?: React.ReactNode;
  image?: string;
  background?: "white" | "gray" | "black";
  textColor?: "black" | "white" | "gray";
  size?: "sm" | "md" | "lg";
  border?: "none" | "rounded" | "shadow";
  hoverEffect?: boolean;
  rating?: number;
  price?: string | number;
  onSale?: boolean;
  Logo?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  image,
  background = "white",
  textColor = "black",
  size = "md",
  border = "rounded",
  hoverEffect = false,
  rating = 0,
  price,
  onSale = false,
  logo,
}) => {
  const backgroundStyles = {
    white: "bg-white",
    gray: "bg-gray-800",
    black: "bg-black",
  };
  const textColorStyles = {
    black: "text-black",
    white: "text-white",
    gray: "text-gray-700",
  };
  const sizeStyles = {
    sm: "h-[300px] w-[220px]",
    md: "h-[350px] w-[250px]",
    lg: "h-[400px] w-[270px]",
  };
  const borderStyles = {
    none: "",
    rounded: "rounded-lg",
    shadow: "shadow-lg",
  };

  return (
    <div
      className={clsx(
        "overflow-hidden transition-all p-4",
        backgroundStyles[background],
        textColorStyles[textColor],
        sizeStyles[size],
        borderStyles[border],
        hoverEffect && "hover:scale-105 hover:shadow-xl"
      )}
    >
      <div className="flex items-center justify-between px-2">
        {onSale && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            On Sale
          </span>
        )}
        {logo && (
          <img className="w-[85px] h-[30px]" src={logo} alt="Brand Logo" />
        )}
      </div>
      {image && (
        <div className="w-full h-60 overflow-hidden mt-2">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-2 text-center">
        <h2 className="font-semibold mb-1">{title}</h2>
        <p className="text-sm mb-2">{content}</p>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={clsx(
                "h-4 w-4",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-500 text-gray-500"
              )}
            />
          ))}
        </div>
        {price && (
          <p className="text-lg font-bold">
            {typeof price === "number" ? price + "₮" : price}
          </p>
        )}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
