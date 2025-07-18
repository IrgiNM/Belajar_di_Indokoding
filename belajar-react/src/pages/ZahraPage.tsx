import React, { useEffect, useState } from 'react'


const services = [
    {
        id: 1,
        title: "Full Stack WebDev",
        description: "We’ll help you develop your website from scratch, front end, back end and even set up server. We can do it all.",
        warna: "text-[#128900]",
        line: false
    },
    {
        id: 2,
        title: "Mobile App",
        description: "Whether it’s Android or iOS our professional team of mobile developer can help you make mobile app that’s easy to use.",
        warna: "text-[#004F6C]",
        line: true
    },
    {
        id: 3,
        title: "Trouble Shooting",
        description: "Having trouble with your app? Don’t call Ghostbuster. Call our Bugbuster team instead. We can help you fix it in no time.",
        warna: "text-[#6C4E00]",
        line: false
    },
];

export default function Service() {

    const [isAktif, setAktif] = useState("")

    useEffect(() => {

        if (isAktif === "mobileApp") {
            console.log("Mobile App is active");
        } else if (isAktif === "webDev") {
            console.log("Web Development is active");
        }
        else if (isAktif === "troubleShoot") {
            console.log("Trouble Shooting is active");
        } else {
            console.log("No service is active");
        }

        console.log("twst");

    }, [isAktif]);

    const [color, setColor] = useState("bg-red-200")

    const [isDelivery, setIsDelivery] = useState(false)


  return (
    <>
    <div className='flex flex-col items-center min-h-screen gap-2'>
        <p className='text-[20px]'>what we do</p>
        <h1 className='text-2xl text-[36px] font-bold text-[#005CB2]'>Our Services</h1>
        <div className='flex flex-row items-start justify-start gap-15 w-full p-9'>
            {services.map((service) => (
                <>
                {/* {service.line && (<div className='w-[1px] h-[230px] bg-blue-500'></div>)} */}
                {service.id === 2 && <div className='w-0.5 h-[260px] bg-blue-300'></div>}
                <div className={`${isAktif === "mobileApp" && service.id === 2 
                    ? "animate-spin" 
                    : isAktif === "webDev" && service.id === 1 
                    ? "animate-pulse" 
                    : isAktif === "troubleShoot" && service.id === 3 
                    ? "animate-bounce" 
                    : ""} flex flex-col items-center justify-center gap-4 p-4`}>
                <ServiceCard id={service.id} title={service.title} warna={service.warna} description={service.description} />
                </div>
                {service.id === 2 && <div className='w-0.5 h-[260px] bg-blue-300'></div>}
                {/* {service.line && (<div className='w-[1px] h-[230px] bg-blue-500'></div>)} */}
                </>
            ))}
        </div>

    <button className={`rounded-sm px-1 ${services[1].warna}`} onClick={() => setAktif("mobileApp")}>mobile app</button>
    <button onClick={() => setAktif("webDev")}>web dev</button>
    <button onClick={() => setAktif("troubleShoot")}>trouble shoot</button>
    <button onClick={() => setAktif("")}>reset</button>
    

    <div className={`mt-10 w-35 h-35 rounded-full ${color}`}></div>

    <button className={`rounded-sm px-1 ${color === "bg-blue-500" && "text-white bg-blue-500 border-1 border-blue-800"}`} onClick={() => setColor("bg-blue-500")} >blue</button>
    <button className={`rounded-sm px-1 ${color === "bg-yellow-400" && "bg-yellow-400 border-1 border-yellow-800"}`} onClick={() => setColor("bg-yellow-400")}>yellow</button>
    <button className={`rounded-sm px-1 ${color === "bg-emerald-400" && "bg-emerald-400 border-1 border-emerald-800"}`} onClick={() => setColor("bg-emerald-400")}>emerald</button>
    <button className={`rounded-sm px-1 ${color === "bg-black" && "text-white bg-black"}`} onClick={() => setColor("bg-black")}>black</button>
    <button className={`rounded-sm px-1`} onClick={() => setColor("bg-red-200")}>reset</button>

    <div className='flex flex-row items-center gap-1 mt-5 bg-orange-500 p-0.5 rounded-full'>
        <button className={`rounded-full py-1 px-20 ${isDelivery ? "text-orange-500 bg-white" : "text-white bg-orange-500"}`} onClick={() => setIsDelivery(true)}>Delivery</button>
        <button className={`rounded-full py-1 px-20 ${isDelivery ? "text-white bg-orange-500" : "text-orange-500 bg-white"}`} onClick={() => setIsDelivery(false)}>Pick Up</button>
    </div>
        <button onClick={() => setAktif("mobileApp")}>mobile app</button>
        <button onClick={() => setAktif("webDev")}>web dev</button>
        <button onClick={() => setAktif("troubleShoot")}>trouble shoot</button>
        <button onClick={() => setAktif("")}>reset</button>
    </div>
    </>
  ) 
}

function ServiceCard(props: any) {
    console.log(props.id);
    return (
        <>
            <div className={`w-72 flex flex-col justify-center items-center gap-4 p-4  `}>
                <h1 className={`text-lg font-bold text-[22px] ${props.warna}`}>{props.title}</h1>
                <p className='w-full text-justify text-[20px]'>{props.description}</p>
            </div>
            
        </>
    )
}
