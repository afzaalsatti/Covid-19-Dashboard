
import React from 'react';
import ReactMapGL ,{Marker,NavigationControl} from 'react-map-gl';

import axios from 'axios';
import img1 from '../Images/darkmap.jpg';
import img2 from '../Images/geogarphic map.jpg'
import img3 from '../Images/map2.jpg'
import Modal from '../Modal/Modal';
import './Mapbox.css';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       data:[],
       Date:'',
       mapview:1,
       toggal:false,
       totalConfirmedLatest: 0,
    totalDeathsLatest: 0,
    totalRecoveredLatest: 0,
       viewport:{
          width: "80vw",
    height: "100vh",
  
    // height:600,
    // width:600,
    latitude: 33.0,
    longitude: 65.0,
    zoom: 4
       },
      
     }
  }
 
  componentDidMount(){
    axios
      .get(
        "https://covid19api.herokuapp.com/")
      .then(( res ) => {
        let data = [];
      res.data.confirmed.locations.forEach((l, index) => {
        data.push({
          country: l.country,
          countryCode: l.country_code,
          latitude: l.coordinates.latitude,
          longitude: l.coordinates.longitude,
          historyConfirmed: l.history,
          latestConfirmed: l.latest,
          historyDeaths: null,
          latestDeaths: null,
          historyRecovered: null,
          latestRecovered: null,
        });
      });

      res.data.deaths.locations.forEach((l) => {
        data.forEach((d, index) => {
          if (d.country === l.country) {
            data[index] = {
              ...d,
              historyDeaths: l.history,
              latestDeaths: l.latest,   
            };
          }
        });
      });
      res.data.recovered.locations.forEach((l) => {
        data.forEach((d, index) => {
          if (d.country === l.country) {
            data[index] = {
              ...d,
              historyRecovered: l.history,
              latestRecovered: l.latest,
            };
          }
        });
      });
      console.log(res.data.updatedAt);
      this.setState({
        data: data
      })
      this.setState({
        Date:res.data.updatedAt
      })
      
    
      this.setState({
        totalConfirmedLatest: res.data.latest.confirmed,
        totalDeathsLatest: res.data.latest.deaths,
        totalRecoveredLatest: res.data.latest.recovered,
        allData: data,
        loading: false,
      });
       
        })
        
        
    
     
      }
 
