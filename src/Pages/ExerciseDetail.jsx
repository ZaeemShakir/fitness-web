import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOption } from "../utils/fetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
const ExerciseDetail = () => {
  return (
    <Box>
      <Details />
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  );
};

export default ExerciseDetail;
