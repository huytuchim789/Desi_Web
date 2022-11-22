import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NewestCard from '../../../components/NewestCard'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import styles from './../Newest/Newest.module.css'
import ava from './../../../images/newest/IMG.svg'
export default function Newest() {
  return (
    <Box className={styles.newest}>
      <Typography
        sx={{ typography: { lg: 'h2', xs: 'h4' }, fontWeight: '700' }}
        gutterBottom
      >
        Những công việc
        <span style={{ color: PRIMARY_COLOR }}> mới nhất</span>
      </Typography>
      <Grid container rowSpacing={'50px'} columnSpacing={'50px'}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((e) => (
          <Grid item lg={6} xs={12}>
            <NewestCard
              name={'Chuyên viên thiết kế đồ họa '}
              content={
                'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
              }
              company="Công ty TNHH Graphic Design"
              avatar={ava}
              salary={2000000}
              tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
              hour={8}
              date={9}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
