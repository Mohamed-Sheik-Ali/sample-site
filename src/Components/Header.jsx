import React from 'react'
import { headerConstants } from '../Constants'

const Header = () => {
    const { contacts,companyName } = headerConstants

  return (
      <header className='sticky bg-white top-0 z-[2] shadow-bottom flex justify-center align-center'>
          <div className='p-4 '>
              <h1 className='text-[30px] font-bold'>{companyName}</h1>
              <>
                  {
                      contacts.map((item, index) => (
                          <div className='font-bold text-[20px] space-x-2' key={index}>
                              <span >{item.name}</span>
                              <span>&#x1F449;</span>
                              <a href={item.link} rel='noreferrer' target='_blank'>{item.value}</a>
                          </div>
                      ))
                  }
              </>
              </div>
          </header>
  )
}

export default Header