import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'



// function Logo() {
//   return (
//     <FontAwesomeIcon className='navLeft' icon={faMountainSun} size="xl" />
//   );
// }



const Layout = () => {
  return (
    <>
      <nav>
        <ul className='ul'>
        <li className='navLeft'>
        {/* <Logo/> */}
          </li>
          <li className='navLeft'>
            <h2><FontAwesomeIcon className='navLeft' icon={faMountainSun} size="xl" /> MY TRAVEL DIARY</h2>
          </li>
          <li className='navCentre'>
            <Link to="/"><button className='navButtons' type="button">Home</button></Link>
          </li>
          <li className='navCentre'>
            <Link to="/australia"><button className='navButtons'>Australia</button></Link>
          </li>
          <li className='navCentre'>
            <Link to="/spain"><button className='navButtons'>Spain</button></Link>
          </li>
          <li className='navCentre'>
            <Link to="/vietnam"><button className='navButtons'>Vietnam</button></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;