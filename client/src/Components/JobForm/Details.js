import React from 'react';
import Button from './Button';
import MultiSelect from "@kenshooui/react-multi-select";
import Modal from '@material-ui/core/Modal';
import {
  TransferWithinAStation,
  ImportantDevices,
  SettingsBackupRestore,
  KeyboardArrowDown
} from '@material-ui/icons/';
import './Details.css';

export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      options: [
        {id: "jobDescription", label: "Do you have any questions about the job description?"},
        {id: "suggestions", label: "Do you have suggestions to make this project run successfully?"},
        {id: "upworkTests", label: "Have you taken any Upwork tests and done well on them that you think are relevant to this job?"},
        {id: "mostChallenging", label: "What challenging part of this job are you most experienced in?"},
        {id: "mostAppealing", label: "What part of this project most appeals to you?"},
        {id: "pastJob", label: "What past project or job have you had that is most like this one and why?"},
        {id: "questions", label: "What questions do you have about the project?"},
        {id: "strongestSkill", label: "Which of the required job skills do you feel you are strongest at?"},
        {id: "mostTimeConsuming", label: "Which part of this project do you think will take the most time?"},
        {id: "whyThisJob", label: "Why did you apply to this particular job?"},
        {id: "goodFit", label: "Why do you think you are a good fit for this particular project?"}
      ]
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  renderChosenQuestionItems(item) {
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

  renderChosenQuestionList() {
    if (this.props.questions.length > 0) {
      const listItems = this.props.questions.map(this.renderChosenQuestionItems);
      return <ol style={{margin: 10}}>{listItems}</ol>;
    }
  }

  renderList(question) {
    return (
      <div
        onClick={() => this.props.cb1(question)}
        key={question.id}
        className="question"
        style={{marginBottom: 15}}
      >
        <div style={{
          height: 16,
          width: 16,
          border: "1px solid gray",
          borderRadius: 3,
          backgroundColor: (this.props.questions.some(q => q.id == question.id) ? "#4886B0" : "white"),
          marginRight: 30
        }}/>
        <span style={{color: ((!this.props.questions.some(q => q.id == question.id) && this.props.questions.length === 5) ?
          "gray" : "black"
        )}}>
          {question.label}
        </span>
      </div>
    );
  }

  renderQuestions() {
    let listItems = this.state.options.map(this.renderList);
    return (
      <div style={{display: "flex", flexDirection: "column", marginTop: 20, marginBottom: 20}}>
        {listItems}
      </div>
    );
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Details</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 3 of {this.props.onsite ? 11 : 8}</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          margin: 20
        }}>
          <Button
            icon={<ImportantDevices style={{ width: 50, height: 50 }}/>}
            text="One-time project"
            callback={this.props.cb2}
            status={this.props.projectStatus === "oneTime" ? true : false}
          />
          <Button
            icon={<TransferWithinAStation style={{ width: 50, height: 50 }}/>}
            text="Ongoing project"
            callback={this.props.cb3}
            status={this.props.projectStatus === "ongoing" ? true : false}
          />
          <Button
            icon={<SettingsBackupRestore style={{ width: 50, height: 50 }}/>}
            text={"I'm not sure"}
            callback={this.props.cb4}
            status={this.props.projectStatus === "unsure" ? true : false}
          />
        </div>
        <div style={{display: "flex"}}>
          <div>
            <p style={{fontSize: 25}}>Additional Screening Questions (optional)</p>
            <div onClick={this.handleOpen} className="button">
              <p style={{padding: 10, color: "#CAD0D3"}}>Add a question</p>
              <KeyboardArrowDown style={{
                position: "relative",
                left: 380,
                bottom: 50
              }}/>
              <hr style={{
                width: 400,
                position: "relative",
                right: 20,
                bottom: 50
              }}/>
            </div>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={{
                position: "relative",
                top: "50px",
                left: "300px",
                backgroundColor: "white",
                width: 800,
                padding: 15
              }}>
                <p style={{fontSize: 24}}>Suggested Questions</p>
                <hr />
                {this.renderQuestions()}
                <p className="cancel" onClick={this.handleClose}>Cancel</p>
                <p style={{fontSize: 12, position: "relative", left: 540}}>
                  You have added {this.props.questions.length} out of 5 questions.
                </p>
              </div>
            </Modal>
          </div>
          <div style={{position: "relative", left: 25, maxWidth: 1000}}>
            <p style={{fontSize: 25}}>Cover Letter</p>
            <p>{"If you don't add any screening questions,"}</p>
            <p style={{position: "relative", bottom: "15px"}}>{"we'll require a cover letter to allow freelancers to introduce themselves."}</p>
          </div>
        </div>
        {this.renderChosenQuestionList()}
      </div>
    );
  }
};
