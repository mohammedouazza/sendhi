import React from 'react'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles,InputBase, fade } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
  }));

const Links = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
      <Grid container spacing={2} justify="flex-end">
          <Grid item xs={4}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
              <InputBase
                  placeholder="Search…"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Button color="inherit" onClick={()=> history.push('/')}>Home</Button>
            <Button color="inherit" onClick={()=> history.push('/projects')}>Projects</Button>
            <Button color="inherit" onClick={()=> history.push('/experiences')}>Experiences</Button>
            <Button color="inherit" onClick={()=> history.push('/education')}>Education</Button>
            <Button color="inherit" onClick={()=> history.push('/contact')}>Contact me</Button>
          </Grid>
        </Grid>
    )
}

export default Links