import React from 'react'

export default function TantriPage() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">TantriApp</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-white hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/Our Work" className="text-white hover:underline">Our Work</Link>
          </li>
          <li>
            <Link to="/About Us" className="text-white hover:underline">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-white hover:underline">Contact</Link>
          </li>
          <li>
            <Link to="/Careers" className="text-white hover:underline">Careers</Link>
          </li>
          <li>
            <Link to="/Book Online" className="text-white hover:underline">Book Online</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
