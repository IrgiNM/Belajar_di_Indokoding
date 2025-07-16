// install extension ES7 React/Redux/GraphQL/React-Native snippets di VSCode
// extension ini menyediakan snippet untuk membuat komponen React dengan cepat
// cara pemakaian: ketika pertama kali buka halaman, bisa langsung ketik rfc atau rfce dan enter

// ini contoh menggunakan rfc
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExamplePage() {
  // abaikan ini
  const navigate = useNavigate();

  const ListPage: Array<{ title: string; link: string }> = [
    {
      title: "Contoh UseState",
      link: "/ExampleUseState",
    },
    {
      title: "Contoh UseEffect",
      link: "/ExampleUseEffect",
    },
    {
      title: "Contoh Conditional",
      link: "/ExampleConditional",
    },
    {
      title: "Contoh If Else",
      link: "/ExampleIfElse",
    },
    {
      title: "Contoh Mapping",
      link: "/ExampleMapping",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1 className="text-3xl text-red-500">Contoh Page</h1>
        <p>This is an example page</p>

        <div className="flex flex-col items-center justify-center gap-3">
          {ListPage.map((item, index) => (
            <button
              key={index}
              className="bg-green-500 p-3 text-white"
              onClick={() => {
                navigate(`${item.link}`);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
