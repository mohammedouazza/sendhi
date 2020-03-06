import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, AppBar, Toolbar, IconButton, Typography, useScrollTrigger, Slide } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { ToggleSidebar } from '../../store/actions/HeaderActions';
import Links from '../header/Links'
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      background: 'linear-gradient(to right, #ffcc00 -6%, #ff0000 180%)',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      title: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
  }));

const HideOnScroll = (props: any) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const Header = (props: any) => {
    const classes = useStyles();
    
    const handleDrawerOpen = () => {
        //console.log('open')
        props.toggleSidebar();
      };
    
    const open = props.open

    return (
        <HideOnScroll {...props}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.hide)}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Grid item xs={2}>
                  <Typography variant="h6" >
                      Mohammed OUAZZA
                  </Typography>
                </Grid>
                <Links />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

const mapStateToProps = (state: any) => {
    return {
        open: state.header.sidebarOpen
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleSidebar: () => dispatch(ToggleSidebar())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)