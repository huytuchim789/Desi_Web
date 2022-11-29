import {
  Avatar,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";
import Slider from "react-slick";
import styles from "./../Outstanding/Outstanding.module.css";
import img1 from "images/Outstanding/countryside.svg";
import ava from "images/Outstanding/ttn.svg";
import LeftArrow from "images/impress/prev_arrow.svg";
import RightArrow from "images/impress/next_arrow.svg";
import { PRIMARY_COLOR } from "utilities/constant";
import bg from "images/Outstanding/qoute.svg";
import bgEmail from "images/Outstanding/bg-input.svg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CustomButton from "components/CustomButton";

const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />;
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <PrevArrow />,
  nextArrow: <img src={RightArrow} alt="" />,
  centerMode: true,
  responsive: [
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        prevArrow: <></>,
        nextArrow: <></>,
        centerMode: true,
      },
    },
  ],
};

const cards = [
  { job: "Art Design", name: "Thu Trang Nguyen ", img: img1, avatar: ava },
  { job: "Art Design", name: "Thu Trang Nguyen ", img: img1, avatar: ava },
  { job: "Art Design", name: "Thu Trang Nguyen ", img: img1, avatar: ava },
  { job: "Art Design", name: "Thu Trang Nguyen ", img: img1, avatar: ava },
  { job: "Art Design", name: "Thu Trang Nguyen ", img: img1, avatar: ava },
];
const customers = [
  {
    header:
      "Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!",
    job: "Quản lý ",
    name: "Mai An",
    avatar: ava,
  },
  {
    header:
      "Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!",
    job: "Quản lý ",
    name: "Mai An",
    avatar: ava,
  },
  {
    header:
      "Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!",
    job: "Quản lý ",
    name: "Mai An",
    avatar: ava,
  },
];
export default function Outstanding() {
  // const { height, width } = useWindowDimensions()

  return (
    <>
      <Stack
        className={styles.outstanding}
        spacing="40px"
        sx={{ marginBottom: "30px" }}
        justifyContent={{ lg: "initial", xs: "center" }}
      >
        <Typography
          sx={{ typography: { lg: "h3", xs: "h5" }, fontWeight: "700" }}
          gutterBottom
        >
          Hồ sơ năng lực
          <span style={{ color: PRIMARY_COLOR }}> nổi bật</span>
        </Typography>
        <Slider {...settings}>
          {cards.map((i) => (
            <div>
              <Card
                sx={{
                  maxWidth: "320px",
                  boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
                }}
              >
                <CardActionArea>
                  <CardMedia component="img" image={i.img} alt="" />
                  <CardHeader
                    avatar={
                      <Avatar src={i.avatar} aria-label="recipe"></Avatar>
                    }
                    title={i.job}
                    subheader={i.name}
                  ></CardHeader>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Slider>
      </Stack>
    </>
  );
}
