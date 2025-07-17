import React from 'react'

export default function TantriPage() {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-black text-xl font-bold">TantriApp</h1>  */}
        <ul className="flex gap-10">
          <li>
            <a href="/" className="text-purple-900 hvover:bg-blue-100 px-2 py-1 rounded-4xl hover:font-bold  ">Home</a>
          </li>
          <li>
            <a href="/Our Work" className="text-emerald-700 hover:bg-blue-100 px-2 py-1 rounded-4xl hover:font-bold">Our Work</a>
          </li>
          <li>
            <a href="/About Us" className="text-cyan-900 hover:bg-blue-100 px-2 py-1 rounded-4xl hover:font-bold">About Us</a>
          </li>
          <li>
            <a href="/Contact" className="text-amber-900 hover:bg-blue-100 px-2 py-1 rounded-4xl  hover:font-bold">Contact</a>
          </li>
          <li>
            <a href="/Careers" className="text-cyan-900 hover:bg-blue-100 px-2 py-1 rounded-4xl  hover:font-bold">Careers</a>
          </li>
          <li>
            <a href="/Book Online" className="text-purple-900 hover:bg-blue-100 px-2 py-1 rounded-4xl  hover:font-bold">Book Online</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
