import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import styles from './../CustomCard/CustomCard.module.css'
import ava from 'images/Outstanding/ttn.svg'
import location from 'images/candidates/ic_location.svg'
import CustomButton from '../CustomButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { PRIMARY_COLOR } from '../../utilities/constant'
import l1 from 'images/candidates/ic_clock.svg'
import l2 from 'images/candidates/ic_job.svg'
import l3 from 'images/candidates/ic_verified.svg'
import l4 from 'images/candidates/ic_mail.svg'
import l5 from 'images/candidates/ic_call.svg'
import Facebook from 'images/Social Media.svg'
import Youtube from 'images/Social Media (2).svg'
import Linkedln from 'images/Social Media (3).svg'
import CustomModal from 'components/CandidateModal'

const posters = [
  'Poster',
  'Hà Nội',
  'Graphic Designer',
  'Banner',
  'Banner',
  'Banner',
  'Graphic Designer',
  'Graphic Designer',
  'Graphic Designer',
]

export default function CustomCard() {
  const [value, setValue] = React.useState(2)
  const [open, setOpen] = useState(false)

  return (
    <Stack alignItems="center" className={styles.card}>
      <CustomModal open={open} setOpen={setOpen} />

      <Avatar src={ava} sx={{ width: '136px', height: '136px' }} />
      <Stack alignItems="center" spacing="25px">
        <Typography fontWeight={500} variant="h4">
          Thu Trang Nguyen
        </Typography>
        <Typography className={styles.gray_text}>Graphic Designer</Typography>
        <Stack direction="row">
          <img src={location} alt="" />
          <Typography className={styles.gray_text}>Hà Nội, Việt Nam</Typography>
        </Stack>
        <Stack direction="row" spacing="10px" sx={{ width: '100%' }}>
          <Button
            variant="outlined"
            className={`${styles.buttons} ${styles.btn_padding}`}
            startIcon={<FavoriteBorderIcon />}
            size="large"
            sx={{
              width: { xs: '100%', lg: '50%' },
              // backgroundColor: PRIMARY_COLOR,
              whiteSpace: 'nowrap',
            }}
          >
            Yêu thích
          </Button>
          <CustomButton
            size="large"
            className={styles.btn_padding}
            sx={{
              width: { xs: '100%', lg: '50%' },
              backgroundColor: PRIMARY_COLOR,
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              setOpen(true)
            }}
          >
            Liên hệ ứng viên
          </CustomButton>
        </Stack>
        <Stack spacing="16px">
          <Typography className={styles.title}>Giới thiệu</Typography>
          <Typography className={styles.gray_text}>
            Mình là Trang, mình làm các công việc freelance về thiết kế đồ họa,
            vẽ minh họa, phác thảo 3D, dựng 3D,...và các công việc liên quan đến
            việc lên ý tưởng, sáng tạo, xây dựng concept ,...Ngoài ra mình còn
            nhận các job viết content, lên kịch bản, ý tưởng,...Cảm ơn nhà tuyển
            dụng đã đọc!
          </Typography>
          <Divider sx={{ marginTop: '40px' }} />
        </Stack>
        <Stack spacing="16px" sx={{ width: '100%' }}>
          <Typography className={styles.title}>Làm việc</Typography>
          <Stack direction="row" alignItems={'center'} spacing="8px">
            <img alt="" src={l1} className={styles.logo} />
            <Box>
              <Typography component="span" className={styles.content}>
                Toàn thời gian
              </Typography>
              <Typography component="span" className={styles.gray_text}>
                {` (trên 40h/tuần)`}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems={'center'} spacing="8px">
            <img alt="" src={l2} className={styles.logo} />
            <Box>
              <Typography component="span" className={styles.content}>
                Đã có kinh nghiệm
              </Typography>
              <Typography component="span" className={styles.gray_text}>
                {` (2-5 năm)`}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems={'center'} spacing="8px">
            <img alt="" src={l3} className={styles.logo} />
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </Stack>
          <Divider sx={{ marginTop: '40px' }} />
        </Stack>
        <Stack spacing="16px" sx={{ width: '100%' }}>
          <Typography className={styles.title}>Kĩ năng</Typography>
          <Stack direction="row" columnGap="10px" rowGap="15px" flexWrap="wrap">
            {posters.map((p) => (
              <Chip label={p} className={styles.chip}></Chip>
            ))}
          </Stack>
          <Divider sx={{ marginTop: '40px' }} />
        </Stack>
        <Stack spacing="16px" sx={{ width: '100%' }}>
          <Typography className={styles.title}>Liên hệ</Typography>
          <Stack direction="row" alignItems={'center'} spacing="8px">
            <img alt="" src={l5} className={styles.logo} />
            <Typography component="span" className={styles.contact}>
              +84 736283983
            </Typography>
          </Stack>
          <Stack direction="row" alignItems={'center'} spacing="8px">
            <img alt="" src={l4} className={styles.logo} />
            <Typography component="span" className={styles.contact}>
              thutrang@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={'20px'}>
            <img src={Facebook} className={styles.img_contact} alt="" />
            <img src={Youtube} alt="" className={styles.img_contact} />
            <img src={Linkedln} alt="" className={styles.img_contact} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
