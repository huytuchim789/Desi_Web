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
} from '@mui/material'
import { withStyles } from '@mui/styles'
import React from 'react'
import Slider from 'react-slick'
import styles from './../Outstanding/Outstanding.module.css'
import img1 from './../../../images/Outstanding/countryside.svg'
import ava from './../../../images/Outstanding/ttn.svg'
import LeftArrow from './../../../images/impress/prev_arrow.svg'
import RightArrow from './../../../images/impress/next_arrow.svg'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import bg from './../../../images/Outstanding/qoute.svg'
import bgEmail from './../../../images/Outstanding/bg-input.svg'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import CustomButton from '../../../components/CustomButton'
import useWindowDimensions from '../../../hooks/windowDimension'

const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
        centerMode: false,
      },
    },
  ],
}
const settings2 = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <></>,
  nextArrow: <></>,
  centerMode: true,
  dots: true,
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
        centerMode: false,
      },
    },
  ],
}
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '& notchedOutline': {
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  input: {
    '&:hover $notchedOutline': {
      borderColor: 'white',
    },
    '&$focused $notchedOutline': {
      borderColor: 'white',
    },
  },
  notchedOutline: {
    borderColor: 'white',
  },
})(TextField)
const cards = [
  { job: 'Art Design', name: 'Thu Trang Nguyen ', img: img1, avatar: ava },
  { job: 'Art Design', name: 'Thu Trang Nguyen ', img: img1, avatar: ava },
  { job: 'Art Design', name: 'Thu Trang Nguyen ', img: img1, avatar: ava },
  { job: 'Art Design', name: 'Thu Trang Nguyen ', img: img1, avatar: ava },
  { job: 'Art Design', name: 'Thu Trang Nguyen ', img: img1, avatar: ava },
]
const customers = [
  {
    header:
      'Freelancer ho??n th??nh r???t t???t v?? c?? tr??ch nhi???m v???i c??ng vi???c. T??i r???t h??i l??ng v?? s??? h???p t??c l???i!',
    job: 'Qu???n l?? ',
    name: 'Mai An',
    avatar: ava,
  },
  {
    header:
      'Freelancer ho??n th??nh r???t t???t v?? c?? tr??ch nhi???m v???i c??ng vi???c. T??i r???t h??i l??ng v?? s??? h???p t??c l???i!',
    job: 'Qu???n l?? ',
    name: 'Mai An',
    avatar: ava,
  },
  {
    header:
      'Freelancer ho??n th??nh r???t t???t v?? c?? tr??ch nhi???m v???i c??ng vi???c. T??i r???t h??i l??ng v?? s??? h???p t??c l???i!',
    job: 'Qu???n l?? ',
    name: 'Mai An',
    avatar: ava,
  },
]
export default function Outstanding() {
  // const { height, width } = useWindowDimensions()

  return (
    <>
      <Stack
        className={styles.outstanding}
        spacing="40px"
        sx={{ marginBottom: '30px' }}
        justifyContent={{ lg: 'initial', xs: 'center' }}
      >
        <Typography
          sx={{ typography: { lg: 'h2', xs: 'h5' }, fontWeight: '700' }}
          gutterBottom
        >
          H??? s?? n??ng l???c
          <span style={{ color: PRIMARY_COLOR }}> n???i b???t</span>
        </Typography>
        <Slider {...settings}>
          {cards.map((i) => (
            <div>
              <Card
                sx={{
                  maxWidth: { lg: '260px', xs: '100%' },
                  boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
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
      <Stack
        className={styles.outstanding}
        style={{
          backgroundColor: '#FAF9F7',
          backgroundImage: `url(${bg})`,
          backgroundSize: '30% 30%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '65% 70%',
        }}
        alignItems={{ lg: 'center', xs: 'initial' }}
      >
        <Typography
          sx={{
            typography: { lg: 'h4', xs: 'body1' },
            fontWeight: '700',
            textAlign: { lg: 'inherit', xs: 'center' },
          }}
          gutterBottom
          style={{ color: PRIMARY_COLOR }}
        >
          Kh??ch h??ng h??i l??ng v??? ch???t l?????ng d???ch v???
        </Typography>
        <Stack
          direction={{ lg: 'row', xs: 'column' }}
          justifyContent="center"
          spacing="180px"
          className={styles.show}
        >
          {customers.map((i) => (
            <Card className={styles.card}>
              <CardContent className={styles.black_text}>
                <Typography>{i.header}</Typography>
              </CardContent>
              <CardActionArea disableTouchRipple>
                <CardHeader
                  avatar={<Avatar src={i.avatar} aria-label="recipe"></Avatar>}
                  title={i.job}
                  subheader={i.name}
                ></CardHeader>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
        <Slider {...settings2} className={styles.none}>
          {customers.map((i) => (
            <div>
              <Card className={styles.card}>
                <CardContent className={styles.black_text}>
                  <Typography>{i.header}</Typography>
                </CardContent>
                <CardActionArea disableTouchRipple>
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
      <Stack
        className={styles.email}
        sx={{
          backgroundImage: `url(${bgEmail})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        alignItems="center"
        spacing="50px"
      >
        <Typography
          sx={{
            typography: { lg: 'h5', xs: 'body2' },
            fontWeight: '700',
          }}
          gutterBottom
          style={{ color: '#FFF' }}
          align="center"
        >
          ????? l???i email ????? kh??ng b??? l??? b???t k??? tin tuy???n d???ng h???p d???n, ho???c c??c
          ???ng vi??n t??i n??ng t???i website Desi !
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent={{ lg: 'center' }}
          sx={{ width: { lg: '60%', xs: '100%' } }}
          columnSpacing={{ lg: '15px', xs: '10px' }}
        >
          <Grid item lg={8} xs={12}>
            <CssTextField
              id="outlined-basic"
              label="Nh???p Email"
              variant="outlined"
              color="white"
              inputProps={{ sx: { color: 'white', height: '100%' } }}
              InputLabelProps={{ sx: { color: 'white' } }}
              sx={{
                width: '100%',
                whiteSpace: 'nowrap',
              }}
            />
          </Grid>
          <Grid item lg={4} xs={0}>
            <CustomButton
              sx={{
                backgroundColor: PRIMARY_COLOR,
                padding: { lg: '12px 45px', xs: '6px 20px' },
                whiteSpace: 'nowrap',
                display: { lg: 'initial', xs: 'none' },
                height: { lg: '60px' },
              }}
              className={styles.button}
              size="large"
            >
              G???i Email
            </CustomButton>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}
