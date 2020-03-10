import React from 'react'
import { Slide, GridList, makeStyles, GridListTile, GridListTileBar } from '@material-ui/core'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddExperience from './AddExperience';

const useStyles = makeStyles(theme => ({
    gridList: {
      
      //flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    
  }));
  

const ExperiencesList = (props: any) => {
    const classes = useStyles();
    const { experiences } = props
    console.log(experiences, props)
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div>
              
              <AddExperience />
              
              <GridList className={classes.gridList} cols={1} cellHeight="auto" >
                  { experiences && experiences.map((experience: any) => (
                      <Link to={'experience/'+experience.key} key={experience.key}>
                          <GridListTile  cols={1}>
                              
                              <img src={experience.img} alt={experience.title} width="100%" height="100%"/>
                              <GridListTileBar
                              title={<div className="text-center">{experience.title}</div> }
                              subtitle={<span>{experience.job}</span>}
                              className={classes.titleBar}
                              />
                              
                          </GridListTile>
                      </Link>
                  ))}
              </GridList>
            </div>
        </Slide>
    )
}

const mapStateToProps = (state: any) => {
  console.log(state)
    return {
        experiences: state.experience.experiences
    }
}
export default connect(mapStateToProps)(ExperiencesList)