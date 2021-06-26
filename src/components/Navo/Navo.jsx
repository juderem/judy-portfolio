import React from 'react';
import styles from './Navo.module.scss';
import Design from '../../components/Design';
import Code from '../../components/Code';
import Exp from '../Exp';
import Home from '../Home';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../transitions/transitions.scss";
import {
    BrowserRouter,
    Link,
    Redirect, 
    Route,
    Router,
    Switch,
  } from "react-router-dom";

const Navo = () => {
    return (
      <div className={styles.container}>
        <div className={styles.navo}>
            <BrowserRouter className={styles.router}>
                <Link to="/" className={styles.link}>
                    <h1>HOME</h1>
                </Link>
                <Link to="/code" className={styles.link}>
                    <h1>CODE</h1>
                </Link>
                <Link to="/design" className={styles.link}>
                    <h1>DESIGN</h1>
                </Link>
                <Link to="/exp" className={styles.link}>
                    <h1>EXP</h1>
                </Link>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="judy-portfolio">
                    <Redirect to="/" />
                  </Route>
                  <Route exact path="/code" component={Code} />
                  <Route exact path="/design" component={Design} />
                  <Route exact path="/exp" component={Exp} />
                </Switch>
            </BrowserRouter>
        </div>
      </div>
    )
}

export default Navo
