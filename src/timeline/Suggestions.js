import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    

    <div className="suggestions">
      <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">arulselvi@123</span>
              <span className="relation">rashu</span>
            </div>
          </div>
          <button className="follow__button">switch 
          </button>
        </div>

<br></br>
<div className="suggestions__title">Suggestions for you  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; See All</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar>
              <img src="https://th.bing.com/th/id/R.9b81663a3934071f8de09681cec0684e?rik=DEV7m%2bUbPpmL2A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCool-Nature-Background-Images-4523x2590.jpg&ehk=XxAKNdbLqeV84jakVaOYrmZWai83%2bRlxqGS7WF2x2%2bo%3d&risl=1&pid=ImgRaw&r=0"></img>
            </Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rachitha_Vinu</span>
              <span className="relation">Followed by Esther_jenslin</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar><img src="https://th.bing.com/th?id=OIP.KeRduNXcbnI6lIpUsQzq3gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"></img></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Hari_chandran</span>
              <span className="relation">Followed by Arul-Selvi + 2 more</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar><img src="https://th.bing.com/th?id=OIP.KeRduNXcbnI6lIpUsQzq3gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"></img></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Priya</span>
              <span className="relation">Followed by buvana</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar><img src="https://th.bing.com/th?id=OIP.waIVBQSYCgn0D25uxEIX-QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"></img></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ramu</span>
              <span className="relation">Followed by Arul +8 more</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar><img src="https://th.bing.com/th?id=OIP.0rVie0laYlpBnF7OTAYwTgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"></img></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Shalini</span>
              <span className="relation">Followed by Selvi-123 </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
      <div className="color">
      <br></br>
      <br></br><br></br>
      <p className="rel">About . Help . Press . API . Jobs . Privacy . Terms.
      
        Locations.Language.Meta Verifiesd <br></br>
        <br></br>
        &copy; 2021 INSTAGRAM FROM META
      </p>
      </div>
    </div>
  );
}

export default Suggestions;
