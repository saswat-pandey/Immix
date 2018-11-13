import React from 'react';
import Button from './Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  GroupWork,
  Public,
  ContactPhone,
  PersonPinCircle,
  LooksOne
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "",
      multipleFreelancers: false,
      invitedFreelancers: []
    };
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Visibility</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step {this.props.onsite ? 9 : 6} of {this.props.onsite ? 11 : 8}</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>Project visibility</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: 20
          }}>
            <Button
              icon={<PersonPinCircle style={{ width: 50, height: 50 }}/>}
              text="Only IMMIX freelancers"
              text2="Only IMMIX users can find this job"
              callback={this.props.cb1}
              status={this.props.visibility === "immix" ? true : false}
            />
            <Button
              icon={<Public style={{ width: 50, height: 50 }}/>}
              text="Open to public"
              text2="Anyone can find this job"
              callback={this.props.cb2}
              status={this.props.visibility === "public" ? true : false}
            />
            <Button
              icon={<ContactPhone style={{ width: 50, height: 50 }}/>}
              text="Invite-Only"
              text2="Only freelancers you have invited can find this job"
              callback={this.props.cb3}
              status={this.props.visibility === "inviteOnly" ? true : false}
            />
          </div>
          <br />
          <h3>How many freelancers do you need for this job?</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-evenly",
            marginTop: 20
          }}>
            <Button
              icon={<LooksOne style={{ width: 50, height: 50 }}/>}
              text="One freelancer"
              callback={this.props.cb4}
              status={this.props.freelancers === "one" ? true : false}
            />
            <Button
              icon={<GroupWork style={{ width: 50, height: 50 }}/>}
              text="More than one freelancer"
              callback={this.props.cb5}
              status={this.props.freelancers === "many" ? true : false}
            />
          </div>
          <br />
          <h3>Do you have freelancers that you want to invite?</h3>
          <FormControl>
            <InputLabel
              FormLabelClasses={{
                root: this.props.classes.cssLabel,
                focused: this.props.classes.cssFocused,
              }}
            >
              Select freelancers
            </InputLabel>
            <Input
              fullWidth="true"
              multiline="true"
              rows="2"
              onChange={this.props.cb6}
              id="custom-css-input"
              classes={{
                root: this.props.classes.root,
                underline: this.props.classes.cssUnderline,
              }}
            />
          </FormControl>
          <p style={{fontSize: 12, position: "relative", bottom: 10}}>
            Separate emails using commas
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  cssLabel: {
    '&$cssFocused': {
      color: "black",
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: "black",
    }
  },
  root: {
    width: 950
  }
};

export default withStyles(styles)(Visibility);
