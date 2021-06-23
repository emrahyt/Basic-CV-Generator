import React from 'react'

import CustomTF from '../../Common/CustomTF'

import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#e5e5e5',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 40px'
  },
  grid: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'    
  },
  icon: {
      marginRight: 5
  }
}))
const ContactSection = () => {
    const classes = useStyles()
    return (
            <Grid container className={classes.root}>
                <Grid item xs={3} className={classes.grid}>
                    <EmailIcon className={classes.icon}/>
                    <CustomTF role='Contact' />
                </Grid>
                <Grid item xs={3} className={classes.grid}>
                    <PhoneIphoneIcon className={classes.icon}/>
                    <CustomTF role='Contact' />
                </Grid>
                <Grid item xs={3} className={classes.grid}>
                    <LinkedInIcon className={classes.icon}/>
                    <CustomTF role='Contact' />
                </Grid>
                <Grid item xs={3} className={classes.grid}>
                    <GitHubIcon className={classes.icon}/>
                    <CustomTF role='Contact' />
                </Grid>
            </Grid>
    )
}

export default ContactSection