import React from 'react';

export default class Deliverables extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Deliverables</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 6 of 11</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>Instructions</h3>
          <hr />
          <h3>Required deliverables</h3>
        </div>
      </div>
    );
  }
};
