import type { KudaProps } from "../type";

export function KudaCard(props: KudaProps) {
  return (
    <div className="rounded-xl p-3 shadow hover:shadow-md transition">
      <img
        src={props.gambar}
        alt={props.nama}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-sm font-medium mt-2 line-clamp-2">{props.nama}</h2>
      <p className="text-red-500 font-semibold mt-1">Nomor: {props.nomor}</p>
      <p className="text-xs text-gray-500">{props.nomor} nomor kuda</p>
      <p className="text-xs text-gray-500">{props.status || 'Resting'}</p>
    </div>
  );
}

interface KudaCardProps {
  data: KudaProps;
  onClick?: () => void; // Tambah prop onClick
}

export function KudaCard2({ data, onClick }: KudaCardProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl p-3 shadow hover:shadow-xl transition cursor-pointer"
    >
      <img
        src={data.gambar}
        alt={data.nama}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-sm font-medium mt-2 line-clamp-2">{data.nama}</h2>
      <p className="text-red-500 font-semibold mt-1">Nomor: {data.nomor}</p>
      <p className="text-xs text-gray-500">{data.nomor} nomor kuda</p>
      <p className="text-xs text-gray-500">{data.status || 'Resting'}</p>
      {data.status && (
        <p className="text-xs text-gray-500">{data.status}</p>
      )}
    </div>
  );
}