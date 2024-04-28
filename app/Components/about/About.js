import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "https://i.ibb.co/NCmt9WS/super-cute-boys-ski-suits-are-ready-hit-slopes-have-blast-winter-wonderland-generative-ai.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        I am a full-stack developer from NIT Jalandhar, where I study Electronics and Communication Engineering. I enjoy building software and love taking on challenging projects that require creativity and technical skill.
        </p>
        <a href='https://drive.google.com/file/d/1OFwxRBjWNo12z3XruqwV3X88UFWNHnOE/view?usp=sharings' className='btn' download={"Prince's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>75%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Electronics and Communication</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About