import React from 'react';
import styles from './Photos.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../../assets/images/1.JPG';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.JPG';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.JPG';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.JPG';
import img9 from '../../assets/images/9.jpg';
import img10 from '../../assets/images/10.JPG';
import img11 from '../../assets/images/11.JPG';
import img12 from '../../assets/images/12.JPG';
import img13 from '../../assets/images/13.jpg';
import img14 from '../../assets/images/14.JPG';
import img15 from '../../assets/images/15.jpg';
import img16 from '../../assets/images/16.JPG';
import img17 from '../../assets/images/17.JPG';
import img18 from '../../assets/images/18.jpg';
import img19 from '../../assets/images/19.JPG';
import img20 from '../../assets/images/20.jpg';
import img21 from '../../assets/images/21.JPG';
import img22 from '../../assets/images/22.JPG';
import img23 from '../../assets/images/23.JPG';
import img24 from '../../assets/images/24.jpg';

const Photos = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.images}>
                <img src={img1} alt="sky tree lamp" />
                <img src={img2} alt="hand door" />
                <img src={img3} alt="lace curtain" />
                <img src={img4} alt="flower bush" />
                <img src={img5} alt="blue curtain" />
                <img src={img6} alt="rain water" />
                <img src={img7} alt="blind window" />
                <img src={img8} alt="bridge stairs" />
                <img src={img9} alt="white flowers" />
                <img src={img10} alt="hands" />
                <img src={img11} alt="cloudy road" />
                <img src={img12} alt="blurry bath" />
                <img src={img13} alt="pebble water" />
                <img src={img14} alt="canal boat" />
                <img src={img15} alt="tunnel wall" />
                <img src={img16} alt="leaf chimney" />
                <img src={img17} alt="cattle grate" />
                <img src={img18} alt="not wheat" />
                <img src={img19} alt="puddle" />
                <img src={img20} alt="not forest" />
                <img src={img21} alt="bins" />
                <img src={img22} alt="homebase night" />
                <img src={img23} alt="blurry dukes road" />
                <img src={img24} alt="tree swing" />
            </div>
        </div>
    )
}

export default Photos
