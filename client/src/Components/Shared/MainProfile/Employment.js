import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FontAwesome from 'react-fontawesome';

const styles = theme => ({
  root: {
    width: '100%',
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
});

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
  }

  toggleExpansion = () => {
    this.setState({expanded: !this.state.expanded})
  }

  render () {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded}>
          <ExpansionPanelSummary>
            <div style={{display: "flex"}}>
              <FontAwesome
                name={!expanded ? "plus-square" : "minus-square"}
                onClick={this.toggleExpansion}
                size='2x'
                style={{display: "flex", alignItems: "center", paddingRight: 20, color: "#4886B0"}}
              />
              <Typography variant="headline">
                Employment
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
          </ExpansionPanelDetails>

          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

Employment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Employment);