import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import "./Preventions.css";
import 'typeface-poppins'

class Preventions extends Component {
  constructor(props){
    super(props);
   
  }
  render() {
    return (
    
      <div
        className={ 
          this.props.darkMode
            ? "container color-white styling"
            : "container styling"
        }
      >
        <h2 className={ this.props.darkMode? " instruction_head instruction_headDark" : "instruction_head" } >Seafty and Symptoms</h2>
      
      <div style={{    width: "100%",
    
    textAlign: "center",
    marginTop: "30px"}}> 
      <iframe
          width="910"
          height="495"
          src="https://www.youtube.com/embed/d914EnpU4Fo"
        ></iframe>
      
      </div>
              <div className={ this.props.darkMode? " promiseMain promiseMainDark" : "promiseMain" } style={{display:"flow-root",minHeight:"520px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    How it spreads
                    </div>
                    <div className="subtext_hero">Follow seafty measures, Stay safe!</div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   There is currently no vaccine to prevent coronavirus disease 2019
              (COVID-19). 
              
                </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12"> The best way to prevent illness is to avoid being exposed to
                this virus.
              
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "400px"}}>
                <div  className="details_hero" >  The virus is thought to spread mainly from person-to-person. </div>
               
               
                  <div style={{textAlign:"center"}}className="text_heroo">
                   
                  <ul className="checkmark" style={{padding:"10px",    marginTop:"15px"}}>
                <li>
                
                  Between people who are in close contact with one another
                  (within about 6 feet).
                </li>
                <li>
                
                Through respiratory droplets produced when an infected person
                coughs, sneezes or talks.
              </li>
                <li>
                
                  Through respiratory droplets produced when an infected person
                  coughs, sneezes or talks.
                </li>
                
                <li>
                
                  Some recent studies have suggested that COVID-19 may be spread
                  by people who are not showing symptoms.
                </li>
              </ul>
            
                  
                  </div>
                  </div>
               
             
                </div> 
              </div>
              <h2  className={ this.props.darkMode? " instruction_head instruction_headDark" : "instruction_head" } >Your Responsibilities</h2>

         
              


              <div className={ this.props.darkMode? "promiseMainDark" : "promiseMain" } style={{display:"flow-root",minHeight:"320px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero image2" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    Clean your hands often
                    </div>
                    <div className="subtext_hero"></div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <a href="https://www.cdc.gov/handwashing/when-how-handwashing.html">
                Wash your hands
              </a>{" "}
              often with soap and water for at least 20 seconds especially after
              you have been in a public place, or after blowing your nose,
              coughing, or sneezing.
              
                </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">  If soap and water are not readily available,{" "}
              
                use a hand sanitizer that contains at least 60% alcohol
              
              . Cover all surfaces of your hands and rub them together until
              they feel dry.
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "200px"}}>
                <div  className="details_hero" > Avoid touching{" "}
              your eyes, nose, and mouth with unwashed hands. </div>
               
               
                  <div style={{textAlign:"center"}}className="text_heroo">
                   
          
                  
                  </div>
                  </div>
               
                
                </div> 
              </div>
     

        

<div className={ this.props.darkMode? "promiseMainDark" : "promiseMain" } style={{display:"flow-root",minHeight:"320px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero image3" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    Avoid close contact
                    </div>
                    <div className="subtext_hero"></div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  Avoid close contact with people who are sick
              
                </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">  If soap and water are not readily available,{" "}
                <a
                href="https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf"
                target="new"
                className="tp-link-policy"
                data-domain-ext="gov"
              >
                Stay home as much as possible.
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
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "200px"}}>
                <div  className="details_hero" >  Put distance between yourself and other{" "}
              people. </div>
               
               
                  <div style={{textAlign:"center"}}className="text_heroo">
                   
                  <ul className="checkmark" style={{padding:"10px",    marginTop:"15px"}}>
                <li>
                
                Remember that some people without symptoms may be able to
                  spread virus.
                </li>
                <li>
                
                Keeping distance from others is especially important for{" "}
                  <a href="/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html">
                    people who are at higher risk of getting very sick
                  </a>
              </li>
            </ul>
            
                  
                  </div>
                  </div>
               
                
                </div> 
              </div>
     

<div className={ this.props.darkMode? "promiseMainDark" : "promiseMain" } style={{display:"flow-root",minHeight:"320px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero image4" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    Cover your mouth and nose with a cloth/face cover
                    </div>
                    <div className="subtext_hero"></div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  You could spread COVID-19 to others even if you do not feel sick.
                </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">  If soap and water are not readily available,{" "}
                Everyone should wear a cloth face cover when they have to go out
              in public, for example to the grocery store or to pick up other
              necessities.
              <div style={{textAlign:"center"}}className="text_heroo">
                   
                   <ul className="checkmark" style={{padding:"10px",    marginTop:"15px"}}>
                 <li>
                 
                 Cloth face coverings should not be placed on young children
                  under age 2, anyone who has trouble breathing, or is
                  unconscious, incapacitated or otherwise unable to remove the
                  mask without assistance.
                 </li>
                
             </ul>
             
                   
                   </div>
                 
              
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "200px"}}>
                <div  className="details_hero" >The cloth face cover is meant to protect other people in case you
              are infected. </div>
               
               
                  <div style={{textAlign:"center"}}className="text_heroo">
                   
                  <ul className="checkmark" style={{padding:"10px",    marginTop:"15px"}}>
                <li>
                
                Do NOT use a facemask meant for a healthcare worker.
                </li>
                <li>
                
                Continue to keep about 6 feet between yourself and others. The
              cloth face cover is not a substitute for social distancing.
              </li>
            </ul>
            
                  
                  </div>
                  </div>
               
                
                </div> 
              </div>

        <div className={ this.props.darkMode? "promiseMainDark" : "promiseMain" }  style={{display:"flow-root",minHeight:"320px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero image5" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    Cover coughs and sneezes
                    </div>
                    <div className="subtext_hero"></div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  
                If you are in a private setting and do not have on your cloth
                face covering, remember to always cover your mouth and nose
              {" "}
              with a tissue when you cough or sneeze or use the inside of your
              elbow.     </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">  If soap and water are not readily available,{" "}
                Throw used tissues in the trash.
             
              
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "200px"}}>
                <div  className="details_hero" >Immediately wash your hands with soap and water
              for at least 20 seconds. If soap and water are not readily
              available, clean your hands with a hand sanitizer that contains at
              least 60% alcohol. </div>
               
               
                </div>
               
                
                </div> 
              </div>

       
            <div className={ this.props.darkMode? "promiseMainDark" : "promiseMain" } style={{display:"flow-root",minHeight:"320px",width:"auto", height:"auto" ,marginTop:"20px",  borderRadius: "10px"}}>
                <div className="header" style={{minHeight: "120px"}}>
                  <div className="img1_Hero image6" style={{backgroundImage:"../../assets/img/sneezingwoman.png"}} />
                  <span className="fl">
                    <div className="Title_hero">
                    Clean and disinfect
                    </div>
                    <div className="subtext_hero"></div>
                  </span>
                  <span className="fr"></span>
                </div>
                <div className="subHeader">
                  <span className="img3_hero" />
                  <span className="Herotext1">This Information is taken from World Health Organization </span>
                  
                  
                </div>
<div className="justify-content-md-center" style={{textAlign:"center",width:"100%"}}>

                  <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  
                Clean AND disinfect{" "}
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html">
                  frequently touched surfaces
                </a>
                &nbsp;daily
              
              . This includes tables, doorknobs, light switches, countertops,
              handles, desks, phones, keyboards, toilets, faucets, and sinks.    </div>
                <div style={{marginTop:"10px",textAlign:"center" ,  float:"left",minHeight: "70px"}} className="details_hero  col-lg-4 col-md-6 col-sm-12 col-xs-12">  If soap and water are not readily available,{" "}
                If surfaces are dirty, clean them: Use detergent
              or soap and water prior to disinfection.
             
              
                </div>
                
              
                <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginTop:"10px",textAlign:"center", float:"left", minHeight: "200px"}}>
                <div  className="details_hero" > </div>
               
               
                </div>
               
                
                </div> 
              </div>

      
    </div>
    );
  }
}

export default Preventions;
