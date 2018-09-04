import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/';
import VenueNfo from './components/venueNfo';
import Description from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="featured">
          <Featured />
        </Element>

        <Element name="nfo">
          <VenueNfo />
        </Element>

        <Element name="highlights">
          <Description />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
