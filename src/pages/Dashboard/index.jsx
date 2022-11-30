import { Grid } from "@mui/material";
import CustomDrawer from "components/CustomDrawler";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={2}>
          <CustomDrawer />
        </Grid>
        <Grid item lg={10}></Grid>
      </Grid>
      <Footer />
    </>
  );
}
