import React from 'react'
import { services } from '../Constants'

const Services = () => {
    const { titles, list } = services;
  return (
      <section className='space-y-3'>
          <div>
              {
                  titles.map((item, index) => (
                      <h4 className='text-[30px] font-[800]' key={index}>{item}</h4>
                  ))
              }
          </div>
          <div className='bg-[#2eca6a] h-[3px] w-1/6'></div>
          <ul className='list-disc pl-4 space-y-2 text-[#555555]'>
              {
                  list.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))
              }
          </ul>
          <hr />

    </section>
  )
}

export default Services