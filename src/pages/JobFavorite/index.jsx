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
import CustomDrawer from "components/CustomDrawler";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect } from "react";
import styles from "./../Profile/profile.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PrivateProfile from "./PrivateProfile";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import { useJobs } from "pages/HiredDetail/store";

const tabs = [
  { label: "Việc làm đã ứng tuyển ", value: 0 },
  { label: "Việc làm yêu thích", value: 1 },
];
export default function JobFavorite() {
  const [value, setValue] = React.useState(0);

  useEffect(() => {}, []);

  useEffect(() => {}, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={2.2}>
          <CustomDrawer />
        </Grid>
        <Grid item lg={9.8}>
          <Stack className={styles.dashboard} spacing="50px">
            <Stack spacing="10px">
              <Typography variant="h5">Quản lý việc làm </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Bạn có thể quản lý các công việc yêu thích hoặc công việc đã ứng
                tuyển tại đây
              </Typography>
            </Stack>
            <TabContext value={value}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {tabs.map((t) => (
                  <Tab label={t.label} value={t.value}></Tab>
                ))}
              </Tabs>
              <TabPanel value={0}>
                <PrivateProfile />
              </TabPanel>
              <TabPanel value={1}>
                <PrivateProfile love />
              </TabPanel>
            </TabContext>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
