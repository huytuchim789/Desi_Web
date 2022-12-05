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
import styles from "./../PasswordChange/profile.module.css";
import PrivateProfile from "./PrivateProfile";

const tabs = [
  { label: "Thông tin cá nhân", value: 0 },
  { label: "Hồ sơ năng lực", value: 1 },
  { label: "Xác thực thông tin", value: 2 },
];
export default function PassChange() {
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
              <Typography variant="h5">Đổi mật khẩu </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Mật khẩu nên được bảo mật cao, chúng tôi khuyên bạn không nên
                đặt mật khẩu trùng với tên và ngày sinh!{" "}
              </Typography>
            </Stack>
            <PrivateProfile />
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
