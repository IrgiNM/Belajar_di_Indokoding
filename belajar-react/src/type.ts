export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
  isSoldOut: boolean;
};

export type KudaProps = {
  id: number;
  nama: string;
  gambar: string;
  nomor: number;
  status?: 'Training' | 'Resting'; // Optional status property
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
