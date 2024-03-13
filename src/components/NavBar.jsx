import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div className='nav'>
      <Link to='/'>
        <div className='mainPage'>Movie Land</div>
      </Link>
      <Link to='/MovieCard'>
        {/* <div>Our movie</div> */}
      </Link>
      
    </div>
  );
}


export default NavBar;