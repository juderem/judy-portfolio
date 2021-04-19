import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../transitions/transitions.scss";
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import styles from './MobileNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';


const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        {/* <Route path="/judy" component={Home} exact /> */}
        <Route path="/judy-portfolio" component={Home} exact/>
        <Route path="/judy-portfolio/about" component={About} />
        <Route path="/judy-portfolio/projects" component={Projects} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function Nav() {
  return (
    <div className="functionality">
      <BrowserRouter className={styles.mobNav}>
        <AnimatedSwitch />
        <nav className={styles.container}>
          <p className={styles.name}>JUDY RACHEL MILNER</p>
          <ul className={styles.mobNav}>
            <li>
              <Link to="/judy-portfolio" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon={['fas', 'home']} />
              </Link>
            </li>
            <li>
              <Link to="/judy-portfolio/about" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon={['fas', 'info-circle']} />
              </Link>
            </li>
            <li>
              <Link to="/judy-portfolio/projects" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon={['fas', 'briefcase']} />
              </Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}