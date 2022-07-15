import logo from './logo.png';
import './Navbar.css'
import {IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';
import {AiFillCaretDown} from 'react-icons/ai';

// onclick()
// {   


// } 



const Navbar = () => {
    return ( 
        <nav className="main_nav">
            <div className="nav_options">
            <a href=""><IoIosArrowBack className='arrow_class'/></a>
            <a href=""><IoIosArrowForward className='arrow_class'/></a>

                <ul className='nav_list'>
                    <li><a href="">Exbo</a></li>
                    <li><a href="">Core</a></li>
                    <li><a href="">Team</a></li>
                </ul>


            </div>
            <div className="nav_logo">
                <a href=""><img src= {logo} alt="owasp_logo" className='logo'/></a>
                
                <ul className="dropdown">
                   <li>
                   <AiFillCaretDown className='dropdown_sign'/>
                    <ul className='dropdown_list'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    </li>
                </ul>

            </div>


        </nav>

     );
}
 
export default Navbar;