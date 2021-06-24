import React from 'react'
import styles from './HomeNav.module.scss';
import pic1 from '../../assets/images/jscalc.gif';
import satellite from '../../assets/images/satellite.jpg';

const HomeNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.HomeNav}>
                <div className={styles.Projects}>
                    <div className={styles.content}>
                        <img src={pic1} alt="proj" className={styles.projPic}/>
                        <h2>Projects</h2>
                        <p>Examples of projects I have made in the past using HTML, CSS and JS.</p>
                    </div>
                </div>
                <div className={styles.Experience}>
                    <div className={styles.content}>
                        <img src={satellite} alt="satellite" className={styles.expPic}/>
                        <h2>Experience</h2>
                        <p>Describing my design and work process and detailing the experience I have already had.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNav
