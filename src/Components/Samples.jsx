import React from 'react'
import { projectPhotos, projectVideos } from '../Constants'
import { ImageFrame } from './Weapons';

const Samples = () => {
    const { title, images } = projectPhotos;
    const { title: title2, videos } = projectVideos;
  return (
      <section className='my-7'>
          <div className=''>
              <h4 className='font-bold text-[20px] mb-4'>{title}</h4>
                  <hr />
              <div className='flex mt-2 flex-wrap align-center'>
                {
                    images.map((item, index) => (
                        <div className='w-[350px]' key={index}>
                            <ImageFrame img={item}/>
                        </div>
                    ))
                  }
              </div>
          </div>


          <div>
              <h4 className='font-bold text-[20px] mb-4'>{title2}</h4>
                  <hr />
              <div className='flex mt-2 flex-wrap align-center'>
                {
                    videos.map((item, index) => (
                        <div className='border-[10px] border-double mr-3 mb-4 border-[#616161] w-[350px]' key={index}>
                            <video width={"350px"} controls>
                                <source src={item} type="video/mp4" />
                            </video>
                            {/* <img className='w-[150px]' src={item} key={index} alt="clients" /> */}
                        </div>
                    ))
                  }
              </div>
          </div>
    </section>
  )
}

export default Samples