import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class SadResultMessage extends Component {
    render() {
        return (
            <Paper >
                <div className='errorPaper'>
                    <Typography variant="headline" component="h3">
                        {this.props.heading}
                    </Typography>
                    <Typography component="p">
                        {this.props.content}
                    </Typography>
                </div>
            </Paper>
        )
    }
}


export default (SadResultMessage)