import React from 'react';
import './Nav.css';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div style={{
        display: "flex",
        position: "relative",
        left: 20,
        marginTop: 15,
        marginBottom: 15,
        transform: "scale(0.95)"
      }}>
        <div className="nav" id="back" onClick={this.props.handleSubmit}>Post Job</div>
        <div className="nav" id="next" onClick={this.props.handleDraft}>Save Draft</div>
        <div className="nav" id="next" onClick={this.props.handleTemplate}>Save as Template</div>
      </div>
    );
  }
};
