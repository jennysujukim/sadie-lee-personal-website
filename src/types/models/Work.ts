export type WorkType = {
  id: number;
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