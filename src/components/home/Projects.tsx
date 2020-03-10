import React from 'react'
import { makeStyles, GridListTileBar, IconButton } from '@material-ui/core'
import ProjectsImg from '../../img/projects.png'
import ExperiencesImg from '../../img/experiences.jpeg'
import EducationImg from '../../img/education.jpg'
import ContactMeImg from '../../img/contactme.jpg'
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
    let type = props.type
    let img = ProjectsImg
    switch (type) {
      case 'Experiences' : 
        img = ExperiencesImg
        break
      case 'Education' : 
        img = EducationImg
        break
      case 'Contact Me' : 
        img = ContactMeImg
        break
      default :
        img = ProjectsImg
        break
    }
    return (
            <div style={{width: "100%"}}>
                <img src={img} alt={type} width={'100%'}  />
                <GridListTileBar
                title={type}
                titlePosition="top"
                actionPosition="left"
                actionIcon={
                    <IconButton aria-label={`star ${type}`} className={classes.icon}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                className={classes.titleBar}
                />
          </div>
    )
}

export default Projects