import React from 'react'
import { makeStyles, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import ProjectsImg from '../../img/projects.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
  }));
  
const Projects = (props: any) => {
    const classes = useStyles();

    return (
            <GridListTile >
                <img src={ProjectsImg} alt={'projects'} width={'100%'} />
                <GridListTileBar
                title={'projects'}
                titlePosition="top"
                actionPosition="left"
                actionIcon={
                    <IconButton aria-label={`star ${'projects'}`} className={classes.icon}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                className={classes.titleBar}
                />
          </GridListTile>
    )
}

export default Projects