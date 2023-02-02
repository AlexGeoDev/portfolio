import React from 'react'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Presentation from '../components/pesentation/Presentation'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <div className='bckg-image'>
        
      </div>
      <div className='container'>
        <div className='presentation'>
          <Presentation />
        </div>
        <div 
          className='projects'
          id='projects-section'>
          <Projects />
        </div>
        <div 
          className='about'
          id='about-section'>
          <About />
        </div>
        <div>
          <Footer/>
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
          .projects {            
            opacity: 0.9;
            z-index: 2;
          }
          .about {
            opacity: 0.9;
            z-index: 2;
          }
      `}</style>
    </>
  )
}

export default Home