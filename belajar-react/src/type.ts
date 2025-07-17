export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  sold: number;
};
export type KudaProps = {
  id: number;
  nama: string;
  gambar: string;
  nomor: number;
  status?: 'Training' | 'Resting'; // Optional status property
};
