import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExampleUseEffect() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
    // console.log akan muncul setiap kali nilai count ada perubahan
  }, [count]);

  // contoh ketika useEffect yg memiliki dependensi kosong
  // ini akan dijalankan hanya sekali ketika komponen pertama kali dimount
  useEffect(() => {
    console.log("Muncul hanya sekali ketika komponen dimount");
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1 className="text-3xl text-blue-500">Example UseEffect</h1>

        <button
          className="bg-green-500 p-3 text-white"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>

        <button
          className="bg-blue-500 p-3 text-white"
          onClick={() => navigate("/ExampleConditional")}
        >
          lanjut ke penjelasan conditional
        </button>

        <button
          className="bg-blue-500 p-3 text-white"
          onClick={() => navigate("/irgi")}
        >
          navigate ke irgi
        </button>
      </div>
    </>
  );
}
