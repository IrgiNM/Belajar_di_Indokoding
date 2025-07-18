import React, { useEffect, useState } from "react";

export default function TantriPage() {
  const [uangJajan, setUangJajan] = useState(10000);
  const [moodHariIni, setMoodHariIni] = useState("Semangat!");
  const [fokusBelajar, setFokusBelajar] = useState(false);
  const [color, setColor] = useState("white")
  const [isDelivery, setIsDelivery] = useState(false);

  useEffect (() => {
    alert ("Semangat")

  }, [] )

  return (

    <div className="flex flex-col">
    <h1 className="font-bold text-center text-4xl  ">Catatan Harian Tantri</h1>
    <div className="p-5 flex flex-row gap-7 items-center">
      

      <div className="border rounded-md p-4 w-100 max-w-sm">
        <p>Uang Jajan Hari Ini: Rp {uangJajan}</p>
        <button onClick={() => setUangJajan(uangJajan + 1000)}>+1000</button>
        <button onClick={() => setUangJajan(uangJajan - 1000)}>-1000</button>
        <button onClick={() => setUangJajan(1000)}>Reset</button>
      </div>

      <div className="border p-4 w-full max-w-sm">
        <p>Mood Hari Ini: {moodHariIni}</p>
        <input
          type="text"
          value={moodHariIni}
          onChange={(e) => setMoodHariIni(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="border p-4 w-full max-w-sm">
        <p>Status Belajar: {fokusBelajar ? "Fokus" : "Tidak Fokus"}</p>
        <button onClick={() => setFokusBelajar(!fokusBelajar)}>
          Ubah Status
        </button>
      </div>
    </div>

    <div className="flex flex-col items-center ">
    <div className={`w-50 h-50 rounded-full mb-5 bg-${color}-500 `}/>
    
    <button className={`rounded-sm  ${color === "green" && "bg-green-500"}`} onClick={() => setColor("green")}>Green</button>
    <button className={`${color === "red" && "bg-red-500"}`}  onClick={() => setColor("red")}>Red</button>
    <button className={`${color === "blue" && "bg-blue-500"}`} onClick={() => setColor("blue")}>Black</button>
    <button className={`${color === "yellow" && "bg-yellow-500"}`} onClick={() => setColor("yellow")}>Yellow</button>
    <button onClick={() => setColor("white")}>Reset</button>
    {/* <div className={`w-10 h-10 bg-gray-500 `}/> */}
    </div> 


    <div className="flex justify-evenly border border-amber-500 w-100 items-center  rounded-full bg-amber-500 ">
      <button className={` rounded-full px-18 py-1 ${isDelivery ? "bg-white text-amber-500" : "bg-amber-500 text-white"}`}   onClick={() => setIsDelivery(true)}>Delivery</button>
      <button className= {` rounded-full px-18 py-1 ${isDelivery === false ? "bg-white text-amber-500" : "bg-amber-500 text-white"}`} onClick={() => setIsDelivery(false)}>Pick up</button>

    </div>
    <div className=" flex flex-row mb-10">
     <div className={`w-50 h-50 rounded-full mb-5 ${isDelivery && "bg-amber-500"} border `}/>
     <p>{isDelivery ? "True" : "False"}</p>
     <div className={`w-50 h-50 rounded-full mb-5 ${isDelivery ? "bg-cyan-700" : "bg-blue-600"} border `}/>
    </div>
    </div>
    
  );
}



