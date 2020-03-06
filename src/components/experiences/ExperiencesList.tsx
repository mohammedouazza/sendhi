import React from 'react'
import { Slide } from '@material-ui/core'

const ExperiencesList = (props: any) => {
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div>
                <h1>ExperiencesList</h1>
            </div>
        </Slide>
    )
}

export default ExperiencesList