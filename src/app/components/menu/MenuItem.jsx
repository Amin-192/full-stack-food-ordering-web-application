import React from 'react'

export default function MenuItem() {
  return (
    <div>
      <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white 
      transition-all hover:shadow-md hover:shadow-black/25 '>
        <div className='text-center'>
        <img src={'/pizza.png'} alt='pizza' className='max-h-auto max-h-24
        block mx-auto' />
        </div>
   
<h4 className='font-semibold my-3'>pepproni pizza</h4>
<p className='text-gray-500 text-sm '>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
     saepe corrupti modi
      labore.</p>
      <button className='mt-4 bg-primary text-white rounded-full px-8 py-2 
      cursor-pointer '>
add to cart $12
      </button>
</div>
    </div>
  )
}
