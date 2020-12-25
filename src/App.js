import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Works/>
        <Footer />
      </div>
    );
  }
}
export default App;