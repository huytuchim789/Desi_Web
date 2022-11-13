import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOR } from '../../../utilities/constant'
import styles from './../Convenient/Convenient.module.css'
import mail from './../../../images/convenient/mail.svg'
const Convenient = () => {
  return (
    <Stack className={styles.convenient} alignItems="center" spacing={'30px'}>
      <Typography variant="h2">Tiện ích Desi đem tới cho bạn </Typography>
      <Typography
        variant="h5"
        style={{ color: PRIMARY_COLOR, marginBottom: '150px' }}
      >
        Hãy sẵn sàng để có những trải nghiệm tuyệt vời!
      </Typography>
      <Stack
        style={{
          backgroundImage: `url(${mail})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
        spacing="220px"
      >
        <Stack direction="row" justifyContent="center" spacing="230px">
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  position: 'absolute',
                  height: '40%',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  position: 'absolute',
                  height: '40%',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing="330px">
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  height: '40%',
                  position: 'absolute',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  position: 'absolute',
                  height: '40%',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing="430px">
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  height: '40%',
                  position: 'absolute',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
          <Stack
            sx={{ width: '30%' }}
            spacing="10px"
            style={{ position: 'relative' }}
          >
            <Stack direction="row">
              <Divider
                orientation="vertical"
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  width: '1px',
                  position: 'absolute',
                  height: '40%',
                  left: '-3%',
                }}
              />
              <Typography variant="h5">Trải nghiệm miễn phí</Typography>
            </Stack>
            <Typography className={styles.gray_text}>
              Dễ dàng tìm kiếm những công việc freelance, và các ứng viên tài
              năng trong lĩnh vực thiết kế mà không mất bất kì chi phí nào.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Convenient
