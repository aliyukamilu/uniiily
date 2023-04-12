import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const schoolsObjects = [
  {
    name: "Zhejiang University of Science and Technology",
    location: "Hangzhou, China.",
    img: `./zhejiang.png`
  },
  {
    name: "Zhejiang University",
    location: "Hangzhou, China.",
    img: `../zhejiang2.png`
  },
  {
    name: "Nile",
    location: "Abuja, Nigeria.",
    img: `../nile.png`
  },
  {
    name: "Skyline University of Nigeria",
    location: "Kano, Nigeria.",
    img: `../skyline.png`
  },
  {
    name: "Harvard University",
    location: "Hangzhou, China.",
    img: `../harvard.png`
  }
]



const Schools = () => {
  return (
    <section className='mt-5'>

      <div className='flex justify-center mb-4'>
        <img src={require('../assets/img/logo.png')} />
      </div>

      <section className='h-[70vh] overflow-y-auto pb-24 px-5'>

        {schoolsObjects.map((schoolsObject, i) => (
          <div className='bg-white rounded-lg px-5 py-3 mb-4 w-[100%]'>
            <div className='flex justify-between items-center gap-10'>

              <div className='flex items-center gap-3'>
                <img src={schoolsObject.img} alt="" className='w-[70px] h-[70px]' />
                <div>
                  <h1 className='text-[#333333]'>{schoolsObject.name}</h1>
                  <p className='text-[#828282] text-sm'>{schoolsObject.location}</p>
                </div>
              </div>

              <div>
                <FaChevronRight className='text-[#82B2B2]' />
              </div>
            </div>


          </div>
        ))}

      </section>

    </section>
  )
}

export default Schools