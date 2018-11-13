import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MainProfile from './MainProfile/MainProfile';

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
    marginTop: 25,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "inherit"
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  tabStyle: {
    border: "solid gray 1px",
    borderRadius: "20px 20px 0 0",
    color: "#4886B0",
    backgroundColor: "#ffffff"
  },
  selectedTabStyle: {
    backgroundColor: "#4886B0",
    color: "#ffffff"
  }
});

class ProfileTabs extends React.Component {
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
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="inherit"
            scrollable
            scrollButtons="auto"
            style={
              (window.innerWidth >= 768) ? {position: "relative", right: "32px"} : {}
            }
          >
            <Tab label="Main Profile" 
              className={classNames(classes.tabStyle, 
                (value === 0 ? (classes.selectedTabStyle) : null)
              )}
            />
            <Tab label="Company Info" 
              className={classNames(classes.tabStyle, 
                (value === 1 ? (classes.selectedTabStyle) : null)
              )}            
            />
            <Tab label="Remote Skills" 
              className={classNames(classes.tabStyle, 
                (value === 2 ? (classes.selectedTabStyle) : null)
              )}
            />
            <Tab label="On-Site Skills" 
              className={classNames(classes.tabStyle, 
                (value === 3 ? (classes.selectedTabStyle) : null)
              )}
            />
            <Tab label="Fences" 
              className={classNames(classes.tabStyle, 
                (value === 4 ? (classes.selectedTabStyle) : null)
              )}
            />
            <Tab label="Drug Screen" 
              className={classNames(classes.tabStyle, 
                (value === 5 ? (classes.selectedTabStyle) : null)
              )}
            />
          </Tabs>
        {value === 0 && <TabContainer><MainProfile /></TabContainer>}
        {value === 1 && <TabContainer>Company Info</TabContainer>}
        {value === 2 && <TabContainer>Remote Skills</TabContainer>}
        {value === 3 && <TabContainer>On-Site Skills</TabContainer>}
        {value === 4 && <TabContainer>Fences</TabContainer>}
        {value === 5 && <TabContainer>Drug Screen</TabContainer>}
      </div>
    );
  }
}

ProfileTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTabs);