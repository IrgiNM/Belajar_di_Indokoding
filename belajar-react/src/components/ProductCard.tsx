import type { ProductCardProps, ProductProps } from "../type";

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   sold: number;
// };

export default function ProductCard(props: ProductProps) {
  return (
    <div className={`rounded-xl p-3 shadow ${props.isSoldOut ? 'border-2 border-red-500' : 'hover:shadow-md'} transition`}>
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-sm font-medium mt-2 line-clamp-2">{props.name}</h2>
      <p className="text-red-500 font-semibold mt-1">
        Rp {props.price.toLocaleString("id-ID")}
      </p>
      <p className="text-xs text-gray-500">{props.sold} terjual</p>
      {props.isSoldOut && (
        <p className="text-xs font-bold text-red-500">produk habis</p>
      )}
      
    </div>
  );
}

// interface ProductCardProps {
//   data: ProductProps;
// }

export function ProductCard2({ data }: ProductCardProps) {
  return (
    <div className="rounded-xl p-3 shadow hover:shadow-xl transition">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-sm font-medium mt-2 line-clamp-2">{data.name}</h2>
      <p className="text-red-500 font-semibold mt-1">
        Rp {data.price.toLocaleString("id-ID")}
      </p>
      <p className="text-xs text-gray-500">{data.sold} terjual</p>
    </div>
  );
}
