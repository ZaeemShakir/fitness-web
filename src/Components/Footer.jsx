import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Footer = () => {
  return (
    <Box mt={'20px'} bgcolor={'#fff3f4'}>
      <Stack gap={'40px'} alignItems={'center'} px='40px' pt='24px'>
      <img src={Logo} alt="logo" width='60px' height={'60px'}/>
      <Typography variant='h5' pb='40px' mt='20px'>
      Made for practice
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
