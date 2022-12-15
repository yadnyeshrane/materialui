import React from 'react'
import {Stack, Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import {useState} from 'react'
function MuiButton() {
const [format,setFOrmat]=useState<string[]>([])
  return (
    <>
    <Stack spacing={2} direction='row'>
<Button variant='text' href='https://gooole.com'>Text</Button>
<Button variant='contained' startIcon={<SendIcon/>}>Contained</Button>
<Button variant='outlined' color='secondary'>Outlined</Button>
<IconButton aria-label='send'>
    <SendIcon/>
</IconButton>
    </Stack >
    <Stack direction="row">
        <ButtonGroup orientation='vertical' size='small' color='secondary'>
   <Button variant='contained'>Left</Button>
   <Button variant='contained'>Center</Button>
   <Button variant='contained'>Right</Button>
   </ButtonGroup>
    </Stack>
    <Stack>
         <ToggleButtonGroup value={format}>
            <ToggleButton value='bold' aria-label='bold' >
                <FormatBoldIcon></FormatBoldIcon>
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
                <FormatItalicIcon></FormatItalicIcon>
            </ToggleButton>
         </ToggleButtonGroup>
    </Stack>
    </>
  )
}

export default MuiButton