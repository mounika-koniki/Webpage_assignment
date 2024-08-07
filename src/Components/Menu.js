import React from 'react';
import './Menu.css';

function Menu(){
  return(
    <>
    <div className="menubar">
      <div className="icon">
         <span role="img" aria-label="Goals">🎯</span>
                 <p>Goals</p>
        </div>
      <div className="icon">
         <span role="img" aria-label="Popular Dishes">🍽️</span>
           <p>Popular Dishes</p>
          </div>
         <div className="icon">
            <span role="img" aria-label="Menus">📋</span>
                 <p>Menus</p>
       </div>
        </div>
    </>
  )

}
export default Menu;









// import React from 'react'; 
// import './Menu.css';  
// // import a CSS file for styling


//  function Menu(){
//     return (
//       //   <> <div className="Menubar">
//       //   <div className="icon">
//       //     <span role="img" aria-label="Goals">🎯</span>
//       //     <p>Goals</p>
//       //   </div>
//       //   <div className="icon">
//       //     <span role="img" aria-label="Popular Dishes">🍽️</span>
//       //     <p>Popular Dishes</p>
//       //   </div>
//       //   <div className="icon">
//       //     <span role="img" aria-label="Menus">📋</span>
//       //     <p>Menus</p>
//       //   </div>
//       // </div></>
        
//       <div className="Menubar"> 
//         <div className="menu-item">
//          <div className="icon goals-icon"></div> 
//          <span>Goals</span> 
//          <div className="arrow"></div>
//           </div> <div className="menu-item">
//            <div className="icon dishes-icon">
//            </div> <span>Popular Dishes</span> 
//            <div className="arrow"></div> </div> 
//            <div className="menu-item"> 
//            <div className="icon menus-icon">
//            </div> <span>Menus</span> 
//            <div className="arrow"></div> </div> </div> 
//            ); }; 
// export default Menu;
        


