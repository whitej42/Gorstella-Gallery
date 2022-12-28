import Header from '../../components/header/Header';
import Slideshow from '../../components/slideshow/Slideshow';
import About from '../../components/about/About';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Slideshow />
      <About />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;