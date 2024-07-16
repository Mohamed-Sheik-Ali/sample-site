import React from 'react'
import { testimonials } from '../Constants'

const Testimonial = () => {
    const { title, list } = testimonials;
    const addSpace = (text) => {
        return ` - ${text}`
    }
  return (
      <section>
          <h4 className='font-bold text-[20px]'>{title}</h4>
          <div>
              {
                  list.map((item, index) => (
                      <div key={index} className='space-y-4 mt-4'>
                          <hr />
                          <div className='flex flex-wrap space-x-2'>
                              <p className='text-[#555555]'>{item.comment}</p>
                              <p className='text-[#FF0000]'>{addSpace(item.name)}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
          
    </section>
  )
}

export default Testimonial