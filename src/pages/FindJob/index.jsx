import {
  Autocomplete,
  Box,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CustomButton from "components/CustomButton";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { PRIMARY_COLOR } from "utilities/constant";
import styles from "./../FindJob/FindJob.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LeftArrow from "images/impress/prev_arrow.svg";
import RightArrow from "images/impress/next_arrow.svg";
import Slider from "react-slick";
const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />;
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <PrevArrow />,
  nextArrow: <img src={RightArrow} alt="" />,
};
const jobs = [
  "Tất cả công việc",
  "Thiết kế nhận diện thương hiệu ",
  "Thiết kế đồ họa truyền thông ",
  "Thiết kế hoạt họa",
  "Thiết kế nội thất ",
];
const prices = [
  "Dưới 500.000 VND",
  "500.000 - 1.500.000 VND",
  "1.500.000 - 3.000.000 VND",
];
const tabs = [
  { label: "Mới Nhất", value: 15, id: "1" },
  { label: "Thiết kế bao bì", value: 15, id: "2" },
  { label: "Thiết kế bao bì", value: 15, id: "3" },
  { label: "Thiết kế bao bì", value: 15, id: "4" },
  { label: "Thiết kế bao bì", value: 15, id: "4" },
  { label: "Thiết kế bao bì", value: 15, id: "4" },
  { label: "Thiết kế nhận diện thương hiệu ", value: 15, id: "5" },
];
export default function FindJob() {
  const [alignment, setAlignment] = React.useState("1");
  const [job, setJob] = React.useState("");
  const [price, setPrice] = React.useState("");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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

        <FormControl sx={{ width: "30%" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            hiddenLabel
            value={job}
            // placeholder="Danh mục công việc"
            displayEmpty
            renderValue={job !== "" ? undefined : () => "Danh mục công việc"}
            onChange={(e) => {
              setJob(e.target.value);
            }}
          >
            <Typography sx={{ padding: "16px 16px" }}>
              Danh mục công việc <span>{` (${jobs.length})`}</span>
            </Typography>
            {jobs.map((job) => (
              <MenuItem className={styles.menu_item} key={job} value={job}>
                {job}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "30%" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            hiddenLabel
            value={price}
            // placeholder="Danh mục công việc"
            displayEmpty
            renderValue={price !== "" ? undefined : () => "Mức giá mong muốn"}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          >
            <Typography sx={{ padding: "16px 16px" }}>
              Danh mục công việc <span>{` (${prices.length})`}</span>
            </Typography>
            {prices.map((price) => (
              <MenuItem key={price} value={price} className={styles.menu_item}>
                {price}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton
          sx={{
            width: { xs: "100%", lg: "initial" },
            backgroundColor: PRIMARY_COLOR,
            whiteSpace: "nowrap",
          }}
          startIcon={<SearchIcon />}
        >
          Tìm kiếm
        </CustomButton>
      </Stack>
      <Box className={styles.main}>
        <ToggleButtonGroup
          fullWidth
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Slider {...settings} className={styles.slider}>
            {tabs.map((tab) => (
              <Box fu>
                <ToggleButton value={tab.id} sx={{ padding: "63px 32px" }}>
                  <Stack>
                    <Typography>{tab.label}</Typography>
                    <Typography variant="body2">{`Số dự án ${tab.value}`}</Typography>
                  </Stack>
                </ToggleButton>
              </Box>
            ))}
          </Slider>
        </ToggleButtonGroup>
      </Box>
      <Footer />
    </>
  );
}
