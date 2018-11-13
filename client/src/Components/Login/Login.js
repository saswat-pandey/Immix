import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import LoginSection from './LoginSection';
import SignupSection from './SignupSection';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  rowContent: {
      display: "flex",
      flexDirection: "row",
      flexWrap: 'wrap'
  },
  loginBg: {
      backgroundColor: "#fafafa"
  },
  signupBg: {
    backgroundColor: "#5EA5DB"
}
});

class Login extends Component {
  constructor(props) {
      super(props); 
      this.state = {
        password: ''
      }
  }
    
  render () {
    const { classes } = this.props;
    return (
        <Fragment>
          <Paper className={classNames(classes.root, classes.alignCenter)}elevation={1}>
            <Typography variant="display2" component="h3">
              IMMIX LOGO 
            </Typography>
            <div className={classNames(classes.alignCenter, classes.rowContent)}>
                <LoginSection />
                <SignupSection />
            </div>
          </Paper>
        </Fragment>
      );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);