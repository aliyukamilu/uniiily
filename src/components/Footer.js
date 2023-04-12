import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [scroll, setScroll] = useState('navis')

  useEffect(() => {
    const sections = document.querySelectorAll(".mainSection");
    const navLi = document.querySelectorAll(".navis");

    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.href.includes(current)) {
          li.classList.add("active");
        }
      });
    };
  }, []);


  return (
    <div className='flex justify-center fixed bottom-0 pb-3 bg-[#9900EF] w-full'>
      <div className='flex gap-10'>
        <a href='#home' className='navis active'>Home</a>
        <a href='#school' className='navis'>Communities</a>
        <a href='#contact' className='navis'>Contact</a>
        <a href='#chinese' className='navis'>简体中文</a>
      </div>
    </div>
  )
}

export default Footer