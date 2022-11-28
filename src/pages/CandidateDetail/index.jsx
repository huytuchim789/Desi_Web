import React from "react";
import styles from "./../CandidateDetail/CandidateDetail.module.css";
import Footer from "components/Footer";
import Header from "components/Header";
import bgEmail from "images/Outstanding/bg-input.svg";
import { Box, Grid } from "@mui/material";
import CustomCard from "../../components/CustomCard";

function CandidateDetail() {
  return (
    <>
      <Header />
      <Box>
        <img src={bgEmail} alt="bgEmail" className={styles.bgEmail} />
        <Grid container>
          <Grid item lg={5}>
            <CustomCard />
          </Grid>
          <Grid item lg={7}>
            a
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default CandidateDetail;
