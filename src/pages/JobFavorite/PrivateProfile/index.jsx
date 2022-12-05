import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";
import styles from "./../PrivateProfile/index.module.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomUploadFile from "components/CustomUploadFile";
import CustomButton from "components/CustomButton";
import { PRIMARY_COLOR } from "utilities/constant";
import { useJobs } from "pages/HiredDetail/store";
import NewestCard from "components/NewestCard";

export default function PrivateProfile({ love }) {
  const { jobs, setJobs } = useJobs((state) => state);

  return (
    <Grid container rowSpacing={"50px"} columnSpacing={"50px"}>
      {jobs.map((e) => {
        if (e.love === love)
          return (
            <Grid item lg={6} xs={12}>
              <NewestCard {...e} />
            </Grid>
          );
        return undefined;
      })}
    </Grid>
  );
}
