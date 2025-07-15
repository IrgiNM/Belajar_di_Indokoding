import React, { useState } from "react";

export default function ExampleIfElse() {
  const [number, setNumber] = useState(0);

  // Contoh penggunaan if-else
  if (number === 0) {
    console.log("Ayam");
  } else if (number === 1) {
    console.log("Kucing");
  } else if (number === 2) {
    console.log("Bebek");
  } else {
    console.log("Tidak ada yang cocok");
  }

  // Contoh penggunaan if-else untuk navigasi
  const handleNavigate = () => {
    if (number === 0) {
      window.location.href = "/ExampleUseState";
    } else if (number === 1) {
      window.location.href = "/ExampleUseEffect";
    } else {
      window.location.href = "/ExampleConditional";
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1 className="text-3xl text-blue-500">Example If Else</h1>
        <h1 className="text-3xl">{number}</h1>

        <button
          className="bg-green-500 p-3 text-white"
          onClick={() => setNumber(number + 1)}
        >
          Tambah
        </button>
        <button
          className="bg-green-500 p-3 text-white"
          disabled={number === 0}
          onClick={() => setNumber(0)}
        >
          Reset
        </button>

        <button className="bg-blue-500 p-3 text-white" onClick={handleNavigate}>
          navigate
        </button>
        <div>
          <p>0 akan mengarahkan ke ExampleUseState</p>
          <p>1 akan mengarahkan ke ExampleUseEffect</p>
          <p>selain 0 dan 1 akan mengarahkan ke ExampleConditional</p>
        </div>
      </div>
    </>
  );
}
