import React from 'react'
import { weapons } from '../Constants'

const Weapons = () => {
    const {title,list}=weapons
  return (
      <section>
          <h4 className='font-bold text-[20px]'>{title}</h4>
          <div className='text-[#555555]'>
              {
                  list.map((item, index) => (
                      <div className='my-6 space-y-4' key={index}>
                          <hr />
                          <p>{item.description}</p>
                          <div className='flex flex-wrap'>
                              {
                                  item.images.map((img, index) => (
                                          <ImageFrame key={index} img={img}/>
                                  ))
                              }
                          </div>
                      </div>
                  ))
              }
          </div>
    </section>
  )
}

export const ImageFrame=({img}) => {
    return (
        <div className='border-[10px] border-double mr-3 mb-4 border-[#616161]'>
            <img src={img} alt="weapons" />
        </div>
    )
}

export default Weapons