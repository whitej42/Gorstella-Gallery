import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-list'>
            <li className='nav-item'><a className='underline'>Home</a></li>
            <li className='nav-item'><a className='underline'>Current Exhibitions</a></li>
            <li className='nav-item'><a className='underline'>Opening Times</a></li>
            <li className='nav-item'><a className='underline'>News</a></li>
            <li className='nav-item'><a className='underline'>Join Mailing List</a></li>
            <li className='nav-item'><a className='underline'>Original Prints</a></li>
            <li className='nav-item'><a className='underline'>Gallery Artists</a></li>
            <li className='nav-item'><a className='underline'>Past Exhibitions</a></li>
            <li className='nav-item'><a className='underline'>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;