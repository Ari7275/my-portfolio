import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { StaticImageData } from "next/image";
export interface Painting {
  image?: StaticImageData;
  title: string;
  description: string;
  dimensions?: string;
  technique?: string;
  price: number;
  available: boolean;
}

export const paintings: Painting[] = [
  {
    title: "Summer Landscape",
    description: "A vibrant landscape capturing the essence of summer with bold colors and expressive brushstrokes.",
    dimensions: "24\" x 36\"",
    technique: "Oil on Canvas",
    price: 1200,
    available: true,
  },
  {
    title: "Abstract Harmony",
    description: "An exploration of form and color through abstract expression.",
    dimensions: "30\" x 40\"",
    technique: "Oil on Canvas",
    price: 1500,
    available: true,
  },
  // Add more paintings here
];