import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center fixed bottom-0 pb-3 bg-[#9900EF] w-full'>
      <div className='flex gap-10'>
        <a href='#home' className='navis'>Home</a>
        <a href='#school' className='navis'>Communities</a>
        <button className='navis'>Contact</button>
        <buton className='navis'>简体中文</buton>
      </div>
    </div>
  )
}

export default Footer