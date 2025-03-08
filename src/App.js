import React from 'react';
import './App.css';
import video1 from './videos/v1.mp4'; // Correct import from src/videos
import video2 from './videos/v3.mp4';

function App() {
  return (
    <div className="headertext">
      <p>YOFTAHE <br /> GIRUM</p>

      {/* First Video */}
      <video width="320" height="240"  controls>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

       {/* First Video */}
       <video width="320" height="240"  controls>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <footer>
        <div className="footertext">
         <p>contact us on yoftahegirum@gmail.com</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
