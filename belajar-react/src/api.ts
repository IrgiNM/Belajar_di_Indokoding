import api from "./libs/axios";

  export async function getAllProducts() {
    const response = await api.get("/products");
    return response.data;
  }

  export async function getOneProduct(id: number) {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }