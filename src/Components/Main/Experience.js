import React from 'react'

import CustomTF from '../../Common/CustomTF'
import Typography from "@material-ui/core/Typography";


const Experience = () => {
    return (
        <>
        <CustomTF role='Experience Header' />
        <CustomTF role='Company' />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
        <CustomTF role="Date" />
        <CustomTF role='City/State' />
        </div>
        <CustomTF role='Company Description' />
        <Typography style={{
            textAlign: 'left',
            fontStyle: 'italic',
            fontSize: 14,
            fontWeight: 100
        }}>Achievements/Tasks</Typography>
        <CustomTF role='Details'/>
    </>
    )
}

export default Experience