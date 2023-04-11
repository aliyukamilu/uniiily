import React from 'react';
import './index.css'
import { Footer, Schools } from './components/index'

function App() {
  return (
    <section>
      <section className="bg-[#9900EF] text-white flex flex-col items-center justify-center min-h-screen" id='home'>
        <img src={require("./assets/img/logo.png")} alt="" />

        <div className='flex justify-center'>
          <p className='text-center text-xl w-[60%] mt-3 text-[#DEC99C]'>Say hello to the ultimate campus connection: our app helps universities create student communities where support,
            guidance, and success thrive. Join the movement today and connect with your peers like never before!</p>
        </div>


        <div className='flex justify-center'>

          <div className='flex items-center gap-3 mt-10'>
            <button className='buttons'>Download android</button>
            <button className='buttons'>Download iOS</button>
          </div>

        </div>

        <Footer />

      </section>


      <section className="bg-[#9900EF] text-white flex flex-col items-center justify-center min-h-screen">
        <Schools />
      </section>
    </section>


  );
}

export default App;
