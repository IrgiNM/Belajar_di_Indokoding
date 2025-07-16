export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
  isSoldOut: boolean;
};

export interface ProductStore {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCardProps {
  data: ProductProps;
}

export type TombolIrgi = {
  label: string;
  warna: string;
  hover: string;
}