import React from 'react';
import Button from './Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { PersonPinCircle, Public, Language } from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';
import './Location.css';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.renderTimezones = this.renderTimezones.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderRemote = this.renderRemote.bind(this);
    this.renderOnsite = this.renderOnsite.bind(this);
  }

  componentDidMount() {
    this.props.callback();
  }

  renderList(timezone) {
    return (
      <div
        onClick={() => this.props.cb4(timezone)}
        key={timezone}
        style={{
          marginLeft: 20,
          padding: 5,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          color: "white",
          backgroundColor: "#4886B0"
        }}
        className="listItem"
      >
        {timezone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x
      </div>
    );
  }

  renderTimezones() {
    if (this.props.timezones.length > 0) {
      const listItems = this.props.timezones.map(this.renderList);
      return (
        <div style={{display: "flex"}}>
          {listItems}
        </div>
      );
    }
  }

  renderRemote() {
    return (
      <div>
        <p style={{fontSize: 25}}>Location</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 5 of {this.props.onsite ? 11 : 8}</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>Freelancer location</h3>
          <br />
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-evenly",
            marginTop: 20
          }}>
            <Button
              icon={<PersonPinCircle style={{ width: 50, height: 50 }}/>}
              text="U.S. only"
              text2="Only freelancers in the United States can submit proposals"
              callback={this.props.cb1}
              status={this.props.remoteProjectLocation === "USonly" ? true : false}
            />
            <Button
              icon={<Public style={{ width: 50, height: 50 }}/>}
              text="Worldwide"
              text2="Freelancers in any location can submit proposals"
              callback={this.props.cb2}
              status={this.props.remoteProjectLocation === "worldwide" ? true : false}
            />
          </div>
          <div style={{marginTop: 75}}>
            <h3>Freelancer location (optional)</h3>
            <NativeSelect
              value={this.props.timezones.slice(-1)[0]}
              onChange={this.props.cb3}
              input={<Input name="freelancerLocation" />}
              style={{width: 700}}
            >
              <option value="">Enter time zones</option>
              <option value="UTC">Greenwich Mean Time / Universal Coordinated Time - (UTC)</option>
              <option value="UTC+1:00">European Central Time - (UTC+1:00)</option>
              <option value="UTC+2:00">Eastern European Time - (UTC+2:00)</option>
              <option value="UTC+3:00">Eastern African Time - (UTC+3:00)</option>
              <option value="UTC+3:30">Middle East Time - (UTC+3:30)</option>
              <option value="UTC+4:00">Near East Time - (UTC+4:00)</option>
              <option value="UTC+5:00">Pakistan Lahore Time - (UTC+5:00)</option>
              <option value="UTC+5:30">India Standard Time - (UTC+5:30)</option>
              <option value="UTC+6:00">Bangladesh Standard Time - (UTC+6:00)</option>
              <option value="UTC+7:00">Vietnam Standard Time - (UTC+7:00)</option>
              <option value="UTC+8:00">China Standard Time - (UTC+8:00)</option>
              <option value="UTC+9:00">Japan Standard Time - (UTC+9:00)</option>
              <option value="UTC+9:30">Australia Central Time - (UTC+9:30)</option>
              <option value="UTC+10:00">Australia Eastern Time - (UTC+10:00)</option>
              <option value="UTC+11:00">Solomon Standard Time - (UTC+11:00)</option>
              <option value="UTC+12:00">New Zealand Standard Time - (UTC+12:00)</option>
              <option value="UTC-1:00">Central African Time - (UTC-1:00)</option>
              <option value="UTC-3:00">Argentina Standard Time - (UTC-3:00)</option>
              <option value="UTC-3:30">Canada Newfoundland Time - (UTC-3:30)</option>
              <option value="UTC-4:00">Puerto Rico and US Virgin Islands Time - (UTC-4:00)</option>
              <option value="UTC-5:00">Eastern Standard Time - (UTC-5:00)</option>
              <option value="UTC-6:00">Central Standard Time - (UTC-6:00)</option>
              <option value="UTC-7:00">Mountain Standard Time - (UTC-7:00)</option>
              <option value="UTC-8:00">Pacific Standard Time - (UTC-8:00)</option>
              <option value="UTC-9:00">Alaska Standard Time - (UTC-9:00)</option>
              <option value="UTC-10:00">Hawaii Standard Time - (UTC-10:00)</option>
              <option value="UTC-11:00">Midway Islands Time - (UTC-11:00)</option>
            </NativeSelect>
            <p style={{fontSize: 13}}>These location preferences will be displayed to freelancers, but anyone can submit proposals</p>
            <div style={{display: "flex", flexDirection: "column"}}>
              {this.renderTimezones()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderOnsite() {
    return (
      <div>
        <p style={{fontSize: 25}}>Location</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 5 of 11</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <div style={{marginTop: 30}} className="onsiteForm">
            <h3>Location Name</h3>
            <div style={{position: "relative", left: 168}}>
              <FormControl>
                <InputLabel
                  FormLabelClasses={{
                    root: this.props.classes.cssLabel,
                    focused: this.props.classes.cssFocused,
                  }}
                />
                <Input
                  fullWidth="true"
                  multiline="true"
                  rows="1"
                  onChange={this.props.cb5}
                  value={this.props.onsiteProjectLocation.name}
                  id="custom-css-input"
                  classes={{
                    root: this.props.classes.root,
                    underline: this.props.classes.cssUnderline,
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <h3>Location Number</h3>
            <div style={{position: "relative", left: 150}}>
              <FormControl>
                <InputLabel
                  FormLabelClasses={{
                    root: this.props.classes.cssLabel,
                    focused: this.props.classes.cssFocused,
                  }}
                />
                <Input
                  fullWidth="true"
                  multiline="true"
                  rows="1"
                  onChange={this.props.cb6}
                  value={this.props.onsiteProjectLocation.number}
                  id="custom-css-input"
                  classes={{
                    root: this.props.classes.root,
                    underline: this.props.classes.cssUnderline,
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <h3>Location Type</h3>
            <div style={{position: "relative", left: 180}}>
              <NativeSelect
                input={<Input name="locationType" />}
                style={{position: "relative", top: 10, width: 600}}
                onChange={this.props.cb7}
              >
                <option value="">Commercial</option>
              </NativeSelect>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <h3>Location Address *</h3>
            <div style={{position: "relative", left: 135}}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <FormControl>
                  <InputLabel
                    FormLabelClasses={{
                      root: this.props.classes.cssLabel,
                      focused: this.props.classes.cssFocused,
                    }}
                  >
                    Input address here
                  </InputLabel>
                  <Input
                    fullWidth="true"
                    multiline="true"
                    placeholder=" (ex: 240 W 37th Street, New York, NY)"
                    rows="1"
                    onChange={this.props.cb8}
                    value={this.props.onsiteProjectLocation.address.line1}
                    id="custom-css-input"
                    classes={{
                      root: this.props.classes.root,
                      underline: this.props.classes.cssUnderline,
                    }}
                  />
                </FormControl>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <FormControl>
                    <InputLabel
                      FormLabelClasses={{
                        root: this.props.classes.cssLabel,
                        focused: this.props.classes.cssFocused,
                      }}
                    >
                      Address
                    </InputLabel>
                    <Input
                      fullWidth="true"
                      multiline="true"
                      rows="1"
                      onChange={this.props.cb9}
                      value={this.props.onsiteProjectLocation.address.line2}
                      id="custom-css-input"
                      classes={{
                        root: this.props.classes.root2,
                        underline: this.props.classes.cssUnderline,
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel
                      FormLabelClasses={{
                        root: this.props.classes.cssLabel,
                        focused: this.props.classes.cssFocused,
                      }}
                    >
                      Suite/Floor
                    </InputLabel>
                    <Input
                      fullWidth="true"
                      multiline="true"
                      rows="1"
                      onChange={this.props.cb10}
                      value={this.props.onsiteProjectLocation.address.suiteFloor}
                      id="custom-css-input"
                      classes={{
                        root: this.props.classes.root2,
                        underline: this.props.classes.cssUnderline,
                      }}
                    />
                  </FormControl>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <FormControl>
                    <InputLabel
                      FormLabelClasses={{
                        root: this.props.classes.cssLabel,
                        focused: this.props.classes.cssFocused,
                      }}
                    >
                      City
                    </InputLabel>
                    <Input
                      fullWidth="true"
                      multiline="true"
                      rows="1"
                      onChange={this.props.cb11}
                      value={this.props.onsiteProjectLocation.address.city}
                      id="custom-css-input"
                      classes={{
                        root: this.props.classes.root2,
                        underline: this.props.classes.cssUnderline,
                      }}
                    />
                  </FormControl>
                  <div style={{display: "flex"}}>
                    <FormControl style={{position: "relative", right: 20}}>
                      <InputLabel
                        FormLabelClasses={{
                          root: this.props.classes.cssLabel,
                          focused: this.props.classes.cssFocused,
                        }}
                      >
                        State
                      </InputLabel>
                      <Input
                        fullWidth="true"
                        multiline="true"
                        rows="1"
                        onChange={this.props.cb12}
                        value={this.props.onsiteProjectLocation.address.state}
                        id="custom-css-input"
                        classes={{
                          root: this.props.classes.root3,
                          underline: this.props.classes.cssUnderline,
                        }}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel
                        FormLabelClasses={{
                          root: this.props.classes.cssLabel,
                          focused: this.props.classes.cssFocused,
                        }}
                      >
                        Zip
                      </InputLabel>
                      <Input
                        fullWidth="true"
                        multiline="true"
                        rows="1"
                        onChange={this.props.cb13}
                        value={this.props.onsiteProjectLocation.address.zip}
                        id="custom-css-input"
                        classes={{
                          root: this.props.classes.root3,
                          underline: this.props.classes.cssUnderline,
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                  <FormControl>
                    <InputLabel
                      FormLabelClasses={{
                        root: this.props.classes.cssLabel,
                        focused: this.props.classes.cssFocused,
                      }}
                    >
                      Country
                    </InputLabel>
                    <Input
                      fullWidth="true"
                      multiline="true"
                      rows="1"
                      onChange={this.props.cb14}
                      value={this.props.onsiteProjectLocation.address.country}
                      id="custom-css-input"
                      classes={{
                        root: this.props.classes.root2,
                        underline: this.props.classes.cssUnderline,
                      }}
                    />
                  </FormControl>
                </div>
                <div style={{display: "flex", marginBottom: 225}}>
                  <h2>MAP VIEW OF LOCATION WILL GO HERE</h2>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <h3>Travel Instructions</h3>
            <div style={{position: "relative", left: 150}}>
              <FormControl>
                <InputLabel
                  FormLabelClasses={{
                    root: this.props.classes.cssLabel,
                    focused: this.props.classes.cssFocused,
                  }}
                />
                <Input
                  fullWidth="true"
                  multiline="true"
                  rows="2"
                  onChange={this.props.cb15}
                  value={this.props.onsiteProjectLocation.travelInstructions}
                  id="custom-css-input"
                  classes={{
                    root: this.props.classes.root,
                    underline: this.props.classes.cssUnderline,
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (!this.props.onsite ? this.renderOnsite() : this.renderRemote());
  }
}

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
    width: 600
  },
  root2: {
    width: 275
  },
  root3: {
    width: 125
  }
};

export default withStyles(styles)(Location);
