import type { ProductProps } from "../../type";
import ProductCard, { ProductCard2 } from "../../components/ProductCard";

export default function ExampleMapping() {
  // contoh bentukan data yang akan di dapat ketika request ke API
  // ini hanya contoh, biasanya data ini di dapat dari API
  // seperti ini contoh data seperti yg ada di e-commerce
  const productList: ProductProps[] = [
    {
      id: 1,
      name: "Kaos Pria Lengan Pendek",
      price: 59000,
      image:
        "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
      sold: 1300,
    },
    {
      id: 2,
      name: "Sneakers Wanita Putih",
      price: 179000,
      image:
        "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
      sold: 700,
    },
    {
      id: 3,
      name: "Jam Tangan Sport",
      price: 120000,
      image:
        "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
      sold: 890,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-3xl font-bold">Cara mapping data array</h1>

      {/* Cara Pertama */}
      <div className="mt-10">
        <h1 className="text-2xl">Cara Pertama</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
          {productList.map((product) => (
            <>
              <div className="rounded-xl p-3 shadow hover:shadow-md transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-sm font-medium mt-2 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-red-500 font-semibold mt-1">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                <p className="text-xs text-gray-500">{product.sold} terjual</p>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Cara Kedua dengan cara di pisah menjadi komponen */}
      <div className="mt-10">
        <h1 className="text-2xl">Cara Kedua</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
          {productList.map((product) => (
            <>
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                sold={product.sold}
              />
            </>
          ))}
        </div>
      </div>

      {/* Cara Ketiga dengan cara di pisah menjadi komponen dan lebih ringkas */}
      <div className="mt-10">
        <h1 className="text-2xl">Cara Ketiga</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
          {productList.map((product) => (
            <>
              <ProductCard2 key={product.id} data={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
