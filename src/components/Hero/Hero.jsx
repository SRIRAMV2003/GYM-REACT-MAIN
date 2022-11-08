import React from 'react'
import Header from '../Header/Header'
import './hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
// live counting import file
import NumberCounter from "number-counter"


// ADDING ANIMATION FOR THE FIRST DIV ORANGE MOVEMENT THE BEST AD
import { motion } from 'framer-motion'

const Hero = () => {

  // TRANSITION FOR ANIMATION
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero' id='home'>
      <div className="blur blur-hero"></div>
      <div className='left-h'>
        <Header />
        <div className='the-best-ad'>
          <motion.div initial={{ left: mobile?"178px":"238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}>

          </motion.div>
          <span>THE BEST FITNESS CLUB YOU WILL EXPERIENCE</span>
        </div>

        {/* HERO HEADING */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>SHAPE</span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO THE FULLEST</span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix='+' /></span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={790} delay='4' preFix='+' /></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+' /></span>
            <span>FITNESS PROGRAM</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>


      <div className='right-h'>
        <button className="btn">Join Now</button>

        {/* adding animations to heart rate div */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>115 Bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero_image' />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}


          src={hero_image_back} alt="" className='hero_image_back' />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}

          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default Hero