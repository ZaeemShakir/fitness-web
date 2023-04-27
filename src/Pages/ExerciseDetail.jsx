import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOption } from "../utils/fetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import {URL_youtubeSearch,URL} from '../utils/Url'
const ExerciseDetail = () => {
  const[exerciseDetail,setExerciseDetail]=useState({})
  const{id}=useParams();
useEffect(()=>{
const fetchExercisesData=async()=>{
const exerciseDetailData=await fetchData(`${URL}/exercise/${id}`,exerciseOption)
setExerciseDetail(exerciseDetailData);
}
fetchExercisesData();
},[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  );
};

export default ExerciseDetail;
