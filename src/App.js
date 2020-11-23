import React from 'react';
import './App.css';

import 
{
  Header,
  AboutMe,
  Resume,
  Projects,
  Contact
} from './Components/index.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
