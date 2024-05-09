import Link from "next/link";
import Header from './components/layout/Header'
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import MenuItem from "./components/menu/MenuItem";
import SectionHeaders from "./components/layout/SectionHeaders";
export default function Home() {
  return (
   <>

 
  <Hero/>
  <HomeMenu/>
  <section className='text-center my-16' >
    <SectionHeaders 
    subHeader={'Our story'}
    mainHeader={'About us'}/>

<div className="max-w-2xl mx-auto text-center text-gray-500 mt-4 flex flex-col gap-4">
<p >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Accusantium ipsa, quod delectus earum nemo eos, facilis molestias 
voluptate suscipit, voluptates labore. Odit aspernatur tenetur fugit 
perferendis amet facilis praesentium in?.</p>
<p >
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Accusantium ipsa, quod delectus earum nemo eos, facilis molestias 
voluptate suscipit, voluptates labore. Odit aspernatur tenetur fugit 
perferendis amet facilis praesentium in?.</p>
   
</div>
   
  </section>

  <section className="text-center my-8">
    <SectionHeaders
    subHeader={'Don\'t hesitate'}
    mainHeader={'Contac us'}
    />
    <div className="mt-8">
    <a className="text-4xl mt-8 underline" 
    href="tel:+254741299053" >+254 741 299 053</a>
    
    </div>
    
  </section>

<footer className=" border-t p-8 ">

</footer>
   </>
  );
}
