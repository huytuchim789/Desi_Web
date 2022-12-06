import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import NewestCard from "../../../components/NewestCard";
import { PRIMARY_COLOR } from "../../../utilities/constant";
import styles from "./../Newest/Newest.module.css";
import ava from "./../../../images/newest/IMG.svg";
import { useJobs } from "pages/HiredDetail/store";
export default function Newest() {
  const { jobs } = useJobs((state) => state);
  return (
    <Box className={styles.newest}>
      <Typography
        sx={{ typography: { lg: "h2", xs: "h4" }, fontWeight: "700" }}
        gutterBottom
      >
        Những công việc
        <span style={{ color: PRIMARY_COLOR }}> mới nhất</span>
      </Typography>
      <Grid container rowSpacing={"50px"} columnSpacing={"50px"}>
        {jobs.map((e) => (
          <Grid item lg={6} xs={12}>
            <NewestCard {...e} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
