import { PortableTextBlock } from "sanity";

export type WorkType = {
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  type: string;
  year: string;
  keywords: string[];
  descriptions: PortableTextBlock[];
  images: {
    alt: string;
    imageUrl: string;
  }[];
}