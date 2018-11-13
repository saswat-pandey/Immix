import React from 'react';
import Button from './Button';
import {
  MonetizationOn,
  MonetizationOnOutlined,
  AvTimer,
  AttachMoney,
  LocalAtm,
  DateRange,
  Today,
  ViewDay,
  CalendarToday,
  Forward30,
  Replay30
} from '@material-ui/icons';

export default class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Budget</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step {this.props.onsite ? 10 : 7} of {this.props.onsite ? 11 : 8}</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>How would you like to pay your freelancer?</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-evenly",
            margin: 20
          }}>
            <Button
              icon={<AvTimer style={{ width: 50, height: 50 }}/>}
              text="Pay by the hour"
              text2="Popular for ongoing projects"
              callback={this.props.cb1}
              status={this.props.paymentType === "hourly" ? true : false}
            />
            <Button
              icon={<LocalAtm style={{ width: 50, height: 50 }}/>}
              text="Pay a fixed price"
              text2="Popular for one-time projects"
              callback={this.props.cb2}
              status={this.props.paymentType === "fixed" ? true : false}
            />
          </div>
          <br />
          <h3>What level of experience should your freelancer have?</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: 20
          }}>
            <Button
              icon={<AttachMoney style={{ width: 50, height: 50 }}/>}
              text="Entry"
              text2="Less than $22.00/hr"
              callback={this.props.cb3}
              status={this.props.experienceWanted === "entry" ? true : false}
            />
            <Button
              icon={<MonetizationOnOutlined style={{ width: 50, height: 50 }}/>}
              text="Intermediate"
              text2="$22.00 - $40.00/hr"
              callback={this.props.cb4}
              status={this.props.experienceWanted === "intermediate" ? true : false}
            />
            <Button
              icon={<MonetizationOn style={{ width: 50, height: 50 }}/>}
              text="Expert"
              text2="More than $40.00/hr"
              callback={this.props.cb5}
              status={this.props.experienceWanted === "expert" ? true : false}
            />
          </div>
          <br />
          <h3>How long do you expect this project to last?</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: 20
          }}>
            <Button
              icon={<CalendarToday style={{ width: 50, height: 50 }}/>}
              text="Less than 1 month"
              callback={this.props.cb6}
              status={this.props.timeToComplete === "short" ? true : false}
            />
            <Button
              icon={<Today style={{ width: 50, height: 50 }}/>}
              text="1 to 3 months"
              callback={this.props.cb7}
              status={this.props.timeToComplete === "medium" ? true : false}
            />
            <Button
              icon={<DateRange style={{ width: 50, height: 50 }}/>}
              text="More than 3 months"
              callback={this.props.cb8}
              status={this.props.timeToComplete === "long" ? true : false}
            />
          </div>
          <br />
          <h3>Do you have a time requirement for this project?</h3>
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: 20
          }}>
            <Button
              icon={<Forward30 style={{ width: 50, height: 50 }}/>}
              text="More than 30 hrs/week"
              callback={this.props.cb9}
              status={this.props.moreThan30hrs === "yes" ? true : false}
            />
            <Button
              icon={<Replay30 style={{ width: 50, height: 50 }}/>}
              text="Less than 30 hrs/week"
              callback={this.props.cb10}
              status={this.props.moreThan30hrs === "no" ? true : false}
            />
            <Button
              icon={<ViewDay style={{ width: 50, height: 50 }}/>}
              text={"I don't know yet"}
              callback={this.props.cb11}
              status={this.props.moreThan30hrs === "unsure" ? true : false}
            />
          </div>
        </div>
      </div>
    );
  }
};
