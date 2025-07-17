import type { KudaProps } from "../type";
import {  KudaCard2 } from "../components/KudaCard";

export default function MappingKuda() {
  const kudaList: KudaProps[] = [
    {
      id: 1,
      nama: "Gold ship",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1007.png",
      nomor: 89,
    },
    {
      id: 2,
      nama: "Mejiro McQueen",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1013.png",
      nomor: 99,
    },
    {
      id: 3,
      nama: "Vodka",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1008.png",
      nomor: 29,
    },
    {
      id: 4,
      nama: "Gold City",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1040.png",
      nomor: 69,
    },
    {
      id: 5,
      nama: "sweep Tosho",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1044.png",
      nomor: 96,
    },
    {
      id: 6,
      nama: "yayoi akikawa",
      gambar: "https://media.gametora.com/umamusume/characters/profile/9002.png",
      nomor: 12,
    },
    {
      id: 7,
      nama: "Daiwa Scarlet",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1009.png",
      nomor: 1,
    },
    {
      id: 8,
      nama: "Biwa Hayahide",
      gambar: "https://media.gametora.com/umamusume/characters/profile/1023.png",
      nomor: 10,
    },
    {
      id: 9,
      nama: "Little Cocon",
      gambar: "https://media.gametora.com/umamusume/characters/profile/2003.png",
      nomor: 37,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-3xl font-bold">Cara mapping data array</h1>
      {/* Cara Ketiga dengan komponen lebih ringkas */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
          {kudaList.map((kuda) => (
            <KudaCard2 key={kuda.id} data={kuda} />
          ))}
        </div>
      </div>
    </div>
  );
}
