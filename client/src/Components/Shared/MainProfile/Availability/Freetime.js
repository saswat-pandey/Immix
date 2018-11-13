import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        width: '100%',
    },
    checkbox: {
        color: "#4886B0",
        '&$checked': {
            color: "#4886B0",
        },
    },
    checked: {},
    formControl: {
        margin: theme.spacing.unit,
        marginRight: 0,
    },
    availability: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        alignContent: "flex-start",
        margin: 10
    },
    lighter: {
        fontWeight: "Lighter",
        minWidth: "120px",
        display: "flex",
        justifyContent: "center",
    },
    timeformat: {
        border: "solid gray 1px",
        borderRadius: "5px",
        backgroundColor: "white",
        margin: 10,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    },
});
  
//NumberFormat component handling
function NumberFormatCustom(props) {
const { inputRef, onChange, ...other } = props;

return (
    <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={values => {
        onChange({
        target: {
            value: values.value,
        },
        });
    }}
    style={{width: 80, outline: "none"}}
    format="##:##"
    placeholder="hh:mm"
    mask={['h', 'h', 'm','m']}
    />
);
}

NumberFormatCustom.propTypes = {
inputRef: PropTypes.func.isRequired,
onChange: PropTypes.func.isRequired,
};

const meridiemValues = [
    {value: 'AM'},
    {value: 'PM'},
    {value: 'GMT'},
];

class Freetime extends Component {
    constructor(props){
        super(props);
        this.state={
            starttime: '',
            startmeridiem: 'AM',
            endtime: '',
            endMeridiem: 'AM',
            checked: false,
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleCheckChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render() {
        const { classes, dayOfWeek } = this.props;
        const { starttime, startmeridiem, endtime, endMeridiem } = this.state
        return (
            <div className={classes.availability}>
                <Typography variant="title" className={classes.lighter}>{dayOfWeek}</Typography>
                <div className={classes.timeformat}>
                    <TextField
                    className={classes.formControl}
                    value={starttime}
                    onChange={this.handleChange('starttime')}
                    id="starttime-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    />
                    <TextField
                    id="select-startmeridiem-native"
                    select
                    value={startmeridiem}
                    onChange={this.handleChange('startmeridiem')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    margin="normal"
                    >
                    {meridiemValues.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.value}
                        </option>
                    ))}
                    </TextField>
                </div>
                
                {(window.innerWidth > 480) ? <Typography>until</Typography> : null}

                <div className={classes.timeformat}>
                    <TextField
                    className={classes.formControl}
                    value={endtime}
                    onChange={this.handleChange('endtime')}
                    id="endtime-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    />
                    <TextField
                    id="select-endmeridiem-native"
                    select
                    value={endMeridiem}
                    onChange={this.handleChange('endMeridiem')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    margin="normal"
                    >
                    {meridiemValues.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.value}
                        </option>
                    ))}
                    </TextField>
                </div>
                <FormControlLabel
                        control={
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckChange('checked')}
                            value="checked"
                            classes={{
                                root: classes.checkbox,
                                checked: classes.checked,
                              }}
                        />
                        }
                        label="Unavailable"
                    />
            </div>
        )
    }
}

Freetime.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Freetime);