import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  menuButton: {
      left: "-20px",
      top: "50px"
  },
  navStyle: {
    display: "flex", 
    flexGrow: 12, 
    justifyContent: "space-around",
  },
  navStyleSmall: {
      display: "flex",
      justifyContent: "space-around"
  },
  navItems: {
    fontWeight: "Lighter",
    fontSize: "22px",
  }, 
  findFreelancers: {
      width: 175,
      margin: -theme.spacing.unit*.7,
      paddingTop: 5,
      fontSize: "21px"
  },
  avatar: {
    cursor: "pointer",
    width: 80,
    height: 80,
    marginTop: 10
  },
  status: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: "#36A000",
    zIndex: 10,
    position: "relative",
    left: 55,
    bottom: 20
  },
  online: {
    '&$onlineChecked': {
        color: "#36A000",
      },
  },
  invisible: {
    '&$invisChecked': {
        color: "gray",
      },
  },
  invisChecked: {},
  onlineChecked: {},
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  formControl: {
    marginLeft: theme.spacing.unit * 3,
  },
  formControlSmall: {
      marginBottom: -25
  },
  icon: {
      color: "#fafafa",
      backgroundColor: "#4886B0",
      padding: "5px",
      borderRadius: "5px"
  },
  fullList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
});

class MenuAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: props.auth,
            anchorEl: null,
            loginVisibility: "Online",
            bottom: false,
            showMenu: false,
        };
    }

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleRadioChange = event => {
        this.setState({ loginVisibility: event.target.value });
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };    

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const largeScreen = (window.innerWidth >= 1440)
        const ToHome = props => <Link to="/" {...props} />
        const ToLogin = props => <Link to="/login" {...props} />
        const ToProfile = props => <Link to="/profile" {...props} />

        const fullList = (
            <div className={classes.fullList}>
                <FormControl component="fieldset" className={classes.formControlSmall}>
                    <RadioGroup
                        aria-label="login-visibility"
                        name="login-visibility"
                        className={classes.group}
                        value={this.state.loginVisibility}
                        onChange={this.handleRadioChange}
                    >
                        <FormControlLabel value="Online" 
                            control={
                                <Radio color="inherit" className={classNames(classes.online, classes.onlineChecked)}
                            />} 
                            label="Online" 
                        />
                        <FormControlLabel value="Invisible" 
                            control={
                                <Radio color="inherit" className={classNames(classes.invisible, classes.invisChecked)}
                            />} 
                            label="Invisible" 
                            style={{
                                position: "relative",
                                bottom: 18,
                            }}
                        />
                    </RadioGroup>
                </FormControl>
                <Divider style={{width: "100%"}}/>
                <List><Typography className={classes.navItems}>WORK</Typography></List>
                <List><Typography className={classes.navItems}>FREELANCERS</Typography></List>
                <List><Typography className={classes.navItems}>REPORTS</Typography></List>
                <List><Typography className={classes.navItems}>MESSAGES</Typography></List>
                <List><Typography className={classes.navItems}>CONTACTS</Typography></List>
            </div>
        );

        return (
        <div className={classes.root}>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            <AppBar position="static" color="inherit">
            <Toolbar>
                <Typography variant="title" className={classes.flex} component={ToHome}>
                    <img src={require("../../assets/logo.png")} 
                        alt="immix-logo"
                        style={{
                            position: "relative",
                            height: 220,
                            margin: -60,
                            marginLeft: -30,
                        }}
                    />
                </Typography>
                
                {auth && (
                    (largeScreen) 
                    ? 
                    (
                    <div className={classes.navStyle}>
                        <Typography className={classes.navItems}>WORK</Typography>
                        <Typography className={classes.navItems}>FREELANCERS</Typography>
                        <Typography className={classes.navItems}>REPORTS</Typography>
                        <Badge className={classes.padding} badgeContent={4} color="secondary">
                            <Typography className={classes.navItems}>MESSAGES</Typography>
                        </Badge>
                        <Badge className={classes.padding} badgeContent={45} color="primary">
                            <Typography className={classes.navItems}>CONTACTS</Typography>
                        </Badge>
                        <TextField
                            className={classes.findFreelancers}
                            placeholder="Find Freelancers"
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    ) : null
                )}

                {!auth && (
                    <Typography>
                    <Button component={ToLogin}>
                        Login
                    </Button>
                    </Typography>
                )}

                {auth && (
                <Fragment>
                    <div>
                        <Avatar
                            alt="DJohnson"
                            src={require("../../assets/djohnson.jpg")}
                            className={classes.avatar}
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                        />
                        <div className={classes.status}></div>
                    </div>

                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    className={classes.menuButton}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose} component={ToProfile}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>

                    {(largeScreen) ? (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="login-visibility"
                            name="login-visibility"
                            className={classes.group}
                            value={this.state.loginVisibility}
                            onChange={this.handleRadioChange}
                        >
                            <FormControlLabel value="Online" 
                                control={
                                    <Radio color="default" className={classNames(classes.online, classes.onlineChecked)}
                                />} 
                                label="Online" 
                            />
                            <FormControlLabel value="Invisible" 
                                control={
                                    <Radio color="default" className={classNames(classes.invisible, classes.invisChecked)}
                                />} 
                                label="Invisible" 
                                style={{
                                    position: "relative",
                                    bottom: 18,
                                }}
                            />
                        </RadioGroup>
                    </FormControl>
                    ) : 
                    <div className={classes.navStyleSmall}>   
                        <Button onClick={this.toggleDrawer('bottom', true)}>
                        <FontAwesome
                            name='bars'
                            size='2x'
                            className={classes.icon}
                        />
                        </Button>
                        <Drawer
                            anchor="bottom"
                            open={this.state.bottom}
                            onClose={this.toggleDrawer('bottom', false)}
                            >
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer('bottom', false)}
                                onKeyDown={this.toggleDrawer('bottom', false)}
                            >
                                {fullList}
                            </div>
                        </Drawer>
                    </div>
                    }
                </Fragment>
                )}
            </Toolbar>
            </AppBar>
        </div>
        );
    }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);