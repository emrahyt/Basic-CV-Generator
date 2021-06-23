import React from 'react'
import ImagePart from './ImageSection/ImagePart'
import TextPart from './HeaderSection/TextPart'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'flex-start',
    }
}))

const FirstSection = () => {
    const classes= useStyles()
    return (
        <div className={classes.root}>
            <ImagePart />
            <TextPart />
        </div>
    )
}

export default FirstSection