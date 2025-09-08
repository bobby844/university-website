import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow`s Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university comprehensive education programs. Our cutting-edge curriculum is designed to emporwer stidents with the knowledge, skills, and expleriences neede to excel in the dynamic</p>
        <p>With a focus on innovation ,hands-on, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact i classroms.</p>
        <p>Whether you aspire to beo,ce a teacher, administrattor counseler, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals</p>

      </div>
    </div>
  )
}

export default About