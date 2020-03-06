import React from 'react'
import { Slide } from '@material-ui/core'

const EducationList = (props: any) => {
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div>
                <h1>EducationList</h1>
            </div>
        </Slide>
    )
}

export default EducationList