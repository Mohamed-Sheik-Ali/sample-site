import React from 'react'
import { differences } from '../Constants'

const Differences = () => {

    const CompSwitch = ({type, content}) => {
        switch (type) {
            case "title":
                return <h4 className={"text-[#FF0000] font-bold text-[20px]"}>{content}</h4>
            case "image":
                return <img className='w-[200px] h-[200px]' src={content} alt='comparison' />
            default:
                return <p>{content}</p>
        }
    }

  return (
      <section>
          {
              differences.map((item, index) => (
                  <div className='my-3 space-y-3'>
                      <div key={index} className='w-full flex'>
                      <div className='w-1/2'>
                      <CompSwitch type={item.type} content={item.option1} />
                      </div>
                      <div className='w-1/2'>
                      <CompSwitch type={item.type} content={item.option2} />
                      </div>
                  </div>
                      <hr />
                  </div>
              ))
          }
    </section>
  )
}

export default Differences;