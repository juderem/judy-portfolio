import React from 'react'
import styles from './Home.module.scss';
import design from '../../assets/images/Design.jpg';
import code from '../../assets/images/Code.jpg';
import experience from '../../assets/images/Experience.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.container}>
                <div className={styles.HomeNav}>
                        <div className={styles.Code}>
                            <div className={styles.content}>
                                <img src={code} alt="code" className={styles.codePic}/>
                                <div className={styles.text}>
                                    <h2 className={styles.heading}>Code</h2>
                                    <p>Examples of projects I have made in the past using HTML, CSS and JS.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Design}>
                            <div className={styles.content}>
                                <img src={design} alt="design" className={styles.designPic}/>
                                <div className={styles.text}>
                                    <h2 className={styles.heading}>Design</h2>
                                    <p>Describing my design and work process and detailing the experience I have already had.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Experience}>
                            <div className={styles.content}>
                                <img src={experience} alt="experience" className={styles.expPic}/>
                                <div className={styles.text}>
                                    <h2 className={styles.heading}>Experience</h2>
                                    <p>Describing my design and work process and detailing the experience I have already had.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
