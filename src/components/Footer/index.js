import { Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/Social Media.svg'
import Youtube from '../../images/Social Media (2).svg'
import Linkedln from '../../images/Social Media (3).svg'
import { Stack } from '@mui/system'
import styles from './../Footer/Footer.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
const footers = [
  {
    header: 'Về Desi',
    content: ['Tìm việc làm ', 'Tìm freelancer', 'Đăng tin tuyển dụng', 'Blog'],
  },
  {
    header: 'Hỗ trợ',
    content: [
      'Chính sách bảo mật',
      'Điều khoản dịch vụ',
      'Quy chế hoạt động',
      'Giải quyết khiếu nại',
    ],
  },
  {
    header: 'Thông tin liên hệ',
    content: [
      { icon: <LocalPhoneIcon />, body: '+84 736283983' },
      { icon: <EmailIcon />, body: 'infor@desibusiness.vn' },
      {
        icon: <LocationOnIcon />,
        body: '60 Định Công, Phương Liệt, Thanh Xuân, Hà Nội',
      },
    ],
  },
]
export default function Footer() {
  return (
    <>
      <Grid
        container
        className={styles.footer}
        spacing={{ lg: '100px', xs: '20px' }}
      >
        <Grid item lg={3} xs={12}>
          <Stack spacing={'30px'}>
            <img src={Logo} alt="" className={styles.logo} />
            <Typography variant="body1" className={styles.gray_text}>
              Desi - website tìm việc freelance trong lĩnh vực thiết kế, tiện
              ích và dễ dàng sử dụng, thông tin uy tín và bảo mật{' '}
            </Typography>
            <Stack direction="row" spacing={'20px'}>
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={Youtube} alt="" />
              <img src={Linkedln} alt="" />
            </Stack>
          </Stack>
        </Grid>
        {footers.map((f) => (
          <Grid item lg={3} xs={12}>
            <Stack spacing={{ lg: '30px', xs: '10px' }}>
              <Typography variant="subtitle1">{f.header}</Typography>
              {f.content.map((c) => {
                if (typeof c === 'object')
                  return (
                    <Stack direction={'row'} spacing="20px">
                      {c.icon}
                      <Typography className={styles.gray_text}>
                        {c.body}
                      </Typography>
                    </Stack>
                  )
                return (
                  <Typography className={styles.gray_text} variant="body1">
                    {c}
                  </Typography>
                )
              })}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Typography
        className={styles.gray_text}
        sx={{
          textAlign: 'center',
          borderTop: '1px solid #F4F6F8',
          padding: '10px 0px 10px',
          color: '#212B36',
        }}
      >
        2022 Desi. All right reserved
      </Typography>
    </>
  )
}
