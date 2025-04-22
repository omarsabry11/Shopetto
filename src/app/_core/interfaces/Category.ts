import { JSX } from "react";

export interface Category {
  map(arg0: (category: Category) => JSX.Element): import("react").ReactNode;
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
