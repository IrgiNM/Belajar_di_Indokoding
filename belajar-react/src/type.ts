export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
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
