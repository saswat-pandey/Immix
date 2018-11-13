import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.renderText = this.renderText.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon() {
    if (this.props.icon) {
      return (
        <div style={{position: "relative", right: 7}} align="center" className="icon">
          {this.props.icon}
        </div>
      );
    }
  }

  renderText() {
    if (this.props.icon) {
      if (!this.props.text2) {
        return (
          <div style={{
            position: "relative",
            left: 14,
            color: (this.props.status ? "#4886B0" : "black")
          }}>
            <p style={{paddingBottom: 15}} className="text">{this.props.text}</p>
          </div>
        );
      } else {
        return (
          <div>
            <div style={{
              position: "relative",
              left: 14,
              color: (this.props.status ? "#4886B0" : "black")
            }}>
              <p className="text">{this.props.text}</p>
            </div>
            <div style={{
              position: "relative",
              left: 14,
              color: (this.props.status ? "#4886B0" : "black")
            }}>
              <p style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}} className="text2">{this.props.text2}</p>
            </div>
          </div>
        );
      }
    } else {
      if (!this.props.text2) {
        return (
          <div style={{
            paddingLeft: 35,
            paddingRight: 35,
            paddingBottom: 30,
            color: (this.props.status ? "#4886B0" : "black")
          }}>
            <p className="text">
              {this.props.text}
            </p>
          </div>
        );
      } else {
        return (
          <div style={{
            paddingLeft: 35,
            paddingRight: 35,
            paddingBottom: 30,
            color: (this.props.status ? "#4886B0" : "black")
          }} >
            <div>
              <p className="text">{this.props.text}</p>
            </div>
            <div>
              <p className="text2">{this.props.text2}</p>
            </div>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div
        className="btn-container"
        onClick={this.props.callback}
        style={{
          borderLeft: (this.props.status ? "20px solid #4886B0" : "1px solid gray"),
          borderColor: (this.props.status ? "#4886B0" : "gray")
      }}
      >
        {
          // Make sure icon prop is styled
          // with height and width from parent component
        }
        {this.renderIcon()}
        {this.renderText()}
      </div>
    );
  }
};
