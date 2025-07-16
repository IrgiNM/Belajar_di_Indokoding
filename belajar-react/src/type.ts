export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
  isSoldOut: boolean;
};

export interface ProductCardProps {
  data: ProductProps;
}

export type TombolIrgi = {
  label: string;
  warna: string;
  hover: string;
}