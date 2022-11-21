import {
  Autocomplete,
  FilledInput,
  Input,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import styles from "./../FindJob/FindJob.module.css";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994, id: "1" },
  { label: "The Godfather", year: 1972, id: "2" },
  { label: "The Godfather: Part II", year: 1974, id: "3" },
  { label: "The Dark Knight", year: 2008, id: "4" },
];
export default function FindJob() {
  return (
    <>
      <Header />
      <Stack
        direction="row"
        className={styles.findJob}
        justifyContent="space-between"
      >
        <OutlinedInput
          required
          id="outlined-required"
          hiddenLabel
          placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
          sx={{ width: "30%" }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: "30%" }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          defaultValue="3"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          sx={{ width: "30%" }}
          defaultValue="3"
        />
      </Stack>
      <Footer />
    </>
  );
}
