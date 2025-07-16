import React from 'react'

export default function Service() {

const services = [
    {
        title: "Full Stack WebDev",
        description: "We’ll help you develop your website from scratch, front end, back end and even set up server. We can do it all.",
        warna: "text-[#128900]",
    },
    {
        title: "Mobile App",
        description: "Whether it’s Android or iOS our professional team of mobile developer can help you make mobile app that’s easy to use.",
        warna: "text-[#004F6C]",
    },
    {
        title: "Trouble Shooting",
        description: "Having trouble with your app? Don’t call Ghostbuster. Call our Bugbuster team instead. We can help you fix it in no time.",
        warna: "text-[#6C4E00]",
    },
];

  return (
    <div className='flex flex-col items-center min-h-screen gap-2'>
        <p className='text-[20px]'>what we do</p>
        <h1 className='text-2xl text-[36px] font-bold text-[#005CB2]'>Our Services</h1>
        <div className='flex flex-row items-start justify-start gap-30 w-full p-9'>
            {services.map((service) => (
                <ServiceCard title={service.title} warna={service.warna} description={service.description} />
            ))}
        </div>

    </div>
  )
}

function ServiceCard(props: any) {
    return (
        <div className='w-[300px] flex flex-col justify-center items-center gap-4 p-4'>
            <h1 className={`text-lg font-bold text-[22px] ${props.warna}`}>{props.title}</h1>
            <p className='w-full text-justify text-[20px]'>{props.description}</p>
        </div>
    )
}
