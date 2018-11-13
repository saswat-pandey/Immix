import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FontAwesome from 'react-fontawesome';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Freetime from './Freetime'

const styles = theme => ({
  root: {
    width: '100%',
  },
  lighter: {
    fontWeight: "Lighter",
  },
  details: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  column: {
    flexBasis: '33.33%',
  },
  form: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    border: "solid black 1px",
    margin: 15,
  },
  inputContainer: {
    display: "flex",
    border: "solid gray 1px",
    borderRadius: 2,
    backgroundColor: "white",
  },
  icon: {
    padding: 10,
    background: "#F8F8F8",
    borderRight: "solid gray 1px",
    borderRadius: 2,
    display: "flex",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  menu: {
    width: 200
  },
  dropdown: {
    justifyContent: "center",
  },
  hours: {
    position: "relative",
    left: "2.5%",
    color: "black",
  },
});

const weeklyAvailability = [
  {
    value: "more",
    label :"More than 30 hours/week"
  },
  {
    value: "less",
    label :"Less than 30 hours/week"
  },
  {
    value: "need",
    label: "As Needed - Open to offers"
  }
];

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      availability: "more",
    }
  }

  toggleExpansion = () => {
    this.setState({expanded: !this.state.expanded})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
                Availability
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
              <form noValidate autoComplete="off" className={classes.form}>
                <div className={classes.inputContainer}>
                  <FontAwesome
                          name='clock'
                          size='2x'
                          className={classes.icon}
                  />
                  <TextField
                    id="select-availability"
                    select
                    label="Please Select"
                    className={classes.textField}
                    value={this.state.availability}
                    onChange={this.handleChange('availability')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    {weeklyAvailability.map(option => (
                      <MenuItem key={option.value} value={option.value} className={classes.dropdown}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
                </div>
              </form>

              <form noValidate autoComplete="off" className={classes.form}>
                  <Typography variant="display1" className={classNames(classes.lighter, classes.hours)}>Hours</Typography>
                  <Divider />
                  <Freetime dayOfWeek={"Monday"}/> <Divider />
                  <Freetime dayOfWeek={"Tuesday"}/> <Divider />
                  <Freetime dayOfWeek={"Wednesday"}/> <Divider />
                  <Freetime dayOfWeek={"Thursday"}/> <Divider />
                  <Freetime dayOfWeek={"Friday"}/> <Divider />
                  <Freetime dayOfWeek={"Saturday"}/> <Divider />
                  <Freetime dayOfWeek={"Sunday"}/>
              </form>
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

Availability.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Availability);