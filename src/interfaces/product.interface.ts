export interface IProduct {
  // id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSize[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidType;
  gender: Gender;
}

export type ValidSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ValidType = "shirts" | "pants" | "hoodies" | "hats";
export type Gender = "men" | "women" | "kid" | "unisex";
