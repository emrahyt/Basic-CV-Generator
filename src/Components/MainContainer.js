import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '270mm',
        height: 'auto',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fbfefb'
    }
}))

const MainContainer = ({ children }) => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            {children}
        </Container>
    )
}

export default MainContainer