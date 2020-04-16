import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
 
export default class ProgressBar1 extends React.Component {
  state={
    deathpercentage:0,
    recoveredpercentage:0
  }
  componentDidMount()
  {  
  }
  
  render() {
    
      return(
        <div>
    {this.props.confirmed?
    
      <ProgressBar
     
        percent={this.props.confirmedpercentage}
        text={this.props.confirmedpercentage+"%"}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    
    :
    this.props.recovered?
    
      
      <ProgressBar
     
      percent={this.props.Recoveredpercentage>0&&this.props.Recoveredpercentage<1?1:this.props.Recoveredpercentage}
      text={this.props.Recoveredpercentage+"%"}
      filledBackground="#32CD32"
    />
  
    :
    this.props.death?
   
      <ProgressBar
     
      percent={this.props.Deathpercentage>0&&this.props.Deathpercentage<1?1:this.props.Deathpercentage}
      text={this.props.Deathpercentage+"%"}
      filledBackground="red"
    />
   :
   
  null

  }
   </div>
  );
  }
}

