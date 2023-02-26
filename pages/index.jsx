import React from 'react'
import Projects from '../components/projects/Projects'
import Works from '../components/works/Works'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Intro from "../components/intro/Intro";
import Presentation from '../components/pesentation/Presentation'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      {/* <div className='bckg-image'>
        
      </div> */}
      <div className='container'>
        <section>
          <header>
            <Navbar />
          </header>
          <div>
            <Intro />
          </div>
        </section>
        <div
        className='about'
        id='about-section'>
          <Presentation />
        </div>
        <div 
          className='projects'
          id='projects-section'>
          <Projects />
        </div>
        <div>
          <Works />
        </div>
        {/* <div 
          className='about'
          id='about-section'>
          <About />
        </div> */}
        <div
          className='contact'
          id='contact-section'>
          <Footer/>
        </div>
      </div>
      <style jsx>{`
          .container {
            padding: 0 0 2rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #0a192f;
          }
          .presentation {
            opacity: 0.9;
            display: flex;
            justify-content: center;
            z-index: 2;
          }
          .projects {
            margin-top: 2rem;
            opacity: 0.9;
            z-index: 2;
          }
          .contact {
            margin-top: 2rem;
            opacity: 0.9;
            z-index: 2;
          }
      `}</style>
    </>
  )
}

export default Home