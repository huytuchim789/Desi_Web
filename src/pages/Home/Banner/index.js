import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import styles from './../Banner/Banner.module.css'
import CustomButton from '../../../components/CustomButton'
import {
  GRAY_TEXT_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../../utilities/constant'
import Hiring from './../../../images/hiring.svg'
import img1 from './../../../images/banner/Group 1.svg'
import img2 from './../../../images/banner/Group 2.svg'
import img3 from './../../../images/banner/Group 3.svg'
const banners = [
  {
    img: img1,
    header: 'Tạo tài khoản',
    body: 'Bạn cần có tài khoản để có thể xem chi tiết các nội dung công việc!',
  },
  {
    img: img2,
    header: 'Tìm kiếm việc làm',
    body: 'Website giúp bạn tìm kiếm các công việc freelance tốt nhất',
  },
  {
    img: img3,
    header: 'Ứng tuyển công việc',
    body: 'Ứng tuyển bài đăng tuyển dụng để bắt đầu công việc mới',
  },
]
export default function Banner() {
  return (
    <Box className={styles.banner}>
      <Grid container>
        <Grid item xs={6}>
          <Stack spacing={'30px'}>
            <Typography
              variant="h1"
              gutterBottom
              styles={{ fontWeight: '700' }}
            >
              Tìm việc freelance cùng với
              <span className={styles.desi}> Desi</span>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              styles={{ lineHeight: '24px' }}
            >
              Bắt đầu kiếm tiền tự do trên Desi ngay hôm nay! Duyệt qua các dự
              án để ứng tuyển hoặc đăng ký tài khoản để tham gia vào cộng đồng
              tìm việc freelancer trong lĩnh vực thiết kế
            </Typography>
            <CustomButton
              style={{
                backgroundColor: PRIMARY_COLOR,
                width: '30%',
                padding: '11px 12px',
              }}
            >
              Bắt đầu tìm việc
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            className={styles.hiring_logo}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <img src={Hiring} alt="" />
          </Stack>
        </Grid>
        <Grid item xs={12} style={{ position: 'relative' }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={'120px'}
            style={{
              backgroundColor: WHITE_COLOR,
              position: 'absolute',
              width: '100%',
              top: '-100px',
              paddingTop: '40px',
              paddingBottom: '40px',
              boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.05)',
            }}
          >
            {banners.map((b) => (
              <Stack alignItems="center" spacing={'15px'}>
                <img className={styles.img} src={b.img} alt="" />
                <Typography variant="h5" gutterBottom>
                  {b.header}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: GRAY_TEXT_COLOR }}
                >
                  {b.body}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
