import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import FontAwesome from 'react-fontawesome'
import AccountType from './AccountType'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headline: {
      paddingTop: 25,
      paddingBottom: 25
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  colContent: {
    display: "flex",
    flexDirection: "column"
  },
  rowContent: {
      display: "flex",
      flexDirection: "row"
  },
  tos: {
      paddingTop: 15,
      marginLeft: -20
  },
  button: {
    margin: theme.spacing.unit,
    color: "#ffffff",
    backgroundColor: "#4886B0",
    width: 200,
    marginTop: 30,
    marginLeft: 50
  },
  spaceAround: {
      display: "flex",
      justifyContent: "space-between"
  }
});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: "",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email: "",
            country: "",
            checked: false
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleCheck = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleAccountType = (e, value) => {
        e.preventDefault()
        this.setState({
            accountType: value
        });
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
            <Paper className={classNames(classes.root, classes.alignCenter)} elevation={1}>
              <Typography variant="headline" component="h3" className={classes.headline}>
                Create a Free Account
              </Typography>
              <AccountType accountType={this.state.accountType} handleAccountType={this.handleAccountType}/>
              <form className={classNames(classes.container, classes.colContent)} noValidate autoComplete="off">
              <TextField
                    required
                    id="firstname-input"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    className={classes.textField}
                    autoComplete="given-name"
                    margin="normal"
                />   
                <TextField
                    required
                    id="lastname-input"
                    label="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    className={classes.textField}
                    autoComplete="family-name"
                    margin="normal"
                />   
                {/* <TextField
                    required
                    id="username-input"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    className={classes.textField}
                    autoComplete="username"
                    margin="normal"
                />          */}
                <TextField
                    required
                    id="password-input"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />   
                <TextField
                    required
                    id="email-input"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    className={classes.textField}
                    autoComplete="email"
                    margin="normal"
                />   
                <TextField
                    required
                    id="country-name-input"
                    label="Country"
                    value={this.state.country}
                    onChange={this.handleChange('country')}
                    className={classes.textField}
                    autoComplete="country-name"
                    margin="normal"
                />    
                <div className={classNames(classes.rowContent, classes.alignCenter)}>
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheck('checked')}
                            value="checked"
                            color="primary"
                            />
                        }
                    />
                    <div className={classes.tos}>Yes, I understand and accept the 
                        <br/><b>Terms of Service</b>, including the
                        <br/><b>User Agreement</b> and <b>Privacy Policy</b>
                    </div>
                </div>
                <Button color="primary" size="medium" variant="contained" 
                    className={classNames(classes.button)}>
                    Hook me up!
                </Button> 
              </form>
              <Typography variant="title" component="h3" className={classes.headline}>
                Use your Social Network
              </Typography>
              <div className={classes.spaceAround}>
                <FontAwesome
                    className='facebook'
                    name='facebook-square'
                    size='2x'
                    style={{ color: '#3b5998', paddingLeft: 15, paddingRight: 15 }}
                    />
                    <FontAwesome
                    className='google'
                    name='google-plus'
                    size='2x'
                    style={{ color: '#dd4b39', paddingLeft: 15, paddingRight: 15 }}
                    />
                    <FontAwesome
                    className='twitter'
                    name='twitter'
                    size='2x'
                    style={{ color: '#1DA1F2', paddingLeft: 15, paddingRight: 15 }}
                    />
                    <FontAwesome
                    className='github'
                    name='github'
                    size='2x'
                    style={{ color: '#333', paddingLeft: 15, paddingRight: 15 }}
                    />
              </div>
            </Paper>
          </div>
        )
    }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);