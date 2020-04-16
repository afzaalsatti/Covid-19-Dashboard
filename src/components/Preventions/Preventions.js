import React, { Component } from "react";
import image1 from "../../assets/img/sneezingwoman.png";
import image2 from "../../assets/img/protect-wash-hands.png";
import image3 from "../../assets/img/protect-quarantine.png";
import image4 from "../../assets/img/cloth-face-cover.png";
import image5 from "../../assets/img/COVIDweb_06_coverCough.png";
import image6 from "../../assets/img/COVIDweb_09_clean.png";

import "./Preventions.css";

class Preventions extends Component {
  render() {
    return (
      <div
        className={
          this.props.darkMode
            ? "container color-white styling"
            : "container styling"
        }
      >
        <h1>How it spreads</h1>
        <span className="main">
          <img src={image1} />
          <ul>
            <li>
              There is currently no vaccine to prevent coronavirus disease 2019
              (COVID-19).
            </li>
            <li>
              <strong>
                The best way to prevent illness is to avoid being exposed to
                this virus.
              </strong>
            </li>
            <li>
              The virus is thought to spread mainly from person-to-person.
              <ul>
                <li>
                  Between people who are in close contact with one another
                  (within about 6 feet).
                </li>
                <li>
                  Through respiratory droplets produced when an infected person
                  coughs, sneezes or talks.
                </li>
                <li>
                  These droplets can land in the mouths or noses of people who
                  are nearby or possibly be inhaled into the lungs.
                </li>
                <li>
                  Some recent studies have suggested that COVID-19 may be spread
                  by people who are not showing symptoms.
                </li>
              </ul>
            </li>
          </ul>
        </span>
        <br />
        <h1>EveryOne Should</h1>
        <h3 style={{ marginLeft: "1rem" }}>Clean your hands often</h3>
        <span className="main">
          <img src={image2} />
          <ul>
            <li>
              <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html">
                Wash your hands
              </a>{" "}
              often with soap and water for at least 20 seconds especially after
              you have been in a public place, or after blowing your nose,
              coughing, or sneezing.
            </li>
            <li>
              If soap and water are not readily available,{" "}
              <strong>
                use a hand sanitizer that contains at least 60% alcohol
              </strong>
              . Cover all surfaces of your hands and rub them together until
              they feel dry.
            </li>
            <li>
              <strong>Avoid touching</strong>{" "}
              <strong>your eyes, nose, and mouth</strong> with unwashed hands.
            </li>
          </ul>
        </span>
        <br />
        <h3 style={{ marginLeft: "1rem" }}>Avoid close contact</h3>
        <span className="main">
          <img src={image3} />
          <ul>
            <li>
              <strong>Avoid close contact</strong> with people who are sick
            </li>
            <li>
              <a
                href="https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf"
                target="new"
                className="tp-link-policy"
                data-domain-ext="gov"
              >
                <strong>Stay home as much as possible</strong>.
                <span className="sr-only">pdf icon</span>
                <span
                  className="fi cdc-icon-pdf x16 fill-pdf"
                  aria-hidden="true"
                ></span>
                <span className="file-details"></span>
                <span className="sr-only">external icon</span>
                <span
                  className="fi cdc-icon-external x16 fill-external"
                  aria-hidden="true"
                ></span>
              </a>
            </li>
            <li>
              Put <strong>distance between yourself and other</strong>{" "}
              <strong>people</strong>.
            </li>
            <ul>
              <li>
                <li>
                  Remember that some people without symptoms may be able to
                  spread virus.
                </li>
              </li>
            </ul>
            <ul>
              <li>
                <li>
                  Keeping distance from others is especially important for{" "}
                  <a href="/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">
                    people who are at higher risk of getting very sick
                  </a>
                  .
                </li>
              </li>
            </ul>
          </ul>
        </span>
        <br />
        <h3 style={{ marginLeft: "1rem" }}>
          Cover your mouth and nose with a cloth face cover when around others
        </h3>
        <span className="main">
          <img src={image4} />
          <ul>
            <li>
              You could spread COVID-19 to others even if you do not feel sick.
            </li>
            <li>
              Everyone should wear a cloth face cover when they have to go out
              in public, for example to the grocery store or to pick up other
              necessities.
              <ul>
                <li>
                  Cloth face coverings should not be placed on young children
                  under age 2, anyone who has trouble breathing, or is
                  unconscious, incapacitated or otherwise unable to remove the
                  mask without assistance.
                </li>
              </ul>
            </li>
            <li>
              The cloth face cover is meant to protect other people in case you
              are infected.
            </li>
            <li>Do NOT use a facemask meant for a healthcare worker.</li>
            <li>
              Continue to keep about 6 feet between yourself and others. The
              cloth face cover is not a substitute for social distancing.
            </li>
          </ul>
        </span>
        <br />
        <h3 style={{ marginLeft: "1rem" }}>Cover coughs and sneezes</h3>
        <span className="main">
          <img src={image5} />
          <ul>
            <li>
              <strong>
                If you are in a private setting and do not have on your cloth
                face covering, remember to always cover your mouth and nose
              </strong>{" "}
              with a tissue when you cough or sneeze or use the inside of your
              elbow.
            </li>
            <li>
              <strong>Throw used tissues</strong> in the trash.
            </li>
            <li>
              Immediately <strong>wash your hands</strong> with soap and water
              for at least 20 seconds. If soap and water are not readily
              available, clean your hands with a hand sanitizer that contains at
              least 60% alcohol.
            </li>
          </ul>
        </span>
        <br />
        <h3 style={{ marginLeft: "1rem" }}>Clean and disinfect</h3>
        <span className="main">
          <img src={image6} />
          <ul>
            <li>
              <strong>
                Clean AND disinfect{" "}
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">
                  frequently touched surfaces
                </a>
                &nbsp;daily
              </strong>
              . This includes tables, doorknobs, light switches, countertops,
              handles, desks, phones, keyboards, toilets, faucets, and sinks.
            </li>
            <li>
              <strong>If surfaces are dirty, clean them:</strong> Use detergent
              or soap and water prior to disinfection.
            </li>
          </ul>
        </span>
        <br />
        <iframe
          width="910"
          height="495"
          src="https://www.youtube.com/embed/d914EnpU4Fo"
        ></iframe>
      </div>
    );
  }
}

export default Preventions;
