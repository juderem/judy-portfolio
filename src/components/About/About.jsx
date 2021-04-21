import React from 'react'
import styles from './About.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';


const About = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>ABOUT</h1>
        <div className={styles.main}>
          <div className={styles.bio}>
            <p className={styles.bio}>
              Hi, I'm Judy! I'm a junior web developer living in Stroud. After getting my degree in 
              Photography from Bath Spa University, I wanted
              to combine my creative skills with my interest in tech, so I enrolled in the _Nology course
              in order to start my journey into web development and gain a solid foundation of knowledge
              in coding. 
              <br></br>
              <br></br>
              As a visually oriented person, design and user-experience is the part of coding 
              that I enjoy the most. I want everything I make to have a clear theme and operate smoothly.
              <br></br>
              <br></br>
              Talk to me here!
              <br/>
              judy.milner@gmail.com
            </p>
        </div>
        <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={['fab', 'html5']} className={styles.icon} id={styles.ht5}/>
            <FontAwesomeIcon icon={['fab', 'css3-alt']} className={styles.icon} id={styles.css3}/>
            <FontAwesomeIcon icon={['fab', 'sass']} className={styles.icon} id={styles.sassy}/>
            <FontAwesomeIcon icon={['fab', 'js']} className={styles.icon} id={styles.js}/>
            <FontAwesomeIcon icon={['fab', 'react']} className={styles.icon} id={styles.react}/>
            <FontAwesomeIcon icon={['fab', 'node-js']} className={styles.icon} id={styles.node}/>
            <FontAwesomeIcon icon={['fab', 'figma']} className={styles.icon} id={styles.figma}/>
            <FontAwesomeIcon icon={['fab', 'angular']} className={styles.icon} id={styles.angle}/>
          </div>
        </div>
      </div>
    )
}

export default About
