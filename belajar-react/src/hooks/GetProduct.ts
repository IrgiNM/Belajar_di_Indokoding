import { useQuery } from "@tanstack/react-query";
import type { ProductStore } from "../type";
import { getAllProducts, getOneProduct } from "../api";


export const GetProduct = () => {
  const { data, isPending } = useQuery<ProductStore[]>({
    queryKey: ["getAllProducts"],
    queryFn: getAllProducts,
  });

  return {
    data, 
    isPending,
  };
};

export const GetOneProduct = (id : number) => {
  const { data, isPending } = useQuery<ProductStore>({
    queryKey: ["getOneProducts", id], // apabila id ada peru maka queryFn akan dijalankan kembali
    queryFn: () => getOneProduct(id),
  });

  return {
    data, 
    isPending,
  };
};

