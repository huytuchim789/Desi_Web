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
const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <PrevArrow />,
  nextArrow: <img src={RightArrow} alt="" />,
  centerMode: true,
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
      'Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!',
    job: 'Quản lý ',
    name: 'Mai An',
    avatar: ava,
  },
  {
    header:
      'Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!',
    job: 'Quản lý ',
    name: 'Mai An',
    avatar: ava,
  },
  {
    header:
      'Freelancer hoàn thành rất tốt và có trách nhiệm với công việc. Tôi rất hài lòng và sẽ hợp tác lại!',
    job: 'Quản lý ',
    name: 'Mai An',
    avatar: ava,
  },
]
export default function Outstanding() {
  return (
    <>
      <Stack
        className={styles.outstanding}
        spacing="40px"
        style={{ marginBottom: '30px' }}
      >
        <Typography variant="h2" gutterBottom>
          Hồ sơ năng lực
          <span style={{ color: PRIMARY_COLOR }}> nổi bật</span>
        </Typography>
        <Slider {...settings}>
          {cards.map((i) => (
            <div>
              <Card
                sx={{
                  maxWidth: '360px',
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
          backgroundSize: '35% 35%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '60% 70%',
        }}
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom style={{ color: PRIMARY_COLOR }}>
          Khách hàng hài lòng về chất lượng dịch vụ
        </Typography>
        <Stack direction="row" justifyContent="center" spacing="180px">
          {customers.map((i) => (
            <Card className={styles.card}>
              <CardContent className={styles.black_text}>
                <Typography>{i.header}</Typography>
              </CardContent>
              <CardActionArea>
                <CardHeader
                  avatar={<Avatar src={i.avatar} aria-label="recipe"></Avatar>}
                  title={i.job}
                  subheader={i.name}
                ></CardHeader>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
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
          variant="h5"
          gutterBottom
          style={{ color: '#FFF' }}
          align="center"
        >
          Để lại email để không bỏ lỡ bất kỳ tin tuyển dụng hấp dẫn, hoặc các
          ứng viên tài năng tại website Desi !
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent={'center'}
          sx={{ width: '60%' }}
          columnSpacing="30px"
        >
          <Grid item xs={8}>
            <CssTextField
              id="outlined-basic"
              label="Nhập Email"
              variant="outlined"
              color="white"
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              sx={{
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomButton
              style={{ backgroundColor: PRIMARY_COLOR, padding: '12px 55px' }}
              className={styles.button}
              size="large"
            >
              Gửi Email
            </CustomButton>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}
