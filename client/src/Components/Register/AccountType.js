import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
      backgroundColor: "#006CBC",
      color: "white",
      padding: 20,
      borderRadius: "5%",
  },
  highlight: {
    backgroundColor: "#4caf50",
    cursor: "pointer"
  },
  selected: {
    backgroundColor: "#4caf50",
  },
  row: {
      display: "flex",
  },
  paddingLeft: {
      paddingLeft: 20
  },
  paddingRight: {
      paddingRight: 20
  }
});

class AccountType extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientHover: false,
            freelancerHover: false,
            clientSelect: false,
            freelancerSelect: false
        }
    }

    render () {
        const { classes } = this.props;
        const {clientHover, freelancerHover, clientSelect, freelancerSelect} = this.state;

        return (
            <div className={classNames(classes.row)}>
                <div className={classes.paddingRight} onClick={(e) => {
                    this.props.handleAccountType(e, "client");
                        this.setState({
                            clientSelect: true,
                            freelancerSelect: false
                        });
                    }}>
                    <FontAwesome
                        className={classNames(classes.icons, 
                            (clientHover) ? (classes.highlight) : null,
                            (clientSelect) ? (classes.selected) : null
                        )}
                        onMouseEnter={() => {this.setState({clientHover: true})}}
                        onMouseLeave={() => {this.setState({clientHover: false})}}
                        name='users'
                        size='5x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <Typography variant="subheading" className={classNames(classes.root, classes.alignCenter)}>
                        Client
                    </Typography>
                </div>
                <div className={classes.paddingLeft} onClick={(e) => {
                    this.props.handleAccountType(e, "freelancer");
                        this.setState({
                            freelancerSelect: true,
                            clientSelect: false
                        });
                    }}>
                    <FontAwesome
                        className={classNames(classes.icons, 
                            (freelancerHover) ? (classes.highlight) : null,
                            (freelancerSelect) ? (classes.highlight) : null
                        )}
                        onMouseEnter={() => {this.setState({freelancerHover: true})}}
                        onMouseLeave={() => {this.setState({freelancerHover: false})}}
                        name='briefcase'
                        size='5x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <Typography variant="subheading" className={classNames(classes.root, classes.alignCenter)}>
                        Freelancer
                    </Typography>
                </div>
            </div>
            );
    }
    
}

AccountType.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountType);
