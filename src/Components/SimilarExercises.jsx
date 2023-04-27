import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercise}) => {
 return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant="h3" mb={"33px"} textTransform={"capitalize"}>
      Exercises That Target The Same Muscle Group
      </Typography>
      <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
      {targetMuscleExercises.length?<HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
      </Stack>
      <Typography variant="h3" mb={"33px"} textTransform={"capitalize"}>
      Exercises That use the same equipment
      </Typography>
      <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
      {equipmentExercise.length?<HorizontalScrollBar data={equipmentExercise}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
