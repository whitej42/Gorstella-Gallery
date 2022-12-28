import './Footer.css';

function Footer() {

    let footerText = `© Gorstella Gallery 2022
    Sitemap | Terms Of Use | Privacy Policy | Cookies | Log in`;

  return (
    <div>
      <footer className='footer'>
        <div className="flex-grid">
            <div className="col">
            </div>
            <div className="col copyright">
                <span>{footerText}</span>
            </div>
            <div className="col">
                <ul className='address'>
                    <li>Tudor Farm</li>
                    <li>Kinnerton Road,</li>
                    <li>Dodleston,</li>
                    <li>Chester,</li>
                    <li>CH4 9LP</li>
                    <li>+44 (0)1244 660540 / +44 (0)7739 479139</li>
                    <li><a href='#' className='email'>gorstella@gorstellagallery.co.uk</a></li>
                </ul>
            </div>
        </div>        
      </footer>
    </div>
  );
}

export default Footer;