import React from 'react'
import { addresses } from '../Constants'

const Footer = () => {
  return (
      <section className='p-10 bg-[#f3f3f3]'>
          <div className='flex justify-between flex-wrap'>
              {
              addresses.map((item, index) => (
                  <div key={index} className='my-3 space-y-2 text-[18px]'>
                      <h4 className='font-bold text-[30px]'>{item.name}</h4>
                      <p>{item.address}</p>
                      <p>{item.city}</p>
                      <p>{item.state}</p>
                      <p>Mobile:<a href={`tel:${item.mobile}`} rel='noreferrer' target='_blank'>{item.mobile}</a></p>
                      <p>Whatsapp:<a href={`https://wa.me/${item.whatsapp}`} rel='noreferrer' target='_blank'>{item.whatsapp}</a></p>
                      <p>Email:{item.email}</p>
                  </div>))
          }
          </div>
    </section>
  )
}

export default Footer