import React from 'react'
import { Paper } from '@material-ui/core'

const Experience = (props: any) => {
    const id = props.match.params.id
    return (
        <div>
            <Paper elevation={3} >
                <h1>Experience - {id}</h1>
            </Paper>
        </div>
    )
}

export default Experience
