import { Grid, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import styles from './../Impress/Impress.module.css'
import img1 from './../../../images/impress/package.svg'
import LeftArrow from './../../../images/impress/prev_arrow.svg'
import RightArrow from './../../../images/impress/next_arrow.svg'
import Report from './../../../images/impress/report.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import styledEngine from '@mui/styled-engine'
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
const impress = [
  { text: 'Thiết kế đồ họa', img: img1 },
  { text: 'Thiết kế đồ họa', img: img1 },
  { text: 'Thiết kế đồ họa', img: img1 },
  { text: 'Thiết kế đồ họa', img: img1 },
  { text: 'Thiết kế đồ họa', img: img1 },
]
export default function Impress() {
  return (
    <Stack className={styles.impress} spacing="40px">
      <Typography
        sx={{ typography: { lg: 'h2', xs: 'h4' }, fontWeight: '700' }}
        gutterBottom
      >
        Danh mục công việc
        <span style={{ color: PRIMARY_COLOR }}> nổi bật</span>
      </Typography>
      <Slider {...settings}>
        {impress.map((i) => (
          <div>
            <Stack
              sx={{
                position: 'relative',
                backgroundImage: `url(${i.img})`,
                backgroundRepeat: 'no-repeat',
                width: { lg: '300px', xs: '100%' },
                height: '400px',
                backgroundSize: { lg: 'initial', xs: 'cover' },
              }}
              justifyContent="center"
            >
              <span className={styles.text}>{i.text}</span>
            </Stack>
          </div>
        ))}
      </Slider>
      <Grid container>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            display: { lg: 'initial', xs: 'flex' },
            justifyContent: 'center',
          }}
        >
          <img src={Report} alt="" className={styles.img} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography
            sx={{ typography: { lg: 'h3', xs: 'h5' }, fontWeight: '700' }}
            gutterBottom
          >
            Cơ hội vàng nằm gọn trong tay bạn
          </Typography>
          <List>
            <ListItem disablePadding>
              <CheckCircleIcon
                style={{ color: '#00AB55', marginRight: '15px' }}
              />
              <Typography className={styles.gray_text}>
                Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi
                nơi
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <CheckCircleIcon
                style={{ color: '#00AB55', marginRight: '15px' }}
              />
              <Typography className={styles.gray_text}>
                Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi
                nơi
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <CheckCircleIcon
                style={{ color: '#00AB55', marginRight: '15px' }}
              />
              <Typography className={styles.gray_text}>
                Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi
                nơi
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <CheckCircleIcon
                style={{ color: '#00AB55', marginRight: '15px' }}
              />
              <Typography className={styles.gray_text}>
                Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi
                nơi
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Stack>
  )
}
