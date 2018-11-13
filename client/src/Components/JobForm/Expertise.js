import React from 'react';
import './Expertise.css';

export default class Expertise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      unwantedSkill: "",
      options: [
        {id: "C#", label: "C#"},
        {id: "C++", label: "C++"},
        {id: "JavaScript", label: "JavaScript"},
        {id: "Windows", label: "Windows App Development"},
        {id: ".NET", label: ".NET Framework"},
        {id: "CCNA", label: "Cisco Certified Network Associate"},
        {id: "WHMCS", label: "WHMCS Development"}
      ]
    };

    this.search = this.search.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.searchUnwanted = this.searchUnwanted.bind(this);
    this.renderUnwantedSearchResults = this.renderUnwantedSearchResults.bind(this);
    this.renderUnwantedList = this.renderUnwantedList.bind(this);
    this.renderUnwantedSkills = this.renderUnwantedSkills.bind(this);
    this.renderUnwantedListItems = this.renderUnwantedListItems.bind(this);
  }

  renderUnwantedListItems(item) {
    return (
      <div
        key={item.id}
        className="skill"
        onClick={() => this.props.cb2(item)}
        style={{
          padding: 5,
          paddingLeft: 12,
          paddingRight: 12,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 4,
          maxWidth: 450,
          color: "black",
          backgroundColor: "#E0E0E0"
      }}>
        {item.label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x
      </div>
    );
  }

  renderUnwantedSkills() {
    if (this.props.unwantedSkills.length > 0) {
      const listItems = this.props.unwantedSkills.map(this.renderUnwantedListItems);
      return (
        <div style={{display: "flex", marginRight: 10, flexWrap: "wrap", marginBottom: 20}}>
          {listItems}
        </div>
      );
    }
  }

  renderUnwantedList(skill) {
    return (
      <div
        onClick={() => this.props.cb2(skill)}
        key={skill.id}
        className="skill"
        style={{marginBottom: 15, display: "flex"}}
      >
        <div style={{
          height: 16,
          width: 16,
          border: "1px solid gray",
          borderRadius: 3,
          backgroundColor: (this.props.unwantedSkills.some(s => s.id == skill.id) ? "#4886B0" : "white"),
          marginRight: 30
        }}/>
        <span style={{color: ((!this.props.unwantedSkills.some(s => s.id == skill.id)) ?
          "gray" : "black"
        )}}>
          {skill.label}
        </span>
      </div>
    );
  }

  renderUnwantedSearchResults() {
    let filteredList = this.state.options.filter(item => {
      return (item.label.includes(this.state.unwantedSkill) && this.props.skills.every(skill => skill.id != item.id));
    });
    let listItems = filteredList.map(this.renderUnwantedList);
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: 15
      }}>
        {listItems}
      </div>
    );
  }

  searchUnwanted(e) {
    this.setState({ unwantedSkill: e.target.value });
  }

  renderSkills() {
    if (this.props.skills.length > 0) {
      const listItems = this.props.skills.map(this.renderListItems);
      return (
        <div style={{display: "flex", marginRight: 10, flexWrap: "wrap", marginBottom: 20}}>
          {listItems}
        </div>
      );
    }
  }

  renderListItems(item) {
    return (
      <div
        key={item.id}
        className="skill"
        onClick={() => this.props.cb1(item)}
        style={{
          padding: 5,
          paddingLeft: 12,
          paddingRight: 12,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 4,
          maxWidth: 450,
          color: "white",
          backgroundColor: "#4886B0"
      }}>
        {item.label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x
      </div>
    );
  }

  renderList(skill) {
    return (
      <div
        onClick={() => this.props.cb1(skill)}
        key={skill.id}
        className="skill"
        style={{marginBottom: 15, display: "flex"}}
      >
        <div style={{
          height: 16,
          width: 16,
          border: "1px solid gray",
          borderRadius: 3,
          backgroundColor: (this.props.skills.some(s => s.id == skill.id) ? "#4886B0" : "white"),
          marginRight: 30
        }}/>
        <span style={{color: ((!this.props.skills.some(s => s.id == skill.id)) ?
          "gray" : "black"
        )}}>
          {skill.label}
        </span>
      </div>
    );
  }

  renderSearchResults() {
    let filteredList = this.state.options.filter(item => {
      return (item.label.includes(this.state.searchTerm) && this.props.unwantedSkills.every(skill => skill.id != item.id));
    });
    let listItems = filteredList.map(this.renderList);
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: 15
      }}>
        {listItems}
      </div>
    );
  }

  search(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Expertise</p>
        <p style={{fontSize: 13, position: 'relative', bottom: '25px'}}>Step 4 of {this.props.onsite ? 11 : 8}</p>
        <hr style={{position: "relative", bottom: 35}}/>
        <div style={{position: "relative", bottom: 25}}>
          <h3>What skills and expertise are most important to you?</h3>
          {this.renderSkills()}
          <div style={{display: "flex", flexDirection: "column"}}>
            <input
              type="text"
              onChange={this.search}
              style={{width: 946, height: 40, padding: 5, fontSize: 14}}
              placeholder="Type to add a different skill"
              value={this.state.searchTerm}
            />
            <div style={{
              backgroundColor: "white",
              width: 946,
              borderRadius: 3
            }}>
              {(this.state.searchTerm.length > 0 ? this.renderSearchResults() : "")}
            </div>
          </div>
        </div>
        <div style={{position: "relative", bottom: 25}}>
          <h3>{"Not what you're looking for?"}</h3>
          {this.renderUnwantedSkills()}
          <div style={{display: "flex", flexDirection: "column"}}>
            <input
              type="text"
              onChange={this.searchUnwanted}
              style={{width: 946, height: 40, padding: 5, fontSize: 14}}
              placeholder="Type to select a skill you don't want"
              value={this.state.unwantedSkill}
            />
            <div style={{
              backgroundColor: "white",
              width: 946,
              borderRadius: 3
            }}>
              {(this.state.unwantedSkill.length > 0 ? this.renderUnwantedSearchResults() : "")}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
