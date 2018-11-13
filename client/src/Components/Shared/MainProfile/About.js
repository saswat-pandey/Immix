import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FontAwesome from 'react-fontawesome';

const styles = theme => ({
  root: {
    width: '100%',
  },
  details: {
    alignItems: 'baseline',
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start"
  },
  form: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    border: "solid black 1px",
    margin: 15
  },
  inputContainer: {
    display: "flex",
    marginBottom: 10,
    border: "solid gray 1px",
    borderRadius: 2,
  },
  lastInputContainer: {
    display: "flex",
    border: "solid black 1px",
    borderRadius: 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  input: {
    outline: "none",
    border: "none",
    background: "white",
    width: 250,
    padding: 10,
    fontSize: 16
  },
  icon: {
    padding: 10,
    background: "#F8F8F8",
    minWidth: 50,
    textAlign: "center",
  },
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      companyName: "",
      lastName: "",
      firstName: "",
      fileName: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      county: "",
      postal: "",
      mobile: "(  )    -    ",
      email: ""
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  toggleExpansion = () => {
    this.setState({expanded: !this.state.expanded})
  }

  render () {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded}>
          <ExpansionPanelSummary>
            <div style={{display: "flex"}}>
              <FontAwesome
                name={!expanded ? "plus-square" : "minus-square"}
                onClick={this.toggleExpansion}
                size='2x'
                style={{display: "flex", alignItems: "center", paddingRight: 20, color: "#4886B0"}}
              />
              <Typography variant="headline">
                Tell us more about you
              </Typography>
            </div>
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails className={classes.details}>
            <div>
              <form noValidate autoComplete="off" className={classes.form}>
                <div className={classes.inputContainer}>
                  <FontAwesome
                    name='clipboard'
                    size='2x'
                    className={classes.icon}
                  />
                  <input 
                    id = "company"
                    type="text" 
                    placeholder="Company Name"
                    className={classes.input}
                    value={this.state.companyName} 
                    onChange={this.handleChange("companyName")}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <FontAwesome
                    name='id-card'
                    size='2x'
                    className={classes.icon}
                  />
                  <input 
                    id = "firstname"
                    type="text" 
                    placeholder="First Name"
                    className={classes.input}
                    value={this.state.firstName} 
                    onChange={this.handleChange("firstName")}
                  />
                </div>
                <div className={classes.lastInputContainer}>
                  <FontAwesome
                    name='id-card'
                    size='2x'
                    className={classes.icon}
                  />
                  <input 
                    id = "lastname"
                    type="text" 
                    placeholder="Last Name"
                    className={classes.input}
                    value={this.state.lastName} 
                    onChange={this.handleChange("lastName")}
                  />
                </div>
              </form>
              
              <form noValidate autoComplete="off" className={classes.form}> 
                <Typography variant="caption">
                  Please upload a professional portrait that clearly<br />shows your face  
                </Typography> 
                <div className={classes.inputContainer}>
                    <FontAwesome
                      name='file'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "file"
                      type="text" 
                      placeholder="Choose a file"
                      className={classes.input}
                      value={this.state.fileName} 
                      onChange={this.handleChange("fileName")}
                    />
                  </div>
              </form>
            </div>

            <div>
              <form noValidate autoComplete="off" className={classes.form}> 
                <div className={classes.inputContainer}>
                    <FontAwesome
                      name='home'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "address"
                      type="text" 
                      placeholder="Address"
                      className={classes.input}
                      value={this.state.addressOne} 
                      onChange={this.handleChange("addressOne")}
                    />
                </div>
                <div className={classes.inputContainer}>
                    <FontAwesome
                      name='home'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "address2"
                      type="text" 
                      placeholder="Address 2"
                      className={classes.input}
                      value={this.state.addressTwo} 
                      onChange={this.handleChange("addressTwo")}
                    />
                  </div>
                  <div className={classes.inputContainer}>
                    <FontAwesome
                      name='building'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "city"
                      type="text" 
                      placeholder="City"
                      className={classes.input}
                      value={this.state.city} 
                      onChange={this.handleChange("city")}
                    />
                  </div>
                  <div className={classes.inputContainer}>
                    <FontAwesome
                      name='university'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "county"
                      type="text" 
                      placeholder="County"
                      className={classes.input}
                      value={this.state.county} 
                      onChange={this.handleChange("county")}
                    />
                  </div>
                  <div className={classes.inputContainer}>
                    <FontAwesome
                      name='map-marker-alt'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "postal-code"
                      type="text" 
                      placeholder="Postal Code"
                      className={classes.input}
                      value={this.state.postal} 
                      onChange={this.handleChange("postal")}
                    />
                  </div>
              </form>
            </div>

            <div>
              <form noValidate autoComplete="off" className={classes.form}> 
                <div className={classes.inputContainer}>
                    <FontAwesome
                      name='mobile-alt'
                      size='2x'
                      className={classes.icon}
                    />
                    <MaskedInput
                      id="my-input-id"
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      placeholder="Enter a phone number"
                      className={classes.input}
                      guide={true}
                      value={this.state.mobile}
                      showMask
                      placeholderChar={'\u2000'}
                      onBlur={() => {}}
                      onChange={this.handleChange('mobile')}
                    />
                </div>
                <div className={classes.inputContainer}>
                    <FontAwesome
                      name='envelope'
                      size='2x'
                      className={classes.icon}
                    />
                    <input 
                      id = "company"
                      type="text" 
                      placeholder="Email"
                      className={classes.input}
                      value={this.state.email} 
                      onChange={this.handleChange("email")}
                    />
                  </div>
              </form>
            </div>
          </ExpansionPanelDetails>
  
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);