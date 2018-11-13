import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { StarHalf, People } from '@material-ui/icons/';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import EditLink from './EditLink';
import { withStyles } from '@material-ui/core/styles';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.renderQuestionList = this.renderQuestionList.bind(this);
    this.renderQuestionItems = this.renderQuestionItems.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderExperience = this.renderExperience.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
    this.renderCommitment = this.renderCommitment.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.renderType = this.renderType.bind(this);
  }

  renderQuestionItems(item) {
    return (
      <li key={item.id} style={{
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        maxWidth: 700,
      }}>
        {item.label}
      </li>
    );
  }

  renderListItems(item) {
    return (
      <div key={item.id} style={{
        padding: 5,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4,
        maxWidth: 450,
        color: "white",
        backgroundColor: "#4886B0"
      }}>
        {item.label}
      </div>
    );
  }

  renderSkills() {
    if (this.props.skills.length > 0) {
      const listItems = this.props.skills.map(this.renderListItems);
      return (
        <div style={{display: "flex", margin: 10, flexWrap: "wrap"}}>
          {listItems}
        </div>
      );
    }

    return (<p>Please add the required skills for this project</p>);
  }

  renderQuestionList() {
    if (this.props.questions.length > 0) {
      const listItems = this.props.questions.map(this.renderQuestionItems);
      return <ol style={{margin: 10}}>{listItems}</ol>;
    }

    return (<p>Required Cover Letter</p>);
  }

  renderType() {
    switch(this.props.type) {
      case "oneTime":
        return "One-time project";
        break;

      case "ongoing":
        return "Ongoing project";
        break;

      case "unsure":
        return "Still unsure";
        break;

      default:
        return "Please select the type of project";
        break;
    }
  }

  renderCategory() {
    if (this.props.category) {
      return this.props.category.label;
    } else {
      return "Please choose a category your project belongs to";
    }
  }

  renderPayment() {
    switch (this.props.compensation) {
      case "hourly":
        return "Pay by the hour";
        break;

      case "fixed":
        return "Pay a fixed price";
        break;

      default:
        return "Please select a compensation type";
        break;
    }
  }

  renderExperience() {
    switch (this.props.experience) {
      case "entry":
        return "Entry";
        break;

      case "intermediate":
        return "Intermediate";
        break;

      case "expert":
        return "Expert";
        break;

      default:
        return "Please select a freelancer experience level";
        break;
    }
  }

  renderDuration() {
    switch (this.props.duration) {
      case "short":
        return "Less than 1 month";
        break;

      case "medium":
        return "1-3 months";
        break;

      case "long":
        return "More than 3 months";
        break;

      default:
        return "Please select an expected project duration";
        break;
    }
  }

  renderCommitment() {
    switch (this.props.commitment) {
      case "yes":
        return "More than 30 hrs/week";
        break;

      case "no":
        return "Less than 30 hrs/week";
        break;

      case "unsure":
        return "Still undecided of time commitment";
        break;

      default:
        return "Please choose a desired weekly time commitment";
        break;
    }
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <div style={styles.form}>
          <p style={{fontSize: 25}}>Review and post</p>
          <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step {this.props.onsite ? 11 : 8} of {this.props.onsite ? 11 : 8}</p>
          <hr style={{position: "relative", bottom: 35}}/>
          <div style={{position: "relative", bottom: 20}}>
            <p style={{fontSize: 18, fontWeight: 700}}>Title</p>
            <p style={{fontWeight: 700}}>Job Post Name</p>
            <div style={{float: "right", position: "relative", bottom: 40}}>
              <EditLink to="/newjob/1" />
            </div>
            <p style={{position: "relative", bottom: "10px"}}>{this.props.name || "Please add a title to your project"}</p>
            <p style={{fontWeight: 700}}>Job Category</p>
            <p style={{position: "relative", bottom: "10px"}}>{this.renderCategory()}</p>
          </div>
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 22}}>Description</p>
          <hr style={{position: "relative", bottom: "15px"}} />
          <div style={{float: "right"}}>
            <EditLink to="/newjob/2" />
          </div>
          <p style={{fontWeight: 700}}>Description</p>
          <p style={{position: "relative", bottom: "10px"}}>{this.props.desc || "Please add a description to your project"}</p>
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 22}}>Details</p>
          <hr style={{position: "relative", bottom: "15px"}} />
          <div style={{float: "right"}}>
            <EditLink to="/newjob/3" />
          </div>
          <p style={{fontWeight: 700}}>Type of Project</p>
          <p style={{position: "relative", bottom: "10px"}}>{this.renderType()}</p>
          <p style={{fontWeight: 700}}>Screening Questions</p>
          <p style={{position: "relative", bottom: "10px"}}>{this.renderQuestionList()}</p>
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 22}}>Expertise</p>
          <hr style={{position: "relative", bottom: "15px"}} />
          <div style={{float: "right"}}>
            <EditLink to="/newjob/4" />
          </div>
          <p style={{fontWeight: 700}}>Skills Required</p>
          <div style={{position: "relative", bottom: "10px"}}>{this.renderSkills()}</div>
        </div>
        <div style={styles.form}>
          <p style={{fontSize: 22}}>Budget</p>
          <hr style={{position: "relative", bottom: "15px"}} />
          <div style={{float: "right"}}>
            <EditLink to="/newjob/7" />
          </div>
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p style={{fontWeight: 700}}>Hourly or Fixed</p>
              <p style={{position: "relative", bottom: "25px"}}>{this.renderPayment()}</p>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p style={{fontWeight: 700}}>Experience Level</p>
              <p style={{position: "relative", bottom: "25px"}}>{this.renderExperience()}</p>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p style={{fontWeight: 700}}>Project Duration</p>
              <p style={{position: "relative", bottom: "25px"}}>{this.renderDuration()}</p>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p style={{fontWeight: 700}}>Time Commitment</p>
              <p style={{position: "relative", bottom: "25px"}}>{this.renderCommitment()}</p>
            </div>
          </div>
        </div>
        <div style={styles.form}>
          <div style={{display: "flex"}}>
            <People style={{position: "relative", top: 22, transform: "scale(1.3)", marginRight: 10}}/>
            <p style={{fontSize: 22}}>Coworkers</p>
          </div>
          <hr style={{position: "relative", bottom: "15px"}} />
          <p>Let a coworker help you find, interview and evaluate Freelancers</p>
          <p style={{fontWeight: 700}}>Email</p>
          <FormControl>
            <InputLabel
              FormLabelClasses={{
                root: this.props.classes.cssLabel,
                focused: this.props.classes.cssFocused,
              }}
            >
              Enter emails of coworkers
            </InputLabel>
            <Input
              fullWidth="true"
              multiline="true"
              rows="2"
              onChange={this.props.handleCoworkers}
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
          <p style={{fontWeight: 700, position: "relative", top: 10}}>Message</p>
          <FormControl>
            <InputLabel
              FormLabelClasses={{
                root: this.props.classes.cssLabel,
                focused: this.props.classes.cssFocused,
              }}
            >
              Write a message to your coworker
            </InputLabel>
            <Input
              fullWidth="true"
              multiline="true"
              rows="2"
              onChange={this.props.handleCoworkerMessage}
              id="custom-css-input"
              classes={{
                root: this.props.classes.root,
                underline: this.props.classes.cssUnderline,
              }}
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.coworkerPermission}
                  onChange={this.props.handleCoworkerPermission}
                  value="checked"
                  classes={{
                    checked: this.props.classes.checked,
                  }}
                  style={{marginBottom: 6}}
                />
              }
              label="Also allow the coworkers to hire and pay with this account"
            />
          </FormGroup>
        </div>
        <div style={styles.form}>
          <div style={{display: "flex"}}>
            <StarHalf style={{position: "relative", top: 22, transform: "scale(1.3)", marginRight: 10}}/>
            <p style={{fontSize: 22}}>Feature your job</p>
          </div>
          <hr style={{position: "relative", bottom: "15px"}} />
          <p>Hourly or Fixed! For a one-time fee of $19.95, we will highlight your post and top talent will receive special discounts to work your gig</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.featured}
                  onChange={this.props.handleFeature}
                  value="checked"
                  classes={{
                    checked: this.props.classes.checked,
                  }}
                  style={{marginBottom: 6}}
                />
              }
              label="Yes, charge me to feature my job for $19.95"
            />
          </FormGroup>
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
    flexGrow: 1,
    paddingLeft: 25,
    paddingRight: 25,
    border: "solid 1px black",
    borderRadius: 20
  },
  checked: {
    color: "#4886B0",
    '&$checked': {
      color: "#4886B0"
    }
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

export default withStyles(styles)(Review);
