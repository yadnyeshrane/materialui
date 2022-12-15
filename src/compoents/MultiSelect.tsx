import {Box,TextField,MenuItem} from '@mui/material'
import React, { useState } from 'react'

function MultiSelect() {
    const[country,setCountry]=useState('');
  return (
    <Box width="250px">
    <TextField label="select country" select value={country}>
     <MenuItem>India</MenuItem>
     <MenuItem>Us</MenuItem>
     <MenuItem>Australia</MenuItem>
     <MenuItem>India</MenuItem>
    </TextField>
    </Box>
  )
}

export default MultiSelect