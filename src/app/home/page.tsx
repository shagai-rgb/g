/** @format */
"use client";
import { Banner2 } from "@/components/banner/Banner2";
import { Banner3 } from "@/components/banner3/Banner3";
import { Events } from "@/components/eventAndConcert/Events";
import FavoriteArtist from "@/components/favorite-artist/FavoriteArtists";
import FavoriteProduct from "@/components/favoriteProduct/FavoriteProduct";
import FavoriteService from "@/components/favoriteService.tsx/FavoriteService";

interface artistdataType {
  title: string;
  image?: string;
  imageSize?: "sm" | "md" | "lg" | "full";
  background?: "white" | "gray" | "black";
  textColor?: "black" | "white" | "gray";
  size?: "sm" | "md" | "lg";
  border?: "none" | "rounded" | "shadow";
  hoverEffect?: boolean;
  rating?: number;
  price?: string | number;
  onSale?: boolean;
  logo?: string;
}

const artistdata: artistdataType[] = [
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Thunder ch ymu",
    image: "image.png",
    imageSize: "full",
    background: "gray",
    price: 3000000,
    textColor: "white",
    border: "rounded",
    hoverEffect: true,
    rating: 2,
    logo: "/image copy.png",
    onSale: true,
  },
];

const servicedata: artistdataType[] = [
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
  {
    size: "lg",
    title: "Гүзээлзгэнэтэй бялуу",
    image: "image copy 3.png",
    imageSize: "md",
    background: "white",
    price: "50,000₮ - 150,000₮",
    textColor: "black",
    border: "rounded",
    hoverEffect: true,
    rating: 4,
    logo: "/image copy.png",
    onSale: true,
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <Events />
      <FavoriteArtist artistdata={artistdata} />
      <FavoriteService servicedata={servicedata} />
      <Banner2 />
      <FavoriteProduct productdata={servicedata} />
      <Banner3 />
    </div>
  );
};

export default Page;
