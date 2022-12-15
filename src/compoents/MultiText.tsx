import { Stack ,TextField} from '@mui/material'
import React from 'react'

function MultiText() {
  return (
    <Stack spacing={4}>
     <Stack direction="row" spacing={2}>
       <TextField label="name"/>
       <TextField label="name" variant='filled'/>
       <TextField label="name" variant='standard'/>
     </Stack>

     <Stack direction="row" spacing={2}>
       <TextField label="name" size='small' color='secondary'/>
       <TextField label="name" required/>
       <TextField label="name" required helperText="Do not share your password"/>
       
     </Stack>
    </Stack>
  )
}

export default MultiText