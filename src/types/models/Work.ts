export type WorkType = {
  id: number;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  filter: 'print' | 'illustration' | 'digital' | 'painting';
  type: string;
  year: string;
  keywords: string;
  materials: string;
  collaborators: string;
  descriptions: string[];
  images: string[];
  details: {
    research: {
      images: string[];
      description: string[];
    },
    productionProcess: {
      images: string[];
      description: string[];
    },
    outcomeDetail: {
      images: string[];
      description: string[];
    }
  }
}