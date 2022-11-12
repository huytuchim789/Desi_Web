import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NewestCard from '../../../components/NewestCard'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import styles from './../Newest/Newest.module.css'
import ava from './../../../images/newest/IMG.svg'
export default function Newest() {
  return (
    <Box className={styles.newest}>
      <Typography variant="h2" gutterBottom>
        Những công việc
        <span style={{ color: PRIMARY_COLOR }}> mới nhất</span>
      </Typography>
      <Grid container rowSpacing={'50px'} columnSpacing={'50px'}>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
        <Grid item xs={6}>
          <NewestCard
            name={'Chuyên viên thiết kế đồ họa '}
            content={
              'Thiết kế các sản phẩm truyền thông như banner, poster, catalog, thư mời,... cho sự kiện truyền thông sản phẩm mới ...'
            }
            company="Công ty TNHH Graphic Design"
            avatar={ava}
            salary={'2-4 triệu đồng'}
            tags={['2-4 triệu đồng', 'Hà Nội', 'Graphic Designer']}
            hour={8}
            date={9}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
