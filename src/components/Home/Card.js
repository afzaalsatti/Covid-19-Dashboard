import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import 'typeface-poppins'
const useStyles = makeStyles({
  root: {
    width:250,
    height:250,
    boxShadow: "1px 3px 1px #9E9E9E"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card style={{fontFamily:" Poppins, sans-serif"}} className={classes.root} variant="outlined">
      <img style={{height:"90px",width:"100%"}} src="/assets/graph_home.jpg"></img>
      <CardContent>
       
        <label className={classes.title} color="textSecondary" gutterBottom>
        
          Global stats
        </label>
        <Typography variant="h5" component="h5">
          {props.Case}
        </Typography>
        <label className={classes.pos} color="textSecondary">
          {props.data}
        </label>
        <label variant="body2" component="p">
          Total {props.Case} 
          <br />
           all over the World
        </label>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}