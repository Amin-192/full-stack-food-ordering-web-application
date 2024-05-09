import React from 'react'

export default function SectionHeaders({subHeader,mainHeader}) {
  return (
    <div>
       <h3 className='uppercase text-gray-500 font-semibold leading-4'>
       {subHeader} </h3>
      <h2 className='uppercase font-semibold text-4xl
      text-primary italic ' > {mainHeader} </h2>
    </div>
  )
}

