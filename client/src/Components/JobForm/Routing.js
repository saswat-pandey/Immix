import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import './Routing.css';

class Routing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Routing</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 8 of 11</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>Publish</h3>
          <div style={{display: "flex"}} onClick={this.props.cb1} className="publish">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.published}
                    onChange={this.props.cb1}
                    value="checked"
                    classes={{checked: this.props.classes.checked}}
                    style={{marginBottom: 6}}
                  />
                }
              />
            </FormGroup>
            <p style={{position: "relative", right: 12}}>Post to Marketplace</p>
          </div>
          <p>Selecting this option will make the assignment visible to any worker or vendor on IMMIX</p><br />
          <h3>Invite Talent</h3><br />
          <div style={{display: "flex", flexDirection: "column"}}>
            <div className="radio" onClick={() => this.props.cb2({ target: { value: "specific" }})}>
              <Radio
                checked={this.props.inviteTalent === "specific"}
                style={{marginTop: "25px"}}
                onChange={this.props.cb2}
                classes={{checked: this.props.classes.checked}}
                value="specific"
                name="specific"
                aria-label="specific"
              />
              <div className="radio-text">
                <p style={{fontSize: "18px", position: "relative", top: 12}}>Send to Specific Talent</p>
                <p style={{position: "relative", bottom: 12}}>Send assignments to specific Workers, Vendors, or Labor Clouds.</p>
              </div>
            </div>
            <div className="radio" onClick={() => this.props.cb2({ target: { value: "auto" }})}>
              <Radio
                checked={this.props.inviteTalent === "auto"}
                style={{marginTop: "25px"}}
                onChange={this.props.cb2}
                classes={{checked: this.props.classes.checked}}
                value="auto"
                name="auto"
                aria-label="auto"
              />
              <div className="radio-text">
                <p style={{fontSize: "18px", position: "relative", top: 12}}>Auto-Invite</p>
                <p style={{position: "relative", bottom: 12}}>This option will automatically determine the best workers for your assignment.</p>
              </div>
            </div>
            <div
              className="radio"
              style={{borderBottomWidth: "1px"}}
              onClick={() => this.props.cb2({ target: { value: "browse" }})}
            >
              <Radio
                checked={this.props.inviteTalent === "browse"}
                style={{marginTop: "25px"}}
                onChange={this.props.cb2}
                classes={{checked: this.props.classes.checked}}
                value="browse"
                name="browse"
                aria-label="browse"
              />
              <div className="radio-text">
                <p style={{fontSize: "18px", position: "relative", top: 12}}>Browse Talent Marketplace</p>
                <p style={{position: "relative", bottom: 12}}>Search the Talent Marketplace to find the best people for the job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  checked: {
    color: "#4886B0",
    '&$checked': {
      color: "#4886B0"
    }
  }
};

export default withStyles(styles)(Routing);
