import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import styles from './../Convenient/Convenient.module.css'
import mail from './../../../images/convenient/mail.svg'
const Convenient = () => {
  return (
    <Stack className={styles.convenient} alignItems="center" spacing={'30px'}>
      <Typography
        sx={{ typography: { lg: 'h2', xs: 'h5' }, fontWeight: '700' }}
      >
        Tiện ích Desi đem tới cho bạn
      </Typography>
      <Typography
        variant="h5"
        sx={{
          typography: { lg: 'h5', xs: 'body2' },
          color: PRIMARY_COLOR,
          marginBottom: '150px',
        }}
      >
        Hãy sẵn sàng để có những trải nghiệm tuyệt vời!
      </Typography>
      <Stack
        sx={{
          backgroundImage: { lg: `url(${mail})`, xs: '' },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
        spacing={{ lg: '220px' }}
      >
        {[0, 1, 2].map((e, i) => (
          <Stack
            direction={{ lg: 'row', xs: 'column' }}
            alignItems={{ lg: 'initial', xs: 'center' }}
            spacing={{
              lg: `${(i === 2 ? 1.5 : i + 2) * 100 + 130}px`,
              xs: '0',
            }}
            justifyContent={{ lg: 'center', xs: 'initial' }}
            ml="120px"
          >
            {[0, 1].map((r, g) => (
              <Stack
                sx={{
                  width: { lg: '30%', xs: '60%' },
                  position: 'relative',
                }}
                spacing="10px"
                mr={i === 1 && r === 1 ? '100px' : '0'}
              >
                <Stack
                  direction={{ lg: 'row', xs: 'column' }}
                  spacing={{ xs: '15px' }}
                >
                  <Divider
                    orientation="vertical"
                    sx={{
                      backgroundColor: PRIMARY_COLOR,
                      width: '1px',
                      position: 'absolute',
                      height: '40%',
                      left: '-3%',
                      display: { lg: 'initial', xs: 'none' },
                    }}
                  />
                  <Typography variant="h5">Trải nghiệm miễn phí</Typography>
                  <Divider
                    orientation="horizontal"
                    sx={{
                      backgroundColor: PRIMARY_COLOR,
                      width: '80%',
                      display: { lg: 'none', xs: 'initital' },
                    }}
                  />
                </Stack>
                <Typography className={styles.gray_text}>
                  Dễ dàng tìm kiếm những công việc freelance, và các ứng viên
                  tài năng trong lĩnh vực thiết kế mà không mất bất kì chi phí
                  nào.
                </Typography>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Convenient
