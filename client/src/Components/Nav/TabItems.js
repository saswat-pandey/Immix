import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Work" />
            <Tab
              label={
                <Badge className={classes.padding} color="secondary" badgeContent={4}>
                  Messages
                </Badge>
              }
            />
            <Tab label="Freelancers" />
            <Tab label="Reports" />
            <Tab label="Contacts" />
            <Tab label="Find Freelancers" />
            <Tab label="Log Out" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Work</TabContainer>}
        {value === 1 && <TabContainer>Messages</TabContainer>}
        {value === 2 && <TabContainer>Freelancers</TabContainer>}
        {value === 3 && <TabContainer>Reports</TabContainer>}
        {value === 4 && <TabContainer>Contacts</TabContainer>}
        {value === 5 && <TabContainer>Find Freelancers</TabContainer>}
        {value === 6 && <TabContainer>Log out message and log out action</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);