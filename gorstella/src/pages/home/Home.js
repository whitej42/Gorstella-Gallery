import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Slideshow from '../../components/slideshow/Slideshow';
import Exhibitions from '../../components/exhibitions/Exhibitions'
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slideshow />
      <Exhibitions />
      <Footer />
    </div>
  );
}

export default Home;