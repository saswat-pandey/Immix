import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  Signup: {
      backgroundColor: "#5EA5DB"
  },
  centerContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 62,
    paddingBottom: 59,
  },
  fontColor: {
    color: "#ffffff"
  },
  button: {
    backgroundColor: "#498CC1",
    color: "#ffffff"
  },
});

function SignupSection(props) {
  const { classes } = props;
  const MyLink = props => <Link to="/register" {...props} />
  return (
    <div>
      <Paper className={classNames(classes.root, classes.Signup)} elevation={1}>
        <div className={classNames(classes.centerContent)}>
          <Typography variant="display2" component="h3" className={classNames(classes.fontColor)}>
            Sign Up
          </Typography>
            <br />
          <Typography className={classes.fontColor}>
            Lorem ipsum dolor sit amet, consectetur 
          </Typography>
          <Typography className={classes.fontColor}>
            adipisicing elit, sed do eiusmod tempor
          </Typography>
          <Typography className={classes.fontColor}>
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <br />
          <Button size="medium" className={classes.button} component={MyLink}>
              Register Now!
          </Button>
        </div>
      </Paper>
    </div>
  );
}

SignupSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupSection);
