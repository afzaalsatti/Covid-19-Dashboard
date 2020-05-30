import React from 'react'
import  './mainPage.css'
import Home from './home'
import MapBox from "../../Component/Mapbox/MapBox";
import Precautions from "../Preventions/Preventions";
import Stats from '../../App'
import Footer from "../Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer2 from '../Footer/Footer';



export default class mainPage extends React.Component {
  
    constructor()
    {
super();
this.toggleSlideMenu=this.toggleSlideMenu.bind(this);

this.getMenuSelection=this.getMenuSelection.bind(this);
this.buttonActionListener=this.buttonActionListener.bind(this);
this.state={component:<Home passedFunction={this.buttonActionListener}></Home>};

    }

   
    
    buttonActionListener(target){
       
        if(target.target.id==="btn1")
        {
            this.setState({
                component:<Stats ></Stats>
            });
        }else{
            this.setState({
                component:<Precautions ></Precautions>
            });
       }

    }
   
    toggleSlideMenu()
    {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
        if(document.getElementById("right").style.display==="none")
        {
            document.getElementById("right").style.display="block"
        }
        else{
            
            document.getElementById("right").style.display="none"
        }
        
        
    }
    getMenuSelection(pageToBeLoaded)
    {
        this.toggleSlideMenu();
       
         if(pageToBeLoaded==="home")
         {
            if(this.state.component !== <Home></Home>)
            {
                this.setState({
                    component:<Home passedFunction={this.buttonActionListener}></Home>
                });
            }
             
         }
        

         else if(pageToBeLoaded==="Precautions")
         {
             
            if(this.state.component !== <Precautions ></Precautions>)
             {

                 this.setState({
                     component:<Precautions ></Precautions>
                 });
             }


         }
         else if(pageToBeLoaded==="Stats")
         {
             
            if(this.state.component !== <Stats ></Stats>)
             {

                 this.setState({
                     component:<Stats ></Stats>
                 });
             }


         }
         else if(pageToBeLoaded==="Map")
         {
             
            if(this.state.component !== <MapBox ></MapBox>)
             {
                 

                 this.setState({
                     component:<MapBox ></MapBox>
                 });
             }


         }
         
         
        
        
    }

   
   render(){
     
      return(

        <div style={{height:"100%",width:"100%"}}>

<div className="topbar" >
<svg className="translate" style={{marginLeft:"15px"}} onClick={this.toggleSlideMenu} xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

  <div className="translateText"><text>Covid-19 Dashboard</text> </div>
             







  </div>
        <div  >
            
            <div id="right" className="shadow-lg p-3 mb-5 bg-white rounded"  style={{display: 'none'}}>
            <ul className="home-nav-ul" >

                
                <li className="home-nav-item" onClick={() => this.getMenuSelection("home")}>
                <img  style={{height:"25px",width:"25px"}}src="/assets/home_icon.png">
                </img>   
                  <span >
                        Home
                    </span>
                </li>

                <li className="home-nav-item" onClick={() => this.getMenuSelection("Stats")}>
                <img style={{height:"25px",width:"25px"}} src="/assets/stats_icon.png">
                </img>   
                <span>
                        Stats
                    </span>



               </li>
              <li className="home-nav-item" onClick={() => this.getMenuSelection("Map")}>



               <img style={{height:"25px",width:"25px"}} src="/assets/map_icon.png">
                </img>         <span>
                       Map
                    </span>
                </li>
                <li className="home-nav-item" onClick={() => this.getMenuSelection("Precautions")}>
                <img style={{height:"25px",width:"25px"}} src="/assets/precaution_icon.png">
                </img>         <span>
                        Precautions
                    </span>
                </li>
                     </ul>
        </div>
        </div>
        <div className="left">
        
        
{this.state.component}

        
        </div>

{ (this.state.component.type !== MapBox) ? <Footer id="footer"></Footer>  :  "" }


        
    </div>
      )
    }
}

