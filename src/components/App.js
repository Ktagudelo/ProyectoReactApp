import React from 'react';
import Image from '../images/Design.jpg';


const App = () => {
  return (
    <div>
      <header className="App-header">
        <h3>Design Conn</h3>
        <nav className="App-main-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <div className="App-container">
        <div className="App-container-main">
          <p className="App-container-p1">
            We create designs <br />
            that create <br />
            connections <br />
          </p>
          <p className="App-container-p2">- Tanya Narang</p>
          <p className="App-container-p3">
            At Design Studio, we aspire to inspire. We work to <br />
            create experience and products to we combine science <br />
            and design to create and innovate.
          </p>
          <br />
          <br />

          <button>Connect Now</button>
        </div>

        <div className="App-image">
          <img src={Image} alt="Image not Found" />
        </div>
      </div>
    </div>
  );
}

export default App;
