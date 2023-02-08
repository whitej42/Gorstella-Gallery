import './Header.css';
import logo from './logo.jpg';
import Topnav from '../../components/topnav/Topnav';
import Nav_additional from '../../components/nav_additional/Nav_additional';

function Header() {
  return (
    <div className="header">
      <header>
        <div className='inner'>
          <div className='logo'>
            <a href='#'><img className='logo-img' src={logo} alt='Gorstella Gallery'></img></a>
          </div>
          <Nav_additional />
          <Topnav />
        </div>
      </header>
    </div>
  );
}

export default Header;
