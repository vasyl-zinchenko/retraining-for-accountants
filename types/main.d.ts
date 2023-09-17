export interface Option {
  id: number;
  title: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  includes: Include[];
}

interface Include {
  id: number;
  title: string;
  term?: string;
  isNew: boolean;
  isIncluded: boolean;
  important?: string;
  more?: string;
}

export interface Slide {
  id: number;
  url: string;
  alt: string;
}
