import React, { Component } from 'react'
import axios from 'axios';
import './home.css'
import Card from './Card';


import "bootstrap/dist/css/bootstrap.min.css";
import Slider from '../Carosal/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";

var passedFunction;
export default class home extends Component {
  constructor(props) {
    super(props);
     passedFunction=this.props.passedFunction;
     console.log(passedFunction)
    this.state = {
      images: [
        "/assets/p1.jpg",
        
        "/assets/p4.png",
        "/assets/p3.png",

      ],
      selectedImage: "/assets/p1.jpg",
     
      
      totalConfirmedLatest: 0,
      totalDeathsLatest: 0,
      totalRecoveredLatest: 0
    };

    
  }



  
  componentWillMount(){
   
  
          
    axios
    .get("https://api.thevirustracker.com/free-api?global=stats")
    .then((res) => {

       
      this.setState({
        totalConfirmedLatest: res.data.results[0].total_cases,
        totalDeathsLatest: res.data.results[0].total_deaths,
        totalRecoveredLatest: res.data.results[0].total_recovered,
        Loader:false,
      });
      
    })
    .catch(error => console.error(error)); 
 
 

}
  componentDidMount() {
    // setInterval(() => {
    //   this.setState(prevState => {
    //     if (prevState.selectedImage === this.state.images[0]) {
    //       return {
    //         selectedImage: this.state.images[1]
    //       };
    //     }else
    //     if (prevState.selectedImage === this.state.images[1]) {
    //       return {
    //         selectedImage: this.state.images[2]
    //       };
    //     }
    //     else {
    //       return {
    //         selectedImage: this.state.images[0]
    //       };
    //     }
    //   });
    // }, 4000);
  }
    render() {
        return (
          <div id="homeComponent">
     
     <Slider/>

    {/* this can be use to display custom slider */}
            {/* <div  id="welcome_image_div">
               <img src={this.state.selectedImage}></img> 
              
            </div> */}

            <div id="search_div" className="clearfix md5">
              <section id="search">
                <div className="clearfix search-wrap">
                  <button onClick={this.props.passedFunction} id="btn1" className=" search_btn fl button">
                   International Cases Details
                  </button>
                  <button id="btn2" onClick={this.props.passedFunction} className="search_btn fl button">
                   Seafty and Symptoms
                  </button>
                </div>
              </section>
            </div>
            <br></br>

 
            <div style={{marginTop:"130px"}}className="main_body">
              
      
                  <div style={{marginRight:"18px",marginBottom:"18px",float:"left"}}>
              
           <Card Case="Confirmed Cases" data={this.state.totalConfirmedLatest}/>
               </div>
               <div style={{marginRight:"18px",marginBottom:"18px",float:"left"}}>
               {/* <text>{this.state.totalRecoveredLatest}</text> */}
               <Card Case="Recovered Cases" data={this.state.totalRecoveredLatest}/>
               </div>
           <div style={{marginRight:"18px",marginBottom:"18px",float:"left"}}>
               {/* <text>{this.state.totalDeathsLatest}</text> */}
           <Card Case="Expire/Death Cases" data={this.state.totalDeathsLatest}/>
           </div>
           </div>
        
               
            </div>
        );
    }
}

