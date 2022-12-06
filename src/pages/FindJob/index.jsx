import {
  Autocomplete,
  Box,
  FilledInput,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
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
import React, { useEffect, useState } from "react";
import { cardsData, PRIMARY_COLOR } from "utilities/constant";
import styles from "./../FindJob/FindJob.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LeftArrow from "images/impress/prev_arrow.svg";
import RightArrow from "images/impress/next_arrow.svg";
import Slider from "react-slick";

import NewestCard from "components/NewestCard";
import { useJobs } from "pages/HiredDetail/store";
const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />;
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <PrevArrow />,
  nextArrow: <img src={RightArrow} alt="" />,
};
const jobsSelect = [
  { label: "Tất cả công việc", value: "all" },
  { label: "Thiết kế nhận diện thương hiệu ", value: "brand" },
  { label: "Thiết kế hoạt họa", value: "design" },
  { label: "Thiết kế nội thất ", value: "infra" },
];
const prices = [
  { label: "Dưới 500.000 VND", value: [0, 500000] },
  { label: "500.000 - 1.500.000 VND", value: [500000, 1500000] },
  { label: "1.500.000 - 3.000.000 VND", value: [1500000, 3000000] },
  { label: "Trên 3.000.000 VND", value: [3000000, 999999999999] },
];
const tabs = [
  { label: "Mới Nhất", value: "newest", count: "1" },
  { label: "Thiết kế bao bì", value: "design", count: "2" },
  { label: "Thiết kế nội thất", value: "infra", count: "3" },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  { label: "Thiết kế nhận diện thương hiệu ", value: "brand", count: "5" },
];
export default function FindJob() {
  const [alignment, setAlignment] = React.useState("newest");
  const [job, setJob] = React.useState();
  const [price, setPrice] = React.useState();
  const [search, setSearch] = useState("");
  const { jobs, setJobs } = useJobs((state) => state);
  const handleChange = (event, newAlignment) => {
    console.log(newAlignment);
    setAlignment(newAlignment);
    filterAlign(cardsData, newAlignment);
  };
  const filterSalary = (cards, price) => {
    let newPrice = price;
    let newDataCards = cards;
    console.log(cards, price);
    const newData = newDataCards
      .filter((c) => {
        if (newPrice) return c.salary > newPrice[0] && c.salary < newPrice[1];
        return true;
      })
      .filter((c) => {
        if (job) return c.jobKey === job;
        return true;
      })
      .filter((c) => {
        if (search) return c.name.includes(search);

        return true;
      })
      .filter((c) => {
        if (alignment) return c.category === alignment;
        return true;
      });
    setJobs(newData);
  };
  const filterJob = (cards, job) => {
    let newDataCards = cards;
    const newData = newDataCards
      .filter((c) => {
        if (job) return c.jobKey === job;
        return true;
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1];
        return true;
      })
      .filter((c) => {
        if (search) return c.name.includes(search);

        return true;
      })
      .filter((c) => {
        if (alignment) return c.category === alignment;
        return true;
      });
    setJobs(newData);
  };
  const filterSearch = (cards, search) => {
    let newDataCards = cards;
    const newData = newDataCards
      .filter((c) => {
        if (search) return c.name.includes(search);

        return true;
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1];
        return true;
      })
      .filter((c) => {
        if (job) return c.jobKey === job;
        return true;
      })
      .filter((c) => {
        if (alignment) return c.category === alignment;
        return true;
      });
    setJobs(newData);
  };
  const filterAlign = (cards, align) => {
    let newDataCards = cards;
    const newData = newDataCards
      .filter((c) => {
        if (search) return c.name.includes(search);
        return true;
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1];
        return true;
      })
      .filter((c) => {
        if (job) return c.jobKey === job;
        return true;
      })
      .filter((c) => {
        if (align) return c.category === align;
        return true;
      });
    setJobs(newData);
  };
  const renderTitle = () => {
    if (!search && !alignment && !price && !job)
      return (
        <Stack alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Việc làm freelancer - Làm online, nhận tiền nhanh chóng
          </Typography>
          <Typography variant="h6" sx={{ color: "#637381", fontWeight: "500" }}>
            Hơn 51931 dự án đã đăng và thuê được freelancer thành công.
          </Typography>
        </Stack>
      );
    return (
      <Stack alignItems="start" sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          {`${
            alignment
              ? "Thiết kế nhận diện thương hiệu 15 dự án"
              : "Kết quả tìm kiếm"
          }`}
        </Typography>
        <Typography variant="h6" sx={{ color: "#637381", fontWeight: "500" }}>
          {`${jobs.length} dự án`}
        </Typography>
      </Stack>
    );
  };
  useEffect(() => {
    // console.log(price, job, cards)
    // const newData = newDataCards.filter((c) => {
    //   if (price || job || search)
    //     return (
    //       c.salary > price?.[0] &&
    //       c.salary < price?.[1] &&
    //       c.jobKey === job &&
    //       c.name.includes(search)
    //     )
    //   return true
    // })
    // setJobs(newData)
  }, [price, job, search]);
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
          onChange={(e) => {
            if (e.target.value) {
              setSearch(e.target.value);
              filterSearch(cardsData, e.target.value);
              // filterJob(cardsData, job)
              // filterSalary(cardsData, price)
            } else {
              setJobs(cardsData);
            }
          }}
        />

        <FormControl sx={{ width: "30%" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            hiddenLabel
            value={job}
            // placeholder="Danh mục công việc"
            displayEmpty
            renderValue={job ? undefined : () => "Danh mục công việc"}
            onChange={(e) => {
              if (e.target.value) {
                setJob(e.target.value);
                // filterSearch(cardsData, search)
                filterJob(cardsData, e.target.value);
                // filterSalary(cardsData, price)
              } else {
                setJobs(cardsData);
              }
            }}
          >
            <Typography sx={{ padding: "16px 16px" }}>
              Danh mục công việc <span>{` (${jobsSelect.length})`}</span>
            </Typography>
            {jobsSelect.map((job, i) => (
              <MenuItem className={styles.menu_item} key={i} value={job.value}>
                {job.label}
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
            renderValue={price ? undefined : () => "Mức giá mong muốn"}
            onChange={(e) => {
              if (e.target.value) {
                setPrice(JSON.parse(e.target.value));
                filterSalary(cardsData, JSON.parse(e.target.value));
              }
            }}
          >
            <Typography sx={{ padding: "16px 16px" }}>
              Danh mục công việc <span>{` (${prices.length})`}</span>
            </Typography>
            {prices.map((price, i) => (
              <MenuItem
                key={i}
                value={JSON.stringify(price.value)}
                className={styles.menu_item}
              >
                {price.label}
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
      <Stack className={styles.main} alignItems="center" spacing="50px">
        <ToggleButtonGroup
          fullWidth
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className={styles.btn_group}
        >
          {tabs.map((tab) => (
            <ToggleButton
              value={tab.value}
              sx={{ padding: "63px 32px", width: "20%" }}
            >
              <Stack>
                <Typography>{tab.label}</Typography>
                <Typography variant="body2">{`Số dự án ${tab.count}`}</Typography>
              </Stack>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {renderTitle()}
        <Grid container rowSpacing={"50px"} columnSpacing={"50px"}>
          {jobs.map((e) => (
            <Grid item lg={6} xs={12}>
              <NewestCard {...e} />
            </Grid>
          ))}
        </Grid>
        <Pagination count={10} size="large" />
      </Stack>
      <Footer />
    </>
  );
}
