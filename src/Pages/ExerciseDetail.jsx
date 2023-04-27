import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOption, videoOptions } from "../utils/fetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import { URL_youtubeSearch, URL } from "../utils/Url";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState({});
  const [targetEquipment, setTargetEquipment] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `${URL}/exercise/${id}`,
        exerciseOption
      );setExerciseDetail(exerciseDetailData);
      const exerciseVideoData = await fetchData(
        `${URL_youtubeSearch}/search?query=${exerciseDetailData.name}`,
        videoOptions
      );      setExerciseVideo(exerciseVideoData.contents);
      const targetMuscleExerciseData = await fetchData(
        `${URL}/target/${exerciseDetailData.target}`,
        exerciseOption
      ); setTargetMuscle(targetMuscleExerciseData);
     
      const targetEquipmentExerciseData = await fetchData(
        `${URL}/equipment/${exerciseDetailData.equipment}`,
        exerciseOption
      );
  
      setTargetEquipment(targetEquipmentExerciseData); 
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscle} equipmentExercise={targetEquipment}/>
    </Box>
  );
};
export default ExerciseDetail;
