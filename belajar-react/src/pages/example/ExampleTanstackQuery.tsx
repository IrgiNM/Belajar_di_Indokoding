// Disini kita akan belajar cara pemakaian TanStack Query
// Dokumentasi lengkap: https://tanstack.com/query/latest/docs/framework/react/overview

import IconLoader from "../../assets/ico-loader.svg";
import { useQuery } from "@tanstack/react-query"
import api from "../../libs/axios"
import type { ProductStore } from "../../type";
import { useState } from "react";
import { GetOneProduct, GetProduct } from "../../hooks/GetProduct";

export default function ExampleTanstackQuery() {
  const [productId, setProductId] = useState<number>(1);

  // ----------- 1. Contoh Dasar (sesuai dokumentasi resmi) ------------
  // Mengambil semua produk langsung di dalam useQuery
  const { isPending, isError, data } = useQuery<ProductStore[]>({
    queryKey: ['repoData'], // key unik untuk caching dan re-fetch
    queryFn: () =>
      api.get('/products').then(res => res.data), // ambil semua produk
  });
  console.log("DATA SEMUA PRODUK : ", data);
  // --------------------------- END 1 ------------------------------


  // ----------- 2. Contoh dengan Function Terpisah ------------------
  // Mengambil satu produk berdasarkan id
  const fetchOneProduct = useQuery({
    queryKey: ['oneProduct', productId], // key-nya dinamis berdasarkan ID
    queryFn: () => getOneProduct(productId), // fungsi ambil produk per ID
    enabled: !!productId, // hanya dijalankan kalau ID ada (tidak null/undefined)
  });

  console.log(`DATA PRODUK DENGAN ID ${productId} : `, fetchOneProduct.data);

  // Fungsi getOneProduct bisa dipindah ke file terpisah (seperti di api.ts)
  async function getOneProduct(id: number): Promise<ProductStore> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }
  // --------------------------- END 2 ------------------------------


  // ----------- 3. Versi lebih rapi (pakai custom hook) ------------
  const { data: data3, isPending: isPending3 } = GetProduct(); // ambil semua produk
  const { data: data2, isPending: isPending2 } = GetOneProduct(productId); // ambil produk berdasarkan ID
  console.log("DATA dari custom hook (GetProduct) : ", data3);
  console.log(`DATA dari custom hook (GetOneProduct ${productId}) : `, data2);
  // --------------------------- END 3 ------------------------------


  return (
    <div className="min-h-screen flex items-center justify-center flex-col">

      {/* Bagian Get All Products */}
      <div className="p-4 mt-4 flex flex-col items-center">
        <h1 className="text-2xl">Get all product</h1>
        {isPending ? (
          <div className="flex flex-col items-center justify-center min-h-screen gap-3">
            <img src={IconLoader} className="w-20 h-20 animate-spin" />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
            {data?.map((x, y) => (
              <div
                key={y}
                className="rounded-lg p-4 shadow hover:shadow-md transition w-full max-w-xs"
              >
                <img
                  src={x.image}
                  alt={x.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-md font-semibold line-clamp-2">{x.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{x.category}</p>
                <p className="text-lg font-bold mt-2">Rp {x.price}</p>
                <p className="text-sm text-yellow-600 mt-1">
                  ⭐ {x.rating.rate} ({x.rating.count})
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bagian Get One Product */}
      <div className="p-4 mt-4 flex flex-col items-center">
        <h1 className="text-2xl">Get one product</h1>

        {isPending2 ? (
          <div className="flex flex-col items-center justify-center h-96 gap-3">
            <img src={IconLoader} className="w-20 h-20 animate-spin" />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="rounded-lg p-4 shadow hover:shadow-md transition w-full max-w-xs">
            <img
              src={data2?.image}
              alt={data2?.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-md font-semibold line-clamp-2">{data2?.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{data2?.category}</p>
            <p className="text-lg font-bold mt-2">Rp {data2?.price}</p>
            <p className="text-sm text-yellow-600 mt-1">
              ⭐ {data2?.rating.rate} ({data2?.rating.count})
            </p>
          </div>
        )}
      </div>

      {/* Tombol Ubah ID Produk */}
      <div className="flex flex-row items-center justify-center gap-3">
        <button
          disabled={productId === 1}
          onClick={() => setProductId(productId - 1)}
          className="bg-red-500 text-white p-3"
        >
          -
        </button>
        <p>{productId}</p>
        <button
          disabled={productId === 20}
          onClick={() => setProductId(productId + 1)}
          className="bg-green-500 text-white p-3"
        >
          +
        </button>
      </div>
    </div>
  );
}
