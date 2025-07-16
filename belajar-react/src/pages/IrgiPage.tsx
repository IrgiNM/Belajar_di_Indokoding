import { useEffect, useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import golang from '../assets/golang.png'
import turu from '../assets/turu.png'
import postgre from '../assets/postgre.png'
import pythonb from '../assets/pythonb.png'
import pythonk from '../assets/pythonk.png'
import consule from '../assets/consule.png'

export default function IrgiPage() {
    const [bg, setBg] = useState("Home");
    const style : string = "py-2 px-5 rounded-full hover:font-bold";
    const [gambar, setGambar] = useState(turu);

    useEffect(() => {
    console.log(`Ini adalah halaman ${bg}`);
    }, [bg]);

    useEffect(() => {
    console.log("Ini adalah halaman irgi");
    }, []);

    useEffect(() => {
        console.log(`Ini adalah halaman ${bg}`);
      
        if(bg === "Home") {
            setGambar(turu);
        } else if(bg === "Our Work") {
            setGambar(postgre);
        } else if(bg === "About Us") {
            setGambar(pythonb);
        } else if(bg === "Contact") {
            setGambar(pythonk);
        } else if(bg === "Career") {
            setGambar(golang);
        } else if(bg === "Book Online") {
            setGambar(consule);
        }
      }, [bg]);
      

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center pt-10'>
        <div className='w-full flex flex-row items-start pt-8 justify-center gap-10'>
        <PrimaryButton style={`text-[#4F006C] ${style} ${bg === "Home" && "bg-[#F0D4FF] font-bold"}`} label='Home' onClick={() => setBg("Home")}/>
        <PrimaryButton style={`text-[#128900] ${style} ${bg === "Our Work" && "bg-[#D4FFDB]  font-bold"}`} label='Our Work' onClick={() => setBg("Our Work")}/>
        <PrimaryButton style={`text-[#004C6C] ${style} ${bg === "About Us" && "font-bold bg-[#D4F6FF] "}`} label='About Us' onClick={() => setBg("About Us")}/>
        <PrimaryButton style={`text-[#6C4E00] ${style} ${bg === "Contact" && "font-bold bg-[#FEFFD4] "}`} label='Contact' onClick={() => setBg("Contact")}/>
        <PrimaryButton style={`text-[#004C6C] ${style} ${bg === "Career" && "font-bold bg-[#D4F6FF] "}`} label='Career' onClick={() => setBg("Career")}/>
        <PrimaryButton style={`text-[#4F006C] ${style} ${bg === "Book Online" && "font-bold bg-[#F0D4FF] "}`} label='Book Online' onClick={() => setBg("Book Online")}/>
        </div>
        <div className='h-[100px] bg-red-600'></div>
        <div className='w-full flex items-center justify-center'>
            <img className='h-[150px]' src={gambar} alt="gambar" />
        </div>
    </div>
    </>
  )
}