render()
{
  if(this.state.mapview===1){
  
      // console.log("No of Death",this.state.TotalDeaths,"No of Record",this.state.TotalRecovered,"No of confirmed",this.state.TotalConfirmed)
    return (
     
     <div style={{flexDirection:'row'}}>
         <div className="maindiv">
         {/* <div style={{color:'white',marginTop:10,marginBottom:10,fontSize:28}}>World Record</div>
      <div style={{position:'absolute',top:90,left:30,borderWidth:2,borderRadius:10,backgroundColor:'#FFFF66',height:100,width:'80%',color:'gray'}}>
      <div style={{color:'black',marginTop:10,marginBottom:10,}}>Total Confirmed Case</div>
      <div style={{color:'black'}}>{this.state.totalConfirmedLatest}</div>
      </div>
      <div style={{position:'absolute',top:200,left:30,borderWidth:2,borderRadius:10,backgroundColor:'#32CD32',height:100,width:'80%',color:'gray'}}>
      <div style={{color:'black',marginTop:10,marginBottom:10}}>Total Recovered Case</div>
      <div style={{color:'black'}}>{this.state.totalRecoveredLatest}</div>
      </div>
      <div style={{position:'absolute',top:310,left:30,borderWidth:2,borderRadius:10,backgroundColor:'#FF6347',height:100,width:'80%',color:'gray'}}>
      <div style={{color:'black',marginTop:10,marginBottom:10}}>Total Death Case</div>
      <div style={{color:'black'}}>{this.state.totalDeathsLatest}</div>
      </div> */}
       <div className="worldRecord">World Record</div>
      <div>
      <div className="WorldInfoHeading">Total Confirmed Case</div>
      <div style={{color:'#FFFF66',fontSize:22}}>{this.state.totalConfirmedLatest}</div>
      </div>
{/*      
      <div style={{position:'absolute',top:150,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Recovered Case</div>
      <div style={{color:'#32CD32',fontSize:22}}>{this.state.totalRecoveredLatest}</div>
      </div>
      {/* <div style={{position:'absolute',top:270,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Death Case</div>
      <div style={{color:'#FF6347',fontSize:22}}>{this.state.totalDeathsLatest}</div>
      </div>
          
         
          
         
         </div>
      <div className="Map">          

    <ReactMapGL 
    mapStyle={'mapbox://styles/mehakkhan/ck8tu8x420qjq1ipm2jdm16qg'}
        {...this.state.viewport}
       mapboxApiAccessToken={'pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg'}
       onViewportChange={(viewport) => this.setState({viewport})}
       
      >
        
         <div style={{position:'absolute',top:10,left:10}} onClick={()=>{this.state.toggal===false?this.setState({toggal:true}):this.setState({toggal:false})}}><i style={{fontSize:'48px',color:"red"}} className="fa fa-gear"></i></div>
          {this.state.toggal===true?<div style={{position:'absolute',top:55,left:38,width:200,alignSelf: "flex-end",borderWidth:2,borderRadius:10,borderColor:'red',backgroundColor:'black'}}>
          <div style={{marginRight:10,marginTop:10,marginBottom:10,color:'red'}} onClick={()=>this.setState({mapview:1})}>
            <img style={{height:30,width:50}}src={img1} alt="map1"></img>
         <div style={{color:'red'}}>Dark Gray Canvas</div></div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:2})}>
            <img style={{height:30,width:50}}src={img3} alt="map1"></img>
          <div style={{color:'gray'}}>Light Gray Canvas</div>
          </div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:3})}>
            <img style={{height:30,width:50}}src={img2} alt="map1"></img>
          <div style={{color:'gray'}}>National Geographic</div>
          </div>
          </div> :null}  
          <div
          style={{
            position: "absolute",
            top: 0,
            right:0,
            padding: "10px"
          }}
        >
          <NavigationControl />
        </div> 
        {this.state.data.map((d,key)=>( 
           
           <Marker key={key}   latitude={d.latitude} longitude={d.longitude}>
            <Modal  data={this.state.Date} country={d.country}latestDeaths={this.state.data[key].latestDeaths} confirmed={this.state.data[key].latestConfirmed} latestRecovered={this.state.data[key].latestRecovered}/>
            </Marker>
            ))
            
          }
           </ReactMapGL>
     
     </div> 
     </div>
   
  );
 
  }
  if (this.state.mapview===2)
  {
    return (
      <div style={{flexDirection:'row'}}>
         <div className="maindiv">
      {/* <div style={{position:'absolute',top:30,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
       <div className="worldRecord">World Record</div>
      <div>
      <div className="WorldInfoHeading">Total Confirmed Case</div>
      <div style={{color:'yellow',fontSize:22}}>{this.state.totalConfirmedLatest}</div>
      </div>
{/*      
      <div style={{position:'absolute',top:150,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Recovered Case</div>
      <div style={{color:'green',fontSize:22}}>{this.state.totalRecoveredLatest}</div>
      </div>
      {/* <div style={{position:'absolute',top:270,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Death Case</div>
      <div style={{color:'#FF6347',fontSize:22}}>{this.state.totalDeathsLatest}</div>
      </div>
          
         
         </div>
      
      <div className="Map">          
    <ReactMapGL 
    mapStyle={'mapbox://styles/mehakkhan/ck8u0ini70wsz1il9s1a5b03x'}
        {...this.state.viewport}
       mapboxApiAccessToken={'pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg'}
       onViewportChange={(viewport) => this.setState({viewport})}
       zoomInLabel='Zoom In'>
            <div style={{position:'absolute',top:10,left:10}} onClick={()=>{this.state.toggal===false?this.setState({toggal:true}):this.setState({toggal:false})}}><i style={{fontSize:'48px',color:"red"}} className="fa fa-gear"></i></div>
          {this.state.toggal===true?<div style={{position:'absolute',top:55,left:38,width:200,alignSelf: "flex-end",borderWidth:2,borderRadius:10,borderColor:'red',backgroundColor:'#D3D3D3'}}>
          <div style={{marginRight:10,marginTop:10,marginBottom:10,color:'red'}} onClick={()=>this.setState({mapview:1})}>
            <img style={{height:30,width:50}}src={img1} alt="map1"></img>
         <div style={{color:'gray'}}>Dark Gray Canvas</div></div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:2})}>
            <img style={{height:30,width:50}}src={img3} alt="map1"></img>
          <div style={{color:'red'}}>Light Gray Canvas</div>
          </div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:3})}>
            <img style={{height:30,width:50}}src={img2} alt="map1"></img>
          <div style={{color:'gray'}}>National Geographic</div>
          </div>
          </div> :null}  
          <div
          style={{
            position: "absolute",
            top: 0,
            right:0,
            padding: "10px"
          }}
        >
          <NavigationControl />
        </div>
        {this.state.data.map((d,key)=>( 
           
           <Marker key={key}   latitude={d.latitude} longitude={d.longitude}>
            <Modal  data={this.state.Date} country={d.country}latestDeaths={this.state.data[key].latestDeaths} confirmed={this.state.data[key].latestConfirmed} latestRecovered={this.state.data[key].latestRecovered}/>
            </Marker>
            ))
            
          }
        

           </ReactMapGL>
     
     </div> 
     </div>
   
   
  );
  }
  if (this.state.mapview===3)
  {
    return (
      <div style={{flexDirection:'row'}}>
       <div className="maindiv">
      {/* <div style={{position:'absolute',top:30,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
       <div className="worldRecord">World Record</div>
      <div>
      <div className="WorldInfoHeading">Total Confirmed Case</div>
      <div style={{color:'yellow',fontSize:22}}>{this.state.totalConfirmedLatest}</div>
      </div>
{/*      
      <div style={{position:'absolute',top:150,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Recovered Case</div>
      <div style={{color:'green',fontSize:22}}>{this.state.totalRecoveredLatest}</div>
      </div>
      {/* <div style={{position:'absolute',top:270,left:30,borderWidth:2,borderRadius:10,backgroundColor:'red',height:100,width:200,color:'gray'}}>
      */}
      <div>
      <div className="WorldInfoHeading">Total Death Case</div>
      <div style={{color:'#FF6347',fontSize:22}}>{this.state.totalDeathsLatest}</div>
      </div>
          
         
         </div>
   
   <div className="Map">        
    <ReactMapGL 
    mapStyle={'mapbox://styles/mapbox/basic-v9'}
        {...this.state.viewport}
       mapboxApiAccessToken={'pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg'}
       onViewportChange={(viewport) => this.setState({viewport})}
       zoomInLabel='Zoom In'>
           <div style={{position:'absolute',top:10,left:10}} onClick={()=>{this.state.toggal===false?this.setState({toggal:true}):this.setState({toggal:false})}}><i style={{fontSize:'48px',color:"red"}} className="fa fa-gear"></i></div>
          {this.state.toggal===true?<div style={{position:'absolute',top:55,left:38,width:200,alignSelf: "flex-end",borderWidth:2,borderRadius:10,borderColor:'red',backgroundColor:'#D3D3D3'}}>
          <div style={{marginRight:10,marginTop:10,marginBottom:10,color:'red'}} onClick={()=>this.setState({mapview:1})}>
            <img style={{height:30,width:50}}src={img1} alt="map1"></img>
         <div style={{color:'gray'}}>Dark Gray Canvas</div></div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:2})}>
            <img style={{height:30,width:50}}src={img3} alt="map1"></img>
          <div style={{color:'gray'}}>Light Gray Canvas</div>
          </div>
          <div style={{marginRight:10,marginTop:10,marginBottom:10}}  onClick={()=>this.setState({mapview:3})}>
            <img style={{height:30,width:50}}src={img2} alt="map1"></img>
          <div style={{color:'red'}}>National Geographic</div>
          </div>
          </div> :null}  
          <div
          style={{
            position: "absolute",
            top: 0,
            right:0,
            padding: "10px"
          }}
        >
          <NavigationControl />
        </div>
        {this.state.data.map((d,key)=>( 
           
           <Marker key={key}   latitude={d.latitude} longitude={d.longitude}>
            <Modal  data={this.state.Date} country={d.country}latestDeaths={this.state.data[key].latestDeaths} confirmed={this.state.data[key].latestConfirmed} latestRecovered={this.state.data[key].latestRecovered}/>
            </Marker>
            ))
            
          }
           </ReactMapGL>
     
     </div> 
     </div>
   
  
  );
  
  }
 
}

}
