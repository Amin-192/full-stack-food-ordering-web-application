import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

export default function HomeMenu() {
  return (
    <section>
        <div className='absolute left-0 right-0 w-full justify-start 
        '>
            
            <div className=' absolute left-0 -top-24 -z-10 text-left'>
          <img src={'/sallad1.png'} layout={'fill'} ObjectFit={'contain'} alt={'sallad'}
          width={109} height={189}
          />
            </div>
            
            <div className='absolute right-0 -top-36 text-right'>
          <img src={'/sallad2.png'}  alt={'sallad'}  width={107} height={195} />
            </div>
            
        </div>
    <div className='text-center mb-4'>
    
     <SectionHeaders 
     subHeader={'Check out'} 
     mainHeader={'Menu'}/>
</div>
<div className='grid grid-cols-3 gap-4'>
<MenuItem/>
<MenuItem/>
<MenuItem/>

</div>
    </section>
  )
}
