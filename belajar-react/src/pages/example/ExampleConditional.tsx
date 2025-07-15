import React, { useState } from "react";

export default function ExampleConditional() {
  // Contoh penggunaan conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1 className="text-3xl text-red-500">
          {isLoggedIn ? "true" : "false"}
        </h1>
        <div className="flex flex-col items-center gap-3 border p-5">
          <h1>Example Ternary Operator</h1>
          <div>
            <h1>- digunakan untuk mengubah text :</h1>
            {isLoggedIn ? (
              <p>Selamat datang, pengguna!</p>
            ) : (
              <p>Silakan masuk untuk melanjutkan.</p>
            )}
          </div>
          <div>
            <h1 className={isLoggedIn ? "text-green-500" : "text-red-500"}>
              digunakan untuk mengubah css
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border p-5">
          <h1>Example Logical AND Operator</h1>
          <div>
            <h1>- digunakan untuk menampilkan text :</h1>
            {isLoggedIn && <p>Anda telah masuk ke akun Anda.</p>}
          </div>
        </div>

        <div>
          <button
            className="bg-green-500 p-3 text-white rounded-2xl"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "ubah jadi false" : "ubah jadi true"}
          </button>
        </div>

        <button
          className="bg-blue-500 p-3 text-white rounded-2xl"
          onClick={() => {
            window.location.href = "/ExampleIfElse";
          }}
        >
          lanjut ke penjelasan if else
        </button>
      </div>
    </>
  );
}
