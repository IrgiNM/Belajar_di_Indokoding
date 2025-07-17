import { useParams } from "react-router-dom";

export default function LatihKuda() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Latihan Kuda</h1>
        <p className="text-lg mt-2">ID Kuda: {id}</p>
        {/* Di sini kamu bisa tambahkan konten latihan sesuai kebutuhan */}
      </div>
    </div>
  );
}
