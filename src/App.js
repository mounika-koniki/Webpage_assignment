// import './App.css';
// import Dashboard from './Components/Dashboard';


// // import Navbarcomp from './Navbarcomp';
// // import Navbarhori from './Navbarhori';
//  {/* <Navbarhori />
//     <Navbarcomp /> */}


// function App() {
//   return (

//     <>
//     <Dashboard />
//     </>
//   );
// }


// export default App;

// import Navbarhori from './Navbarhori';
// import React from 'react';
// import Dashboard from './Components/Dashboard';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//       <Dashboard />
      
//     </div>
//   );
// }

// export default App;
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Dashboard from './Components/Dashboard';
import './App.css';
import Navbarcomp from './Navbarcomp';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    
    <div className="App">
    <Nav className="flex-column home1">
      <Nav.Link  className='text-white ms-3' href="/home1"><i class="fa fa-home" aria-hidden="true"></i></Nav.Link>
      <Nav.Link eventKey="link-1" className='ms-4 text-white'><i class="fa fa-bar-chart" aria-hidden="true"></i></Nav.Link>
      <Nav.Link eventKey="link-1" className='ms-4 text-white'><i class="fa fa-shopping-bag" aria-hidden="true"></i></Nav.Link>
      <Nav.Link eventKey="link-2" className='ms-4 text-white'><i class="fa fa-address-book-o" aria-hidden="true"></i></Nav.Link>
      <Nav.Link eventKey="link-1" className='ms-4 text-white'><i class="fa fa-shopping-bag" aria-hidden="true"></i></Nav.Link>
      <div className='logout'>
      <Nav.Link eventKey="link-1" className='logout ms-4 text-white'><i class="fa fa-sign-out" aria-hidden="true"></i></Nav.Link>
      </div>
      
    </Nav>
    {/* </Navbar.Collapse> */}
    
    <div><Dashboard /></div>
      
    </div>

  );
}

export default App;