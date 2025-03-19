// import axios from 'axios';
import { useState, useEffect } from "react";


const Summary = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
   
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
          const [key, value] = cookie.split("=").map(c => c.trim());
          if (key === name) return decodeURIComponent(value); // Decode in case of special characters
      }
      return null;
    };
    
  
  const username = getCookie("username");
  setUsername(username);
  console.log(username);
  
  }, []);

  
  
  



  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
