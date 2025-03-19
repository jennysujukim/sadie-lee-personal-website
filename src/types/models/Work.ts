export type WorkType = {
  id: number;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  filter: 'print' | 'illustration' | 'digital' | 'animation';
  type: string;
  year: string;
  keywords: string;
  materials: string;
  collaborators: string;
  descriptions: string[];
  images: string[];
  detailsImages: {
    images: string[];
  }[];
}