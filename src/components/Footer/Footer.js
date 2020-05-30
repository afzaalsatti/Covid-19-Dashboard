import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";

const NavItems = [
  {
    icon: <StarBorder />,
    name: "Starred"
  },
  {
    icon: <SendIcon />,
    name: "Mail"
  },
  {
    icon: <DraftsIcon />,
    name: "Drafts"
  }
];

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
   // padding: 5,
    position: "relative",
    left: 0,
    bottom: 0,
    right:0,
    // height: 100,
    width: "100%",
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
       
           

            <Typography color="inherit" variant="caption">
             This DashBoard is developed by DSC-IIUI
            </Typography>
            <br/>
            <Typography color="inherit" variant="caption">
              Stay Home Saty Safe!
            </Typography>
            <br/>
            
         

          {/* <Grid item xs={12} sm={6} md={6}>
            <FooterMenuList navItems={NavItems} />
          </Grid> */}

          <Divider />

          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
                style={{marginLeft:"120px"}}
              >
                © Copyright 2020
              </Typography>
              <Typography color="inherit" variant="caption">
                Terms and Conditions
              </Typography>
            </Toolbar>
          </AppBar>
      
      </Paper>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
