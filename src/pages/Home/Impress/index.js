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
      <Typography variant="h2" gutterBottom>
        Danh mục công việc
        <span style={{ color: PRIMARY_COLOR }}> nổi bật</span>
      </Typography>
      <Slider {...settings}>
        {impress.map((i) => (
          <div>
            <Stack
              // className="ahihi"

              style={{
                position: 'relative',
                backgroundImage: `url(${i.img})`,
                backgroundRepeat: 'no-repeat',
                width: '300px',
                height: '400px',
              }}
              justifyContent="center"
            >
              {/* <img src={i.img} alt="" style={{ visibility: 'hidden' }} /> */}
              <span className={styles.text}>{i.text}</span>
            </Stack>
          </div>
        ))}
      </Slider>
      <Grid container>
        <Grid item xs={6}>
          <img src={Report} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom>
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
