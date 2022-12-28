import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css';

// Import all images
function importImages(i) {
  let images = {}
  i.keys().map((item, index) => { images[item.replace('./', '')] = i(item); });
  return images;
}

const images = importImages(require.context('./images', false, /\.(png|jpe?g|svg)$/))

// Arrow properties
const properties = {
  prevArrow: <button className='arrow'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/></svg></button>,
  nextArrow: <button className='arrow'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg></button>
}

function Slideshow() {
  return (
    <Slide {...properties}>
      <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${images['1.jpg']})`}}>
              <span>
                Bedruthan Steps - Andrew Hood
              </span>
          </div>
      </div>
      <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${images['2.jpg']})`}}>
              <span>
                Cornish Beach - Andrew Hood
              </span>
          </div>
      </div>
      <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${images['3.jpg']})`}}>
              <span>
                Low Tide Brittany - Andrew Hood
              </span>
          </div>
      </div>
  </Slide>
  );
}

export default Slideshow;