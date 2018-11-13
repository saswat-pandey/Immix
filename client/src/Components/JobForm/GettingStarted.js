import React from 'react';
import { Work, FileCopy, SwapCalls } from '@material-ui/icons/';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from './Button';

export default class GettingStarted extends React.Component {
  constructor(props) {
    super(props);

    this.renderDropdown = this.renderDropdown.bind(this);
  }

  renderDropdown() {
    switch (this.props.type) {
      case "existing":
        return  (
          <div>
            <h3 style={{position: "relative", left: 30, marginTop: 40}}>Select existing draft</h3>
            <NativeSelect
              onChange={this.props.cb5}
              input={<Input name="existingDraft" />}
              style={{width: 700, position: "relative", left: 30}}
            >
              <option value="">Replacement of Harddrive on a Mac</option>
            </NativeSelect>
          </div>
        );
        break;

      case "previous":
        return (
          <div>
            <h3 style={{position: "relative", left: 30, marginTop: 40}}>Reopen previous job</h3>
            <NativeSelect
              onChange={this.props.cb6}
              input={<Input name="previousJob" />}
              style={{width: 700, position: "relative", left: 30}}
            >
              <option value="">Replacement of Harddrive on a Mac</option>
            </NativeSelect>
          </div>
        );
        break;

      default:
        break;
    }
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Getting Started</p>
        <hr style={{position: "relative", bottom: 20}}/>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          margin: 20
        }}>
          <Button
            icon={<Work style={{ width: 50, height: 50 }}/>}
            text="Create a new job post"
            callback={this.props.cb2}
            status={this.props.type === "new" ? true : false}
          />
          <Button
            icon={<FileCopy style={{ width: 50, height: 50 }}/>}
            text="Edit an existing job post"
            callback={this.props.cb3}
            status={this.props.type === "existing" ? true : false}
          />
          <Button
            icon={<SwapCalls style={{ width: 50, height: 50 }}/>}
            text="Reuse a previous job post"
            callback={this.props.cb4}
            status={this.props.type === "previous" ? true : false}
          />
        </div>
        {this.renderDropdown()}
      </div>
    );
  }
};
