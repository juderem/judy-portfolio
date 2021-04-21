import React from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
        <Nav />
    </div>
  );
}