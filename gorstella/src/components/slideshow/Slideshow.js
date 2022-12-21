import './Slideshow.css';

function importImages(i) {
  let images = {}
  i.keys().map((item, index) => { images[item.replace('./', '')] = i(item); });
  return images;
}

const images = importImages(require.context('./img', false, /\.(png|jpe?g|svg)$/))

function Slideshow() {
  return (
    <div className='slideshow'>
      <div className='slides'>
        <img src={images['1.jpg']}/>
      </div>
      {/* <div className='slides'>
        <img src={images['2.jpg']}/>
      </div>
      <div className='slides'>
        <img src={images['3.jpg']}/>
      </div> */}
    </div>
  );
}

export default Slideshow;