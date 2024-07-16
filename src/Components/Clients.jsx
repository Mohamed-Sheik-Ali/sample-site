import React from 'react'
// import { clients } from '../Constants'
import { clientsSection,commercialSectorSection } from '../Constants'

const Clients = () => {
    const { title:title1, images } = clientsSection;
    const { title: title2, images: csImages } = commercialSectorSection;
    const ImageList = ({list,title}) => {
        return (
            <div className='my-6'>
                <h4 className='font-bold text-[20px]'>{title}</h4>
                <div className='flex mt-2 flex-wrap align-center'>
                {
                    list.map((item, index) => (
                        <div className='w-1/2' key={index}>
                            <img className='w-[150px]' src={item} key={index} alt="clients" />
                            <hr />
                        </div>
                    ))
                }
            </div>
            </div>
        )
    }
  return (
      <div>
          <ImageList title={title1} list={images} />
          <ImageList title={title2} list={csImages} />
    </div>
  )
}

export default Clients