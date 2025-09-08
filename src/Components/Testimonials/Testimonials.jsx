import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef()
  let tx = 0

  const slideForward = () => {
    if (tx > -50) {   // -75% because 4 slides (25% each)
      tx -= 50
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 50
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                The faculty and staff really care about student success. I&apos;ve
                grown not just academically but personally as well.The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Michael Lee</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>
                The opportunities to collaborate with peers on real-world
                projects gave me confidence and valuable experience.The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Amanda Smith</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>
                From day one, I felt welcomed and supported. Edusity&apos;s
                inclusive environment made all the difference in my journey.The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
