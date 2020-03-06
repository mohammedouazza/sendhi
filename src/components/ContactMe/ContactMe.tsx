import React from 'react'
import { Slide } from '@material-ui/core'

const ContactMe = (props: any) => {
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div>
                <h1>ContactMe</h1>
            </div>
        </Slide>
    )
}

export default ContactMe