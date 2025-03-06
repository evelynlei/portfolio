import React from 'react'
import './about.css'
import myImage from '../../assets/me.jpg'
import {GiGraduateCap} from 'react-icons/gi'
// import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <p>Master of Information Technology <br /><i>The University of Queensland</i></p>
                  <h5>GPA: 6.0 / 7</h5>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                  <br />
                    <ul style={{ fontSize: '15px' }}>
                      <li>Full Stack Web Development</li><br />
                      <li>API Design</li><br />
                      <li>AI | Prompts Engineering</li>
                    </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Passions</h5>
                  <small>
                  <br />
                    <ul style={{ fontSize: '15px' }}>
                      <li>Volunteering</li><br />
                      <li>Pair coding</li><br />
                      <li>Hiking enthusiast</li><br />
                      <li>Photography lover</li>
                    </ul>
                  </small>
                  {/* <p>Volunteering, pair coding, hiking enthusiast, photography lover</p> */}
              </article>

              

            </div>
            <p style={{ fontSize: '18px' }}>
                    I'm a <b>Full Stack Developer</b> based in Adelaide AU. 
                    I'm an enthusiastic and driven developer seeking a challenging job opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation and professional experience in software engineering,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. 
                    I am a quick learner who is always ready to face challenges.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About