import React from 'react';
import { Link } from "react-router-dom";

function App() {
  return(
    <div>
        <nav>
          <div className="container">
            <div className="logo">
              <h3 className="font-bold underline">Logo</h3>
            </div>
            <ul>
              <Link to='/'><li className='active'>Home</li></Link>
              <Link to='/invoices'><li>Services</li></Link>
              <Link to='/expenses'><li>About</li></Link>
              <Link to='contact'><li>Contact</li></Link>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default App;