/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './slideshow.css';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    const ratioWHArray = this.props.ratio.split(':');
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

    this.backward = this.backward.bind(this);
    this.forward = this.forward.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.runAutomatic = this.runAutomatic.bind(this);
  }

  getNewSlideIndex(step) {
    const { slideIndex } = this.state;
    const numberSlide = this.props.input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  }

  backward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1),
    });
  }

  forward() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  }

  setSlideIndex(index) {
    this.setState({
      slideIndex: index,
    });
  }

  updateDimensions() {
    this.containerElm.style.height = `${this.containerElm.offsetWidth /
      this.ratioWH}px`;
  }

  runAutomatic() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  }

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector('.container');

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    if (this.props.mode === 'automatic') {
      const timeout = this.props.timeout || 5000;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout, 10),
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }

  render() {
    return (
      <div className="lp-slideshow">
        <div className="container">
          {this.props.input.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                this.state.slideIndex === index ? 'active' : ''
              }`}
            >
              {/* <div className="number-text">
                {`${index + 1} / ${this.props.input.length}`}
              </div> */}
              <Link to="/movies">
                <img className="image" src={image.src} alt={image.caption} />
              </Link>
              {/* <div className="caption-text">{image.caption}</div> */}
            </div>
          ))}
          <span className="prev" onClick={this.backward}>
            ❮
          </span>
          <span className="next" onClick={this.forward}>
            ❯
          </span>
        </div>
        <div className="dot-container">
          {this.props.input.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                this.state.slideIndex === index ? 'active' : ''
              }`}
              onClick={() => this.setSlideIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
