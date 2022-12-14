import React from 'react'
import Image from 'next/image'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Presentation from '../components/pesentation/Presentation'

const Home = () => {
  return (
    <>
      <div className='bckg-image'>
        <div className='div-image'>
          <Image 
            src='/images/pngwing.png'
            width={100}
            height={100}
            alt='React.js icon'
          />

          <Image 
            src='/images/esri.png'
            width={100}
            height={100}
            alt='Esri icon'
          />

          <Image 
            src='/images/pgsql.png'
            width={100}
            height={141}
            alt='Postgresql icon'
          />
        </div>
      </div>
      <div className='container'>
        <div className='presentation'>
          <Presentation />
        </div>
        <div 
          className='about'
          id='about-section'>
          <About />
        </div>
        <div 
          className='contact'
          id='contact-section'>
          <Contact />
        </div>
      </div>
      <style jsx>{`
          .bckg-image {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
          }
          .div-image {
            display: flex;
            height: 480px;
            flex-direction: column;
            justify-content: space-between;
            position: fixed;
            z-index: 1;
          }
          .container {
            border: 1px cyan solid;
            margin: 0rem 0 2rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .presentation {
            opacity: 0.9;
            display: flex;
            justify-content: center;
            z-index: 2;
          }
          .about {
            opacity: 0.9;
            z-index: 2;
          }
          .contact {
            opacity: 0.9;
            z-index: 2;
          }
      `}</style>
    </>
  )
}

export default Home