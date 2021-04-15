import React from "react";

export const Footer = () => {
  return (

      <footer
        className="sticky top-full text-white min-h-full py-10 bg-gray-800 w-full h-64"
      
      >
        <div
          className="footer"
        
        >
          <div
          className="flex flex-col gap-5 text-current"
          >
            <h3>Pages</h3>
            <a href="">Home Page</a>
            <a href="">Map Page</a>
            <a href="">Search Page</a>
            <a href="">Sign In</a>
          
          </div>
          <div
           
          >
            <h3>External Pages</h3>
            <a href="https://github.com/Pudderz">Github</a>
            <a href="www.matthewpudney.co.uk" >Portfolio</a>
          </div>

          <div
          
          >
            <h3>Contact Me</h3>
            <p style={{margin:'0'}}>mpudney2@gmail.com</p>
          </div>
        </div>
        {/* <div
        className="subFooter"
      
        >
          <p>E-Commerce Site</p>
          <div
            
          >
            <p>Terms & Conditions</p>
            <p>Security policy</p>
            <p>Return policy</p>
          </div>
        </div> */}
      </footer>

  );
};
