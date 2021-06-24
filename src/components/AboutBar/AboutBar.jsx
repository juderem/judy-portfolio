import React from 'react'
import styles from './AboutBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import judy from '../../assets/images/JudyMilnerPicture.jpg';

const AboutBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.AboutBar}>
                <img src={judy} alt="judy profile picture"/>
                <h2 className={styles.name}>Judy Rachel Milner</h2>
                <h4 className={styles.title}>Junior UX Designer</h4>
                <p className={styles.bio}>Hi, I'm Judy! I'm a junior web developer living in Stroud. After getting my degree in 
                Photography from Bath Spa University, I wanted
                to combine my creative skills with my interest in tech, so I enrolled in the _Nology course
                in order to start my journey into web development and gain a solid foundation of knowledge
                in coding.
                <br />
                <br />
                As a visually oriented person, design and user-experience is the part of coding 
                that I enjoy the most. I want everything I make to have a clear theme and operate smoothly.</p>
                <h5 className={styles.email}>judy.milner@gmail.com</h5>
                <div className={styles.iconContainer}>
                    <a href="https://github.com/juderem?tab=repositories" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/judy-milner-86b492183/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.icon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutBar
