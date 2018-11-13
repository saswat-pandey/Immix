import React from 'react';
import { Link } from 'react-router-dom';
import {
  Edit,
  Domain,
  FileCopy,
  PinDrop,
  ImageSearch,
  CheckCircleOutline,
  Assignment,
  NetworkCheck,
  CheckCircle,
  Unarchive,
  ShoppingBasket,
  WifiTethering
} from '@material-ui/icons/';
import './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.renderStep = this.renderStep.bind(this);
    this.renderStyle = this.renderStyle.bind(this);
    this.renderOnsiteSteps = this.renderOnsiteSteps.bind(this);
  }

  renderOnsiteSteps() {
    if (this.props.onsite) {
      return (
        <div>
          <div className="container" style={{
            border: (this.props.step === 10 ? "1px solid black" : "0px"),
            padding: (this.props.step === 10 ? 6 : "0px"),
            paddingLeft: (this.props.step === 10 ? 12 : "0px"),
            borderLeft: (this.props.step === 10 ? "10px solid #4886B0" : "0px"),
            width: 235,
            height: 50,
            margin: 0,
            marginRight: 5,
            marginBottom: (this.props.step === 10 ? 30 : 9)
          }}>
            {(this.props.step !== 10 ? <ShoppingBasket style={styles.icon} /> : "")}
            <Link className="nav" to="/newjob/10" style={{
              position: "relative",
              bottom: 12,
              color: (this.props.step === 10 ? "#4886B0" : "black"),
              fontWeight: (this.props.step === 10 ? 700 : 500),
              fontSize: (this.props.step === 10 ? 19 : 18)
            }}>
            <div style={{
              position: "relative",
              top: (this.props.step === 10 ? 20 : 0)
            }}>
              Deliverables
            </div>
            </Link>
            {this.renderStep(this.props.step10, 10)}
          </div>
          <div className="container" style={{
            border: (this.props.step === 11 ? "1px solid black" : "0px"),
            padding: (this.props.step === 11 ? 6 : "0px"),
            paddingLeft: (this.props.step === 11 ? 12 : "0px"),
            borderLeft: (this.props.step === 11 ? "10px solid #4886B0" : "0px"),
            width: 235,
            height: 50,
            margin: 0,
            marginRight: 5,
            marginBottom: (this.props.step === 11 ? 30 : 9)
          }}>
            {(this.props.step !== 11 ? <Unarchive style={styles.icon} /> : "")}
            <Link className="nav" to="/newjob/11" style={{
              position: "relative",
              bottom: 12,
              color: (this.props.step === 11 ? "#4886B0" : "black"),
              fontWeight: (this.props.step === 11 ? 700 : 500),
              fontSize: (this.props.step === 11 ? 19 : 18)
            }}>
            <div style={{
              position: "relative",
              top: (this.props.step === 11 ? 20 : 0)
            }}>
              Shipments
            </div>
            </Link>
            {this.renderStep(this.props.step11, 11)}
          </div>
          <div className="container" style={{
            border: (this.props.step === 12 ? "1px solid black" : "0px"),
            padding: (this.props.step === 12 ? 6 : "0px"),
            paddingLeft: (this.props.step === 12 ? 12 : "0px"),
            borderLeft: (this.props.step === 12 ? "10px solid #4886B0" : "0px"),
            width: 235,
            height: 50,
            margin: 0,
            marginRight: 5,
            marginBottom: (this.props.step === 12 ? 30 : 9)
          }}>
            {(this.props.step !== 12 ? <WifiTethering style={styles.icon} /> : "")}
            <Link className="nav" to="/newjob/12" style={{
              position: "relative",
              bottom: 12,
              color: (this.props.step === 12 ? "#4886B0" : "black"),
              fontWeight: (this.props.step === 12 ? 700 : 500),
              fontSize: (this.props.step === 12 ? 19 : 18)
            }}>
            <div style={{
              position: "relative",
              top: (this.props.step === 12 ? 20 : 0)
            }}>
              Routing
            </div>
            </Link>
            {this.renderStep(this.props.step12, 12)}
          </div>
        </div>
      );
    }
  }

  renderStep(selectedStep, num) {
    if (selectedStep) {
      return (
        <CheckCircle style={{
          color: "#36A000",
          position: "relative",
          left: (this.props.step === num ? "153" : "175"),
          bottom: (this.props.step === num ? "15" : 35)
        }} />
      );
    } else {
      return (
        <CheckCircle style={{
          color: "#C3DBC0",
          position: "relative",
          left: (this.props.step === num ? "153" : "175"),
          bottom: (this.props.step === num ? "15" : 35)
        }} />
      );
    }
  }

  renderStyle() {
    switch (this.props.step) {
      case 1:
        return {
          position: "relative",
          bottom: 60
        };
        break;
      case 2:
        return {
          position: "relative",
          bottom: 60
        };
        break;
      case 3:
        return {
          position: "relative",
          bottom: 70
        };
        break;
      case 4:
        return {
          position: "relative",
          bottom: 65
        };
        break;
      case 5:
        return {
          position: "relative",
          bottom: 80
        };
        break;
      case 6:
        return {
          position: "relative",
          bottom: 109
        };
        break;
      case 7:
        return {
          position: "relative",
          bottom: 157
        };
        break;
      case 8:
        return {
          position: "relative",
          bottom: 333
        };
        break;
      case 100:
        return {
          position: "relative",
          bottom: 56
        };
        break;
      case 101:
        return {
          position: "relative",
          bottom: 172
        };
        break;
    }
  }

  render() {
    return (
      <div
        className="main"
        style={this.renderStyle()}>
        <div className="container" style={{
          border: (this.props.step === 1 ? "1px solid black" : "0px"),
          padding: (this.props.step === 1 ? 3 : "0px"),
          paddingLeft: (this.props.step === 1 ? 12 : "0px"),
          borderLeft: (this.props.step === 1 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 1 ? 30 : 9)
        }}>
          {(this.props.step !== 1 ? <Edit style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/1" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 1 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 1 ? 700 : 500),
            fontSize: (this.props.step === 1 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 1 ? 23 : 0)
          }}>
            Title
          </div>
          </Link>
          {this.renderStep(this.props.step1, 1)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 2 ? "1px solid black" : "0px"),
          padding: (this.props.step === 2 ? 6 : "0px"),
          paddingLeft: (this.props.step === 2 ? 12 : "0px"),
          borderLeft: (this.props.step === 2 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 2 ? 30 : 9)
        }}>
          {(this.props.step !== 2 ? <Domain style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/2" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 2 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 2 ? 700 : 500),
            fontSize: (this.props.step === 2 ? 19 : 18),
            marginLeft: (this.props.step === 2 ? 20 : 0)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 2 ? 20 : 0)
          }}>
            Description
          </div>
          </Link>
          {this.renderStep(this.props.step2, 2)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 3 ? "1px solid black" : "0px"),
          padding: (this.props.step === 3 ? 6 : "0px"),
          paddingLeft: (this.props.step === 3 ? 12 : "0px"),
          borderLeft: (this.props.step === 3 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 3 ? 30 : 9)
        }}>
          {(this.props.step !== 3 ? <FileCopy style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/3" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 3 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 3 ? 700 : 500),
            fontSize: (this.props.step === 3 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 3 ? 20 : 0)
          }}>
            Details
          </div>
          </Link>
          {this.renderStep(this.props.step3, 3)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 4 ? "1px solid black" : "0px"),
          padding: (this.props.step === 4 ? 6 : "0px"),
          paddingLeft: (this.props.step === 4 ? 12 : "0px"),
          borderLeft: (this.props.step === 4 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 4 ? 30 : 9)
        }}>
          {(this.props.step !== 4 ? <Assignment style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/4" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 4 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 4 ? 700 : 500),
            fontSize: (this.props.step === 4 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 4 ? 20 : 0)
          }}>
            Expertise
          </div>
          </Link>
          {this.renderStep(this.props.step4, 4)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 5 ? "1px solid black" : "0px"),
          padding: (this.props.step === 5 ? 6 : "0px"),
          paddingLeft: (this.props.step === 5 ? 12 : "0px"),
          borderLeft: (this.props.step === 5 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 5 ? 30 : 9)
        }}>
          {(this.props.step !== 5 ? <PinDrop style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/5" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 5 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 5 ? 700 : 500),
            fontSize: (this.props.step === 5 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 5 ? 20 : 0)
          }}>
            Location
          </div>
          </Link>
          {this.renderStep(this.props.step5, 5)}
        </div>
        {this.renderOnsiteSteps()}
        <div className="container" style={{
          border: (this.props.step === 6 ? "1px solid black" : "0px"),
          padding: (this.props.step === 6 ? 6 : "0px"),
          paddingLeft: (this.props.step === 6 ? 12 : "0px"),
          borderLeft: (this.props.step === 6 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 6 ? 30 : 9)
        }}>
          {(this.props.step !== 6 ? <ImageSearch style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/6" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 6 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 6 ? 700 : 500),
            fontSize: (this.props.step === 6 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 6 ? 20 : 0)
          }}>
            Visibility
          </div>
          </Link>
          {this.renderStep(this.props.step6, 6)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 7 ? "1px solid black" : "0px"),
          padding: (this.props.step === 7 ? 6 : "0px"),
          paddingLeft: (this.props.step === 7 ? 12 : "0px"),
          borderLeft: (this.props.step === 7 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 7 ? 30 : 9)
        }}>
          {(this.props.step !== 7 ? <NetworkCheck style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/7" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 7 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 7 ? 700 : 500),
            fontSize: (this.props.step === 7 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 7 ? 20 : 0)
          }}>
            Budget
          </div>
          </Link>
          {this.renderStep(this.props.step7, 7)}
        </div>
        <div className="container" style={{
          border: (this.props.step === 8 ? "1px solid black" : "0px"),
          padding: (this.props.step === 8 ? 6 : "0px"),
          paddingLeft: (this.props.step === 8 ? 12 : "0px"),
          borderLeft: (this.props.step === 8 ? "10px solid #4886B0" : "0px"),
          width: 235,
          height: 50,
          margin: 0,
          marginRight: 5,
          marginBottom: (this.props.step === 8 ? 30 : 9)
        }}>
          {(this.props.step !== 8 ? <CheckCircleOutline style={styles.icon} /> : "")}
          <Link className="nav" to="/newjob/8" style={{
            position: "relative",
            bottom: 12,
            color: (this.props.step === 8 ? "#4886B0" : "black"),
            fontWeight: (this.props.step === 8 ? 700 : 500),
            fontSize: (this.props.step === 8 ? 19 : 18)
          }}>
          <div style={{
            position: "relative",
            top: (this.props.step === 8 ? 20 : 0)
          }}>
            Review
          </div>
          </Link>
          {this.renderStep(this.props.step8, 8)}
        </div>
      </div>
    );
  }
};

const styles = {
  icon: {
    position: "relative",
    top: 8
  }
};
