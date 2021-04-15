import React from 'react'
import styles from './Projects.module.scss';
import pic1 from '../../assets/images/jsgame.gif';
import pic2 from '../../assets/images/jscalc.gif';
import pic3 from '../../assets/images/jsmorse.gif';
import pic4 from '../../assets/images/jsbeer.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.heading}>PROJECTS</h1> 
            </div>
            <div className={styles.main}>
                <div className={styles.game}>
                    <a href="https://juderem.github.io/switch-case-game/" target="_blank">
                        <img src={pic1} alt="game gif" />
                    </a>
                    <h3 className={styles.pGame}>Vanilla JS Game</h3>
                    <p className={styles.pGame}>The aim of this JavaScript game is to turn all of the boxes grey. It was designed in Figma and built using HTML, CSS and JS.</p>
                    <a href="https://github.com/juderem/switch-case-game" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
                    </a>
                    
                </div>
                <div className={styles.calc}>
                    <a href="https://juderem.github.io/jucalculate/" target="_blank">
                        <img src={pic2} alt="calc gif" />
                    </a>
                    <h3 className={styles.pCalc}>Calculator</h3>
                    <p className={styles.pCalc}>This calculator was built using JavaScript, designed using figma and tested with cypress. I wanted it to look modern and colorful and to have a really clear user interface. </p>
                    <a href="https://github.com/juderem/jucalculate" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
                    </a>
                </div>
                <div className={styles.morse}>
                    <a href="https://juderem.github.io/morse-code-translator/" target="_blank">
                        <img src={pic3} alt="morse gif" />
                    </a>
                    <h3 className={styles.pMorse}>Morse Code Translator</h3>
                    <p className={styles.pMorse}>This is a vanilla js morse code translator, it was a first attempt at test-driven development.</p>
                    <a href="https://github.com/juderem/morse-code-translator" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
                    </a>
                </div>
                <div className={styles.beer}>
                    <a href="https://juderem.github.io/beer/" target="_blank">
                    <img src={pic4} alt="beer gif" />
                    </a>
                    <h3 className={styles.pBeer}>Brew Dog Beer API Frontend</h3>
                    <p className={styles.pBeer}>This is a front-end build for the Punk API, built in React.</p>
                    <a href="https://github.com/juderem/beer" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
                    </a>
                    
                </div>

            </div>
        </div>
    )
}

export default Projects
