import React from 'react';
import Button from './Button';
import {
  NaturePeople,
  Cloud,
  DesktopMac,
  DesktopWindows,
  DevicesOther,
  Highlight,
  Build,
  DeveloperBoard
} from '@material-ui/icons/';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Summary</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <h3>What types of projects do you have?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly",
          margin: 20
        }}>
          <Button
            icon={<Cloud style={{ width: 50, height: 50 }}/>}
            text="Remote"
            callback={this.props.cb1}
            status={this.props.jobType === "remote" ? true : false}
          />
          <Button
            icon={<NaturePeople style={{ width: 50, height: 50 }}/>}
            text="Onsite"
            callback={this.props.cb2}
            status={this.props.jobType === "onsite" ? true : false}
          />
        </div>
        <br />
        <h3>Which operating system(s) does this application work on?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          margin: 20
        }}>
          <Button
            icon={<DesktopWindows style={{ width: 50, height: 50 }}/>}
            text="Windows"
            callback={this.props.cb3}
            status={this.props.usesWindows === true ? true : false}
          />
          <Button
            icon={<DesktopMac style={{ width: 50, height: 50 }}/>}
            text="Mac"
            callback={this.props.cb4}
            status={this.props.usesMac === true ? true : false}
          />
          <Button
            icon={<DevicesOther style={{ width: 50, height: 50 }}/>}
            text="Linux/Unix"
            callback={this.props.cb5}
            status={this.props.usesLinux === true ? true : false}
          />
        </div>
        <br />
        <h3>Do you need to integrate with any APIs?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          margin: 20
        }}>
          <Button
            text="Payment Processor"
            text2="PayPal, Stripe, etc."
            callback={this.props.cb6}
            status={this.props.paymentAPI === true ? true : false}
          />
          <Button
            text="Cloud Storage"
            text2="Dropbox, Box, etc."
            callback={this.props.cb7}
            status={this.props.cloudAPI === true ? true : false}
          />
            <Button
              text="Social Media"
              text2="Facebook, Twitter, etc."
              callback={this.props.cb8}
              status={this.props.socialMediaAPI === true ? true : false}
            />
        </div>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly",
          margin: 20,
          marginTop: 25
        }}>
          <Button
            text="Other"
            text2="Other APIs"
            callback={this.props.cb9}
            status={this.props.otherAPI === true ? true : false}
          />
        </div>
        <br />
        <h3>What stage is the project in?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          margin: 20
        }}>
          <Button
            icon={<DeveloperBoard style={{ width: 50, height: 50 }}/>}
            text="I have specifications"
            callback={this.props.cb10}
            status={this.props.appStage === "specifications" ? true : false}
          />
          <Button
            icon={<Build style={{ width: 50, height: 50 }}/>}
            text="I have designs"
            callback={this.props.cb11}
            status={this.props.appStage === "designs" ? true : false}
          />
          <Button
            icon={<Highlight style={{ width: 50, height: 50 }}/>}
            text="I just have a concept"
            callback={this.props.cb12}
            status={this.props.appStage === "concept" ? true : false}
          />
        </div>
      </div>
    );
  }
};
