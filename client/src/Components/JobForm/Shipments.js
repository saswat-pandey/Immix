import React from 'react';
import Radio from '@material-ui/core/Radio';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import './Shipments.css';

class Shipments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trackingNumber: "",
      price: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleTrackingNumber = this.handleTrackingNumber.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.renderParts = this.renderParts.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  renderListItems(part) {
    return (
      <div key={part.trackingNumber} className="part" onClick={() => this.props.cb4(part)}>
        X&nbsp;&nbsp;&nbsp;
        ${part.price} {part.name} - Tracking #: {part.trackingNumber}
      </div>
    );
  }

  renderParts() {
    if (this.props.parts.length > 0) {
      const listItems = this.props.parts.map(this.renderListItems);
      return (
        <div className="parts-list">
          {listItems}
        </div>
      );
    }
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleTrackingNumber(e) {
    this.setState({ trackingNumber: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Shipments</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 7 of 11</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <div style={{display: "flex"}}>
            <h3>Delivery*</h3>
            <div className="radio-container">
              <div className="radio-btn" onClick={() => this.props.cb2({ target: { value: "shipped" }})}>
                <Radio
                  checked={this.props.partsDelivery === "shipped"}
                  onChange={this.props.cb2}
                  classes={{checked: this.props.classes.checked}}
                  value="shipped"
                  name="shipped"
                  aria-label="shipped"
                />
                <p>Parts are being shipped</p>
              </div>
              <div className="radio-btn" onClick={() => this.props.cb2({ target: { value: "worker" }})}>
                <Radio
                  checked={this.props.partsDelivery === "worker"}
                  onChange={this.props.cb2}
                  classes={{checked: this.props.classes.checked}}
                  value="worker"
                  name="worker"
                  aria-label="worker"
                />
                <p>Worker will supply parts</p>
              </div>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <h3>Shipping Destination*</h3>
            <NativeSelect
              input={<Input name="shippingDestination" />}
              style={{position: "relative", width: 600, marginLeft: 100}}
            >
              <option value="">Shipped to Worker</option>
            </NativeSelect>
          </div>
          <div style={{display: "flex"}}>
            <h3>Worker must return original parts</h3>
            <Switch
              checked={this.props.returnParts}
              onChange={this.props.cb1}
              value="checked"
              style={{position: "relative", top: 5}}
            />
            <p style={{
              fontSize: "18px",
              position: "relative",
              top: 5
            }}>
              {(this.props.returnParts ? "Yes, the worker must return original parts"
                : "No, the worker doesn't have to return original parts")}
            </p>
          </div>
          <h3>Tracking information</h3>
          <div style={{display: "flex"}}>
            <FormControl>
              <InputLabel
                FormLabelClasses={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Part Name
              </InputLabel>
              <Input
                onChange={this.handleName}
                value={this.state.name}
                id="custom-css-input"
                classes={{
                  root: this.props.classes.root,
                  underline: this.props.classes.cssUnderline,
                }}
              />
            </FormControl>
            <FormControl style={{marginLeft: "25px"}}>
              <InputLabel
                FormLabelClasses={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Tracking Number
              </InputLabel>
              <Input
                onChange={this.handleTrackingNumber}
                value={this.state.trackingNumber}
                id="custom-css-input"
                classes={{
                  root: this.props.classes.root2,
                  underline: this.props.classes.cssUnderline,
                }}
              />
            </FormControl>
            <FormControl style={{marginLeft: "25px"}}>
              <InputLabel
                FormLabelClasses={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Price
              </InputLabel>
              <Input
                onChange={this.handlePrice}
                value={this.state.price}
                id="custom-css-input"
                classes={{
                  root: this.props.classes.root,
                  underline: this.props.classes.cssUnderline,
                }}
              />
            </FormControl>
            <div className="add" onClick={() => this.props.cb3(this.state)}>
              <span style={{position: "relative", top: 12}}>ADD</span>
            </div>
          </div>
          {this.renderParts()}
        </div>
      </div>
    );
  }
};

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
    width: 188
  },
  root2: {
    width: 350
  },
  checked: {
    color: "#4886B0",
    '&$checked': {
      color: "#4886B0"
    }
  }
};

export default withStyles(styles)(Shipments);
