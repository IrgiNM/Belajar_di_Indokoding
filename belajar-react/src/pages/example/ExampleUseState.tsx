// useState adalah salah satu hook yang digunakan untuk mengelola state dalam komponen fungsional di React.
// hook ini memungkinkan kita untuk menambahkan state lokal ke komponen fungsional

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseStateExample() {
  // contoh penggunaan useState dengan tipe data number
  const [number, setNumber] = useState(0);
  // gunakan setNumber untuk mengubah nilai number
  // contoh: setNumber(5) akan mengubah nilai number menjadi 5
  // (0) adalah nilai default

  // contoh penggunaan useState dengan tipe data string
  const [text, setText] = useState("Hello, World!");

  // contoh penggunaan useState dengan tipe data boolean
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1>useState</h1>
        <div className="flex flex-col items-center gap-3 border p-5">
          <p>contoh mengubah nilai number</p>
          <p>Number: {number}</p>
          <button
            className="bg-green-500 text-white p-3"
            onClick={() => setNumber(number + 1)}
          >
            Tambah
          </button>
          <button
            className="bg-red-500 text-white p-3"
            onClick={() => setNumber(number - 1)}
          >
            Kurang
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 border p-5">
          <p>contoh mengubah nilai string</p>
          <p>String: {text}</p>
          <input
            className="border p-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white p-3"
            onClick={() => setText("ayam")}
          >
            ubah jadi ayam
          </button>
          <button
            className="bg-red-500 text-white p-3"
            onClick={() => setText("kucing")}
          >
            ubah jadi kucing
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 border p-5">
          <p>contoh mengubah nilai boolean</p>
          <p className={isActive ? "text-green-500" : "text-red-500"}>
            {isActive ? "Aktif" : "Tidak Aktif"}
          </p>
          <button
            className="bg-green-500 text-white p-3"
            onClick={() => setIsActive(!isActive)}
          >
            Klik disini
          </button>
        </div>

        <div>
          <button
            className="bg-green-500 p-3 text-white"
            onClick={() => {
              navigate("/ExampleUseEffect");
            }}
          >
            lanjut ke penjelasan useEffect
          </button>
        </div>
      </div>
    </>
  );
}
