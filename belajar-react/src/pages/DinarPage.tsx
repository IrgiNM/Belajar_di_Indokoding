import React, { useState, useEffect } from "react";

export default function DinarPage() {
  // State untuk mengelola nama kuda, status pelatihan, dan kecepatan
  const [horseName, setHorseName] = useState(""); // String: nama kuda
  const [isTraining, setIsTraining] = useState(false); // Boolean: status pelatihan
  const [speed, setSpeed] = useState(50); // Number: statistik kecepatan (0-100)

  // useEffect: Log saat halaman dimuat
  useEffect(() => {
    console.log(`Dashboard untuk ${horseName} dimuat!`);
  }, []);

  // useEffect: Log saat horseName atau speed berubah
  useEffect(() => {
    console.log(`Nama kuda: ${horseName}, Kecepatan: ${speed}`);
  }, [horseName, speed]);

  // If-Else: Log berdasarkan kecepatan
  if (speed <= 30) {
    console.log(`${horseName} sedang sakit!`);
  } else if (speed > 30) {
    console.log(`${horseName} perlu lebih banyak latihan!`);
  } else if (speed >= 40 && speed <= 70) {
    console.log(`${horseName} dalam kondisi baik!`);
  } else {
    console.log(`${horseName} adalah pelari top!`);
  }

  // Fungsi untuk reset statistik
  const handleReset = () => {
    setHorseName("Special Week");
    setSpeed(50);
    setIsTraining(false);
    console.log("Statistik kuda direset!");
  };

  // Fungsi untuk boost kecepatan (contoh aksi tambahan)
  const handleBoost = () => {
    if (speed < 100) {
      setSpeed(speed + 10);
      console.log(`${horseName} mendapatkan boost kecepatan!`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-blue-100 p-6">
        <h1 className="text-4xl font-bold text-indigo-600">Uma Musume Dashboard</h1>

        {/* Bagian Conditional Rendering */}
        <div className="flex flex-col items-center gap-3 border p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl">
            {isTraining ? `Melatih ${horseName}` : `${horseName} sedang istirahat`}
          </h2>
          <p className={isTraining ? "text-blue-500" : "text-gray-500"}>
            Status: {isTraining ? "Sedang Latihan" : "Tidak Latihan"}
          </p>
          {speed > 50 && (
            <p className="text-green-500 font-semibold">Badge: Pelari Berbakat!</p>
          )}
          <p>Kecepatan: {speed}/100</p>
        </div>

        {/* Bagian Input dan State */}
        <div className="flex flex-col items-center gap-3 border p-13 rounded-lg shadow-md bg-white">
          <p className="font-semibold text-lg">Kelola Kuda</p>
          <input
            className="border p-2 rounded w-64"
            type="text"
            placeholder="Masukkan nama kuda"
            value={horseName}
            onChange={(e) => setHorseName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-64"
            type="number"
            placeholder="Kecepatan (0-100)"
            value={speed}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0 && value <= 100) setSpeed(value); // Validasi rentang
            }}
          />
          <button
            className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600"
            onClick={() => setIsTraining(!isTraining)}
          >
            {isTraining ? "Selesai Latihan" : "Mulai Latihan"}
          </button>
        </div>

        {/* Aksi (Gantikan Navigasi) */}
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
            onClick={handleBoost}
          >
            Boost Kecepatan (+10)
          </button>
          <button
            className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600"
            onClick={handleReset}
          >
            Reset Statistik
          </button>
        </div>
      </div>
    </>
  );
}