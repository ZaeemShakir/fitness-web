import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";
const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.{` `}
          {name}
          {` `}is one of the best exerises to target {target}. it will improve
          your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction={"row"}
            gap={"24px"}
            alignItems={"center"}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "100%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} style={{width:'50px',heigh:'50px'}}/>
            </Button>
            <Typography textTransform="capitalize" variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
