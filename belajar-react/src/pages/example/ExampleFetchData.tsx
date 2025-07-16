import { useEffect, useState } from "react";
import IconLoader from "../../assets/ico-loader.svg";
import api from "../../libs/axios";
import type { ProductStore } from "../../type";

export default function ExampleFetchData() {
  const [data, setData] = useState<ProductStore[]>([]);
  const [detailData, setDetailData] = useState<ProductStore | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(true);
  const [id, setId] = useState<number>(1); // Contoh ID produk yang ingin diambil detailnya

  const fetchProduct = async () => {
    setLoading(true); // Set loading state to true before fetching data
    try {
      const response = await api.get("/products");
      console.log("response 1",response); // ✅ ini adalah data produk
      console.log("response masuk ke data",response.data); // ✅ ini adalah data produk
      setData(response.data); // Simpan data ke state
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const fetchDetailProduct = async (id: number) => {
    setLoadingDetail(true);
    try {
      const response = await api.get(`/products/${id}`);
      console.log(response.data); // ✅ ini adalah data produk
      setDetailData(response.data); // Simpan detail produk ke state
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
    setLoadingDetail(false);
  };

  useEffect(() => {
    fetchProduct(); // Panggil fungsi fetchProduct saat komponen dimuat
  }, []);

  useEffect(() => {
    fetchDetailProduct(id); // Panggil fungsi fetchDetailProduct saat id berubah
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-3xl">Example Fetch Data</h1>

      <div className="p-4 mt-4 flex flex-col items-center">
        <h1 className="text-2xl">Get all product</h1>
        {loading ? (
          <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-3">
              <img src={IconLoader} className="w-20 h-20 animate-spin" />
              <p>Loading...</p>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
            {data.map((x, y) => (
              <div
                key={y}
                className="rounded-lg p-4 shadow hover:shadow-md transition w-full max-w-xs"
              >
                <img
                  src={x.image}
                  alt={x.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-md font-semibold line-clamp-2">
                  {x.title}
                </h2>
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

      <div className="p-4 mt-4 flex flex-col items-center">
        <h1 className="text-2xl">Get one product</h1>

        {loadingDetail ? (
          <div className="flex flex-col items-center justify-center h-96 gap-3">
            <img src={IconLoader} className="w-20 h-20 animate-spin" />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="rounded-lg p-4 shadow hover:shadow-md transition w-full max-w-xs">
            <img
              src={detailData?.image}
              alt={detailData?.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-md font-semibold line-clamp-2">
              {detailData?.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{detailData?.category}</p>
            <p className="text-lg font-bold mt-2">Rp {detailData?.price}</p>
            <p className="text-sm text-yellow-600 mt-1">
              ⭐ {detailData?.rating.rate} ({detailData?.rating.count})
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 mt-4">
          <button
            className="bg-red-500 text-white p-3"
            onClick={() => setId(id - 1)}
            disabled={id <= 1}
          >
            -
          </button>
          <p>{id}</p>
          <button
            className="bg-green-500 text-white p-3"
            onClick={() => setId(id + 1)}
            disabled={id >= 20}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
