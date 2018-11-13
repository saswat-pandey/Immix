import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FontAwesome from 'react-fontawesome';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import moment from "moment";

const styles = theme => ({
  root: {
    width: '100%',
  },
  radio: {
    color: "#3DA401",
    '&$checked': {
      color: "#3DA401",
    },
  },
  checked: {},
  margin: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: "flex",
    flexDirection: "row",
  },
  textField: {
    width: 135,
    marginLeft: 7,
    backgroundColor: "white",
    borderRadius: 5,
    border: "solid black 1px"
  },
  textFieldSmall: {
    width: 90
  },
  details: {
    alignItems: 'baseline',
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start"
  },
  column: {
    flexBasis: '33.33%',
  },
  lighter: {
    fontWeight: "Lighter",
  },
  divider: {
    marginTop: 5,
    marginBottom: 10
  },
  form: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    border: "solid black 1px",
    margin: 15,
  },
  lastForm: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    border: "solid black 1px",
    margin: 15,
    marginBottom: 0
  },
  balanceValueContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "baseline"
  },
  balanceValue: {
    display: "flex",
    alignItems: "baseline",
    marginTop: 5,
    marginBottom: 5,
    width: 325,
  },
  addBilling: {
    display: "flex",
    alignItems: "baseline",
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    margin: theme.spacing.unit
  },
  inputContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 10,
    border: "solid gray 1px",
    borderRadius: 3,
  },
  input: {
    outline: "none",
    border: "none",
    background: "white",
    padding: 10,
    fontSize: 16,
  },
  nameInput: {
    width: 350
  },
  setMaxWidth: {
    outline: "none",
    border: "none",
    background: "white",
    padding: 10,
    fontSize: 16,
    maxWidth: 100
  },
  inputHelper: {
    outline: "none",
    border: "none",
    background: "inherit",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: 60,
    paddingLeft: 10
  },
  icon: {
    padding: 10,
    background: "white",
    minWidth: 50,
    textAlign: "center",
  },
  expiration: {},
  billingMethodContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "baseline",
    maxWidth: 720
  },
});

