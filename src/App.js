import React from 'react';
import Header from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
