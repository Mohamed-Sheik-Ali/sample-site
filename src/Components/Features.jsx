import React from 'react'
import { features } from '../Constants';

const Features = () => {
    // const { titles, list } = features;
  return (
      <section className='my-3'>
          {
              features.map((item, index) => (
                  <div className='space-y-3 mt-2' key={index}>
                      <h5 className='font-bold text-[20px]'>{item.title}</h5>
                      <p className='text-[#555555]'>{item.description}</p>
                      <ol className='list-decimal space-y-1 text-[#555555] pl-5'>
                          {
                              item.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))
                          }
                      </ol>
                      <hr />
                  </div>
              ))
          }
    </section>
  )
}

export default Features;