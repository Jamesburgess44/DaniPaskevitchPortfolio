import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Navbar.Brand >
        
        Dani Paskevitch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <nav>
        <Link to="/about">About</Link>
        </nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}





// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = (props) => {
//     return (  
//         <div>
//             <nav className="header_container">
//                 <h3 className="nav_header">Dani Paskevitch</h3>
//                 <ul className="nav_container">
                    
//                         <Link to="/">Photography</Link>
//                         <Link to="/videography">Videography</Link>
//                         <Link to="/graphicDesign">Graphic Design</Link>
//                         <Link to="/illustration">Illustration</Link>
//                         <Link to="/about">About</Link>
                    
                    
//                 </ul>
//             </nav>
//         </div>
        
//     );
// }
 
// export default Navbar;