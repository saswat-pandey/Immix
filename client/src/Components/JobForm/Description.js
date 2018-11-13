import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.renderError = this.renderError.bind(this);
    this.renderCharacters = this.renderCharacters.bind(this);
  }

  renderCharacters() {
    return (
      <p style={{position: "relative", left: 700}}>
      {this.props.desc.length}/6000 characters (minimum 60)
      </p>
    );
  }

  renderError() {
    let words = this.props.desc.split(" ");
    if (words.some(word => word.length > 49)) {
      return (
        <p
          style={{
            fontSize: 15,
            position: "relative",
            bottom: 10,
            color: "red"
          }}
        >
          <span style={{fontWeight: 700}}>!</span> Please limit length of words to less than 50 characters each
        </p>
      );
    }
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <div style={styles.form}>
          <p style={{fontSize: 25}}>Description</p>
          <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 2 of {this.props.onsite ? 11 : 8}</p>
          <hr style={{position: "relative", bottom: 35}}/>
          <FormControl>
            <InputLabel
              FormLabelClasses={{
                root: this.props.classes.cssLabel,
                focused: this.props.classes.cssFocused,
              }}
            >
              Description of your job post
            </InputLabel>
            <Input
              placeholder="A good description includes: What the deliverable is, Type of freelancer you're looking for, Unique things about the project or team members"
              fullWidth="true"
              multiline="true"
              rows="2"
              onChange={this.props.cb1}
              value={this.props.desc}
              id="custom-css-input"
              classes={{
                root: this.props.classes.root,
                underline: this.props.classes.cssUnderline,
              }}
            />
          </FormControl>
          {this.renderError()}
          {this.renderCharacters()}
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 25}}>Attachments</p>
          <p>import files here</p>
        </div>
      </div>
    );
  }
};

const styles = {
  form: {
    backgroundColor: "#F8F8F8",
    marginTop: 25,
    marginRight: 25,
    width: 1000,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    border: "solid 1px black",
    borderRadius: 20
  },
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

export default withStyles(styles)(Description);