const monthRanges = [
  {
    value: '01',
    label: '01',
  },
  {
    value: '02',
    label: '02',
  },
  {
    value: '03',
    label: '03',
  },
  {
    value: '04',
    label: '04',
  },
  {
    value: '05',
    label: '05',
  },
  {
    value: '06',
    label: '06',
  },
  {
    value: '07',
    label: '07',
  },
  {
    value: '08',
    label: '08',
  },
  {
    value: '09',
    label: '09',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];

const yearRanges = [];
(function yearEntries() {
  for (let i = 0; i < 20; i++) {
    yearRanges.push(parseInt(moment().format("YYYY"), 10) + i)
  }
}());

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
      radio: "card",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      securityCode: "",
      firstName: "",
      lastName: "",
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleRadioChange = event => {
    this.setState({ radio: event.target.value });
  };

  toggleExpansion = () => {
    this.setState({expanded: !this.state.expanded})
  }

  render () {
    const { classes } = this.props;
    const { expanded, radio, cardNumber, firstName, lastName } = this.state;
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
                Payment
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
              <div >
                <form noValidate autoComplete="off" className={classes.form}>
                  <div>
                    <Typography variant="title" className={classes.lighter}>Balance Due</Typography>
                    <Divider className={classes.divider}/>
                    <div className={classes.balanceValueContainer}>
                      <div className={classes.balanceValue}>
                        <Typography variant="title" className={classes.lighter}>
                          Your balance due is: 
                        </Typography>
                        <Typography variant="title" style={{paddingLeft: 10,}}>$0.00</Typography>
                      </div>
                      <Button variant="contained" color="secondary" disabled className={classes.button}>
                        Pay Now
                      </Button>
                    </div>
                  </div>
                </form>

                <form noValidate autoComplete="off" className={classes.lastForm} >
                  <div>
                    <Typography variant="title" className={classes.lighter}>Billing Methods</Typography>
                    <Divider className={classes.divider}/>
                    <div className={classes.balanceValueContainer}>
                      <div className={classes.balanceValue}>
                        <Typography variant="title" className={classes.lighter}>
                          ICON
                        </Typography>
                        <Typography variant="title" className={classes.lighter}>
                          Card ending
                        </Typography>
                      </div>
                      <Typography variant="title">Primary</Typography>
                    </div>
                    <div className={classes.balanceValueContainer}>
                      <div className={classes.balanceValue}>
                        <Typography variant="title" className={classes.lighter}>
                          ICON
                        </Typography>
                        <Typography variant="title" className={classes.lighter}>
                          Card ending
                        </Typography>
                      </div>
                      <Typography variant="title" className={classes.lighter}>Set as primary</Typography>
                    </div>
                    <div className={classes.balanceValueContainer}>
                      <div className={classes.balanceValue}>
                        <Typography variant="title" className={classes.lighter}>
                          ICON
                        </Typography>
                        <Typography variant="title" className={classes.lighter}>
                          Card ending
                        </Typography>
                      </div>
                      <Typography variant="title" className={classes.lighter}>Set as primary</Typography>
                    </div>
                  </div>
                </form>
              </div>
              
              <form noValidate autoComplete="off" className={classes.form}>
                  <div>
                    <Typography variant="headline" className={classes.lighter}>Add Billing Method</Typography>
                    <Divider className={classes.divider}/>
                    <div className={classes.balanceValueContainer}>
                      <div className={classes.addBilling}>
                        <Typography variant="title" className={classes.lighter}>
                          ICON
                        </Typography>
                        <Typography variant="title" className={classes.lighter}>
                          Payment Protection: Only pay for work you authorize
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.balanceValueContainer}>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={radio}
                        onChange={this.handleRadioChange}
                      >
                        <FormControlLabel value="card" 
                          control={<Radio classes={{
                            root: classes.radio,
                            checked: classes.checked,
                          }}/>} 
                          label="Credit or Debit" 
                        />
                        <FormControlLabel value="paypal" 
                          control={<Radio classes={{
                            root: classes.radio,
                            checked: classes.checked,
                          }}/>} 
                          label="Paypal" 
                        />
                      </RadioGroup>
                    </div>
                    
                    <div noValidate auocomplete="off" className={classes.billingMethodContainer}>
                      <div className={classes.inputContainer}>
                        <FontAwesome
                          name='credit-card'
                          size='2x'
                          className={classes.icon}
                        />
                        <input
                          id = "card-number"
                          type="text" 
                          placeholder="Card Number"
                          className={(window.innerWidth > 450) ? classes.input : classes.setMaxWidth}
                          value={cardNumber} 
                          onChange={this.handleChange("cardNumber")}
                        />
                        <FontAwesome
                          name='lock'
                          size='2x'
                          className={classes.icon}
                        />
                        <Typography variant="caption" className={classes.inputHelper}>Securely Stored</Typography>
                      </div>

                      <div className={classes.expiration}>
                        <TextField
                          select
                          label="MM"
                          className={classNames(classes.margin, classes.textField, classes.textFieldSmall)}
                          value={this.state.expMonth}
                          onChange={this.handleChange("expMonth")}
                        >
                          {monthRanges.map((month,index) => (
                            <MenuItem key={month.label} value={month.value}>
                              {month.value}-{moment.monthsShort()[index]}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          select
                          label="YYYY"
                          className={classNames(classes.margin, classes.textField, classes.textFieldSmall)}
                          value={this.state.expYear}
                          onChange={this.handleChange("expYear")}
                        >
                          {yearRanges.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          label="Security Code"
                          className={classNames(classes.margin, classes.textField)}
                          value={this.state.securityCode}
                          onChange={(this.state.securityCode.length < 3) ? this.handleChange("securityCode") : null}
                        >
                        </TextField>
                      </div>

                      <div className={classes.inputContainer}>
                        <input
                          type="text" 
                          placeholder="First Name"
                          className={classNames(classes.input, classes.nameInput)}
                          value={firstName} 
                          onChange={this.handleChange("firstName")}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <input
                          type="text" 
                          placeholder="Last Name"
                          className={classNames(classes.input, classes.nameInput)}
                          value={lastName} 
                          onChange={this.handleChange("lastName")}
                        />
                      </div>
                    </div>
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

Payment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Payment);