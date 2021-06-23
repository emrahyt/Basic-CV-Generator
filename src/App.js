import React from 'react'
import MainContainer from './Components/MainContainer'
import FirstSection from './Components/Header/FirstSection'
import ContactSection from './Components/Contact/ContactSection'
import Main from './Components/Main/Main'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root:{
    width: '100%',
    height: '100%',
    padding: '30px 0px'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <MainContainer>
        <FirstSection />
        <ContactSection />
        <Main />
      </MainContainer>
    </div>
  );
}

export default App;
