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
import styles from './Nav.module.scss';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="judy-portfolio" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function Nav() {
  return (
    <div className="functionality">
      <BrowserRouter>
        <AnimatedSwitch />
        <nav className={styles.container}>
          <p className={styles.name}>JUDY RACHEL MILNER</p>
          <ul>
            <li>
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
            </li>
            <li>
              <Link to="/projects" style={{textDecoration: 'none'}}>Projects</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}