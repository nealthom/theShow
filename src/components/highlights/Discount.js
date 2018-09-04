import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 6th September</h3>
              <p>
                Nam nec diam imperdiet, aliquet erat quis, bibendum nunc. Ut vel
                urna quis diam euismod faucibus. In varius porttitor ante ut
                ultrices. Suspendisse rhoncus est sed eros ullamcorper fringilla
                nec ut velit.
                <MyButton
                  text="Purchase tickets"
                  bck="#ffa800"
                  color="#fff"
                  link="http://google.com"
                />
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
