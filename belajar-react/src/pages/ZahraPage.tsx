import React from 'react'

export default function Service() {

const services = [
    {
        title: "Full Stack WebDev",
        description: "We’ll help you develop your website from scratch, front end, back end and even set up server. We can do it all."
    },
    {
        title: "Mobile App",
        description: "Whether it’s Android or iOS our professional team of mobile developer can help you make mobile app that’s easy to use."
    },
    {
        title: "Trouble Shooting",
        description: "Having trouble with your app? Don’t call Ghostbuster. Call our Bugbuster team instead. We can help you fix it in no time."
    },
];

  return (
    <div className='flex flex-col items-center min-h-screen gap-2'>
        <p>what we do</p>
        <h1 className='text-2xl text-[30px] font-bold text-[#005CB2]'>Our Services</h1>
        <div className='flex flex-row items-start justify-start gap-8 w-full max-w-4xl p-9'>
            {services.map((service) => (
                <ServiceCard title={service.title} description={service.description} />
            ))}
        </div>

    </div>
  )
}

function ServiceCard(props: any) {
    return (
        <div className='w-[300px] flex flex-col justify-center items-center gap-6 p-4'>
            <h1 className='text-lg font-semibold'>{props.title}</h1>
            <p className='w-full text-justify'>{props.description}</p>
        </div>
    )
}
