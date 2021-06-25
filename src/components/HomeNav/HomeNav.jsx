import React from 'react'
import styles from './HomeNav.module.scss';
import design from '../../assets/images/Design.jpg';
import code from '../../assets/images/Code.jpg';
import experience from '../../assets/images/Experience.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../transitions/transitions.scss";
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Route path="/code" component={code} exact/>
          <Route path="/design" component={design} />
          <Route path="/design" component={experience} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

const HomeNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.arrow}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']}/>
                <FontAwesomeIcon icon={['fas', 'chevron-left']}/>
            </div>
            <div className={styles.HomeNav}>
                <BrowserRouter>
                    <div className={styles.Code}>
                        <div className={styles.content}>
                            <img src={code} alt="code" className={styles.codePic}/>
                            <div className={styles.text}>
                                <h2 className={styles.heading}>Code</h2>
                                <p>Examples of projects I have made in the past using HTML, CSS and JS.</p>
                                <Link to="/code">
                                    <p>Code</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Design}>
                        <div className={styles.content}>
                            <img src={design} alt="design" className={styles.designPic}/>
                            <div className={styles.text}>
                                <h2 className={styles.heading}>Design</h2>
                                <p>Describing my design and work process and detailing the experience I have already had.</p>
                                <Link to="/design">
                                    <p>design</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Experience}>
                        <div className={styles.content}>
                            <img src={experience} alt="experience" className={styles.expPic}/>
                            <div className={styles.text}>
                                <h2 className={styles.heading}>Experience</h2>
                                <p>Describing my design and work process and detailing the experience I have already had.</p>
                                <Link to="/experience">
                                    <p>experience</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default HomeNav
