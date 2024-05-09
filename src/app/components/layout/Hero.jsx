import Right from "../icons/Right";


export default function Hero() {
  return (
    <section className="hero mt-4">

        <div className="py-12" >
        <h1 className="text-4xl font-semibold">
            Everything <br /> is better with <br /> a&nbsp;<span className="text-primary">
              pizza!
             </span>
            </h1>
<p className="my-6 text-gray-500">
    pizza is the missing piece that makes everyday complete,
     a simple yet delicous joy in life 
     </p>
 <div className="flex gap-4">
        <button 
        className="bg-primary items-center flex gap-2 text-white px-8 py-2 rounded-full uppercase text-sm "> 
            Order now
            <Right/>
        </button>
        <button className="flex gap-2 py-2 text-gray-600 font-semibold  ">
            Learn more
            <Right/>
        </button>

     </div>
        </div>
      
<div className="relative w-[300px] left-[30%]">
<img src={'/pizza.png'} layout={'fill'} objectFit={'contain'}
 alt={'pizza'} />
 </div>
    </section>
  )
}
