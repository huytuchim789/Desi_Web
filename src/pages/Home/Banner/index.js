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
        <Grid
          item
          lg={6}
          xs={12}
          sx={{ padding: { xs: '0 20px', lg: 'initial' } }}
        >
          <Stack spacing={'30px'}>
            <Typography
              gutterBottom
              sx={{ typography: { lg: 'h1', xs: 'h4' }, fontWeight: '700' }}
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
              sx={{
                backgroundColor: PRIMARY_COLOR,
                width: { lg: '30%', xs: '45%' },
                padding: '11px 12px',
              }}
            >
              Bắt đầu tìm việc
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Stack
            className={styles.hiring_logo}
            sx={{ maxHeight: { lg: 'initial', xs: '550px' } }}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <img src={Hiring} alt="" />
          </Stack>
        </Grid>
        <Grid item lg={12} sx={{ position: 'relative' }}>
          <Stack
            direction={{ lg: 'row', xs: 'column' }}
            alignItems="center"
            justifyContent="center"
            spacing={{ lg: '120px', xs: '20px' }}
            sx={{
              backgroundColor: WHITE_COLOR,
              position: { lg: 'absolute', xs: 'static' },
              width: '100%',
              top: '-100px',
              padding: { lg: '40px 20px', xs: '40px 0' },
              left: '-20px',
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
                  align="center"
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
