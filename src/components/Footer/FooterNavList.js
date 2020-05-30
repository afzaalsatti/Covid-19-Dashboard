import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({});

class FooterMenuList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  onItemClick = event => {
    event.currentTarget.style.backgroundColor = "#ccc";
    console.log("Test");
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense={true} component="div" disablePadding>
        {this.props.navItems.map(item => (
          <ListItem button onClick={this.onItemClick}>
            <ListItemIcon>
              <Avatar>{item.icon}</Avatar>
            </ListItemIcon>
            <ListItemText inset primary={item.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

FooterMenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FooterMenuList);
