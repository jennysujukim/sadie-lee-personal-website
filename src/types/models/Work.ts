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
  descriptions: string[];
  images: string[];
}