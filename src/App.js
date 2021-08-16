import React, { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {

  const [lightTheme, setLightTheme] = useState(true);

  return (
    <main class={lightTheme? 'Light' : 'Dark'}>
      <div id='app_container'>
        <Navbar lightTheme={lightTheme} setLightTheme={setLightTheme}/>
        <About lightTheme={lightTheme}/>
        <Projects />
        <Skills />
        {/*<Testimonials />*/}
        <Contact />
      </div>
    </main>
  );
}

export default App;