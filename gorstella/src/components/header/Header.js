import './Header.css';
import logo from './logo.jpg';

function Header() {
  return (
    <div>
      <header className="header">
        <a><img className='logo' src={logo} alt='Gorstella Gallery'></img></a>
      </header>
    </div>
  );
}

export default Header;
