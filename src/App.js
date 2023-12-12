import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MiniBox from './shared/MiniBox';
import Projects from './pages/Projects';
import ProjectStats from './component/ProjectStats';
import Services from './pages/Services';



function App() {
  return (
    <div className='appContainer'>
      <Home />
      <MiniBox />
      <About />
      <ProjectStats />
      <Projects />
      <MiniBox marginTop={"0"} backgroundColor={"#1b1b1b"}/>
      <Services />
    </div>
  );
}

export default App;
