import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'

import ImageUpload from './ImageUpload'

const useStyles = makeStyles(() => ({    
    paper: {
        width: 800,
        height: 600
    }
}))

const ImageUploadDialog = ({ open, onClose, setCroppedImage }) => {
    const classes = useStyles()
    return (
        <Dialog
                open={open}
                onClose={onClose}
                classes={{ paper: classes.paper }}
            >
                <ImageUpload setImage={setCroppedImage} onClose={onClose}/>
            </Dialog>
    )
}

export default ImageUploadDialog