import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import About from './About'
import Availability from './Availability/Availability'
import Payment from './Payment'
import Education from './Education'
import Employment from './Employment'
import Languages from './Languages'

const styles = theme => ({
  root: {
    width: "100%",
  },
  pageContainer: {
    position: "relative",
    top: "-25px",
    borderTop: "solid black 1px"
  },
  pageContainerMobile: {
    position: "relative",
    top: "-20px",
    width: "115%",
    right: "7.5%"
  }
});

function MainProfile(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={(window.innerWidth >= 768) ? classes.pageContainer : classes.pageContainerMobile}>
        <About />
        <Availability />
        <Payment />
        <Education />
        <Employment />
        <Languages />
      </div>
    </div>
  );
}

MainProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainProfile);