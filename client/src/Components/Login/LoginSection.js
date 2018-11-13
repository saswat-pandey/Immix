import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


 

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginBg: {
      backgroundColor: "#fafafa"
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  colContent: {
      display: "flex",
      flexDirection: "column"
  },
  rowContent: {
    display: "flex", 
    justifyContent: "space-around"
  },
  button: {
    margin: theme.spacing.unit,
    color: "#ffffff",
    backgroundColor: "#5EA5DB"
  },
  blueText: {
      color: "#5EA5DB",
      marginTop: 15
  },
  rightAlign: {
      display: "flex",
      justifyContent: "flex-end"
  }
});

class LoginSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            password: ''
        }
    }

    handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
    event.preventDefault();
    };

    handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classNames(classes.root, classes.loginBg)} elevation={1}>
                    <Typography variant="caption" className={classNames(classes.blueText, classes.rightAlign)}>Facial Recognition</Typography>
                    <Typography variant="display2" component="h3">
                        Login
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h3">
                        Sign in to your account
                    </Typography>

                    <div className={classes.colContent}>
                        <FormControl className={classNames(classes.margin)}>
                            <InputLabel htmlFor="name-simple">Username</InputLabel>
                                <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                        </FormControl>

                        <FormControl className={classNames(classes.margin)}>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                <Input
                                    id="adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>

                        <div className={classes.rowContent}>
                            <Button color="primary" size="medium" variant="contained" className={classes.button}>
                                Login
                            </Button>   
                            <Typography variant="subheading" className={classes.blueText}>Forgot Password</Typography>
                        </div>
                    </div>
                </Paper>
            </div>
            );
    }
}

LoginSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginSection);
