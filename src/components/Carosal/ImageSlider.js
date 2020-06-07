import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../Carosal/Carosal.css";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://sunbeamwhdh.files.wordpress.com/2020/03/200320_brigham.jpg?quality=60&strip=color"
      />
      <button className="legend">Stay Home Stay Save</button>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1506755594592-349d12a7c52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <button className="legend">Avoid Crowded places</button>
    </div>
    <div>
      <img
        alt=""
        src="https://media3.s-nbcnews.com/i/newscms/2017_25/1223480/washing-hands-today-tease2-170621_eeb033436777208fc7e5a4bd6be3756e.jpg"
      />

      <button className="legend">
        Wash your hands for at least 20 seconds
      </button>
    </div>
    <div>
      <img
        alt=""
        src="https://mibiotix.co.za/wp-content/uploads/2020/03/n6wceitlcqdxip3rdfqc.jpg"
      />
      <button className="legend">Cover Your mouth with mask</button>
    </div>
    <div>
      <img
        alt=""
        src="https://media.allure.com/photos/5e7513e31d8b9300097006b4/16:9/w_2560%2Cc_limit/hand-sanitizer-lede.jpg"
      />

      <button className="legend">Frequently use Hand Sanitizer</button>
    </div>

    <div>
      <img
        alt=""
        src="https://www.trendinbuzz.com/wp-content/uploads/2020/04/how-to-disinfect-your-home.jpg"
      />

      <button className="legend">
        Clean and disinfect surfaces around your home and work
      </button>
    </div>
  </Carousel>
);
