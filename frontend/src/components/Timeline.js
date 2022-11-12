import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

function Timeline({data, current}) {
  return (
    <Stepper className='my-3 pt-6' activeStep={current} alternativeLabel>
    {data.map((date, i) => (
        <Step key={i}>
          <StepLabel icon={ i <= current ? <AdjustOutlinedIcon className={`${i === current ? 'text-purple-600' : ''}`}/> : <FiberManualRecordOutlinedIcon />}>{date}</StepLabel>
        </Step>
    ))}
</Stepper>
  )
}

export default Timeline