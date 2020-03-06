import React from 'react'
import { Slide } from '@material-ui/core'

const ProjectsList = (props: any) => {
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div>
                <h1>ProjectsList</h1>
            </div>
        </Slide>
    )
}

export default ProjectsList