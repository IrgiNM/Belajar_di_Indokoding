// install extension ES7 React/Redux/GraphQL/React-Native snippets di VSCode
// extension ini menyediakan snippet untuk membuat komponen React dengan cepat
// cara pemakaian: ketika pertama kali buka halaman, bisa langsung ketik rfc atau rfce dan enter

// ini contoh menggunakan rfc
import React, { useState } from "react";
// import MappingKuda from "./MappingKuda";

export default function DinarPage() {
 const kudaData = [
    { id: 1, nama: "Gold Ship", gambar: "https://media.gametora.com/umamusume/characters/profile/1007.png", nomor: 89, status: "Resting", stamina: 100 },
    { id: 2, nama: "Mejiro McQueen", gambar: "https://media.gametora.com/umamusume/characters/profile/1013.png", nomor: 99, status: "Resting", stamina: 100 },
    { id: 3, nama: "Vodka", gambar: "https://media.gametora.com/umamusume/characters/profile/1008.png", nomor: 29, status: "Training", stamina: 80 },
    { id: 4, nama: "Gold City", gambar: "https://media.gametora.com/umamusume/characters/profile/1040.png", nomor: 69, status: "Training", stamina: 90 },
    { id: 5, nama: "Sweep Tosho", gambar: "https://media.gametora.com/umamusume/characters/profile/1044.png", nomor: 96, status: "Resting", stamina: 70 },
    { id: 6, nama: "Yayoi Akikawa", gambar: "https://media.gametora.com/umamusume/characters/profile/9002.png", nomor: 12, status: "Training", stamina: 60 },
    { id: 7, nama: "Daiwa Scarlet", gambar: "https://media.gametora.com/umamusume/characters/profile/1009.png", nomor: 1, status: "Resting", stamina: 50 },
    { id: 8, nama: "Biwa Hayahide", gambar: "https://media.gametora.com/umamusume/characters/profile/1023.png", nomor: 10, status: "Training", stamina: 40 },
    { id: 9, nama: "Little Cocon", gambar: "https://media.gametora.com/umamusume/characters/profile/2003.png", nomor: 37, status: "Resting", stamina: 30 },
  ];

  const [selectedKuda, setSelectedKuda] = useState<Kuda | null>(null);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("Catatan Kuda");

  interface Kuda {
    id: number;
    nama: string;
    gambar: string;
    nomor: number;
    status: string;
    stamina: number;
  }

  const handleCardClick = (kuda: Kuda) => {
    setSelectedKuda(kuda);
  };
  // Function to toggle status between 'Training' and 'Resting'
  const toggleStatus = (kuda: Kuda) => {
    const newStatus = kuda.status === "Resting" ? "Training" : "Resting";
    setSelectedKuda({ ...kuda, status: newStatus });
  };

  const handleNavigate = () => {
    if (number === 0) {
      console.log("Navigasi ke Rest Page");
    } else if (number === 1) {
      console.log("Navigasi ke Training Page");
    } else {
      console.log("Navigasi ke Dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Umamusume Kuda Dashboard</h1>
      
      {selectedKuda && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800">{selectedKuda.nama}</h2>
          <p className="text-lg text-gray-600">Nomor: {selectedKuda.nomor}</p>
          <p className="text-lg text-green-600">Status: {selectedKuda.status}</p>
          <p className={selectedKuda.stamina > 50 ? "text-lg text-yellow-600" : "text-lg text-red-600"}>Stamina: {selectedKuda.stamina}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => toggleStatus(selectedKuda)}
          >
            {selectedKuda.status === "Resting" ? "Start Training" : "Rest Now"}
          </button>
          <div className="mt-4">
            <p className="text-lg">Catatan: {text}</p>
            <input
              className="border p-2 mt-2 w-full"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-4 mb-6">
        {selectedKuda && (
          <div>
            <h3 className="text-xl">Number Control</h3>
            <p className="text-lg">Number: {number}</p>
            <p className={number > 5 ? "text-lg text-green-600" : "text-lg text-orange-600"}>Status Number: {number > 5 ? "High" : "Low"}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={() => setNumber(number + 1)}>Tambah</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" disabled={number === 0} onClick={() => setNumber(0)}>Reset</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={handleNavigate}>Navigate</button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {kudaData.map((kuda) => (
          <div
            key={kuda.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleCardClick(kuda)}
          >
            <img src={kuda.gambar} alt={kuda.nama} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-medium mt-2">{kuda.nama}</h3>
            <p className="text-sm text-gray-500">Nomor: {kuda.nomor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}