import {
  Avatar,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import img from 'images/freelancer/ava.svg'
import img1 from 'images/freelancer/1.svg'
import img2 from 'images/freelancer/2.svg'
import img3 from 'images/freelancer/3.svg'
import CustomButton from 'components/CustomButton'
import { PRIMARY_COLOR } from 'utilities/constant'
import LeftArrow from 'images/impress/prev_arrow.svg'
import RightArrow from 'images/impress/next_arrow.svg'
import Slider from 'react-slick'
import styles from './../CustomFreelancerCard/index.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />
const posters = ['Poster', 'Hà Nội', 'Graphic Designer', 'Banner']

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <></>,

  nextArrow: <img src={RightArrow} alt="" />,
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
        centerMode: true,
      },
    },
  ],
}
const CustomFreelancerCard = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = React.useState(2)
  let navigate = useNavigate()

  return (
    <Stack className={styles.card} spacing="30px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CardHeader
          avatar={<Avatar sx={{ width: 64, height: 64 }} src={img}></Avatar>}
          title={
            <Stack direction="row" alignItems="center" spacing="8px">
              <Link href="/candidate" style={{ color: 'unset' }}>
                <Typography variant="h6" href="candidateDetail">
                  Thu Trang Nguyen{' '}
                </Typography>
              </Link>
              <Chip
                label="Pro"
                sx={{
                  background: '#1890FF',
                  borderRadius: '6px',
                  padding: '0px 4px',
                  color: '#FFFFFF',
                }}
              ></Chip>
            </Stack>
          }
          subheader="Chuyên viên thiết kế đồ họa, thiết kế web, thiết kế game "
        />{' '}
        <CustomButton
          sx={{
            width: { xs: '100%', lg: 'initial' },
            backgroundColor: PRIMARY_COLOR,
            whiteSpace: 'nowrap',
            padding: '11px 22px',
          }}
          onClick={() => {
            navigate('/candidate', { state: { open: true } })
          }}
        >
          Liên hệ
        </CustomButton>
      </Stack>

      <Slider {...settings} style={{ width: '100%', minHeight: '230px' }}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img3} alt="" />
        <img src={img3} alt="" />
      </Slider>
      <Link
        href="#"
        sx={{ color: '#00AB55' }}
        underline="hover"
        fontWeight={500}
        fontSize="20px"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        Xem thêm thông tin{' '}
      </Link>
      {open ? (
        <>
          {' '}
          <Divider sx={{ width: '100%', marginTop: '20px' }} />
          <Grid
            container
            columnGap={6}
            sx={{
              background: 'rgba(145, 158, 171, 0.08)',
              borderRadius: '8px',
              padding: '32px 90px',
            }}
          >
            <Grid item lg={3.5}>
              <Typography variant="h6">Thông tin ứng viên</Typography>
              <ul>
                <li>Thu Trang Nguyen</li>
                <li>Đến từ: Hà Nội </li>
                <li>Ngày gia nhập: 21/10/20220</li>
                <li>Việc đã làm: 15 việc</li>
                <li>
                  <Stack direction="row" alignItems="center">
                    Đánh giá:
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue)
                      }}
                    />
                  </Stack>
                </li>
              </ul>
            </Grid>
            <Grid item lg={3.5}>
              <Typography variant="h6">Kinh nghiệm làm việc</Typography>
              <ul>
                <li>Từng tham gia nhiều dự án lớn ở các công ty châu Âu</li>
                <li>Học thiết kế đồ họa tại Open University </li>
              </ul>
            </Grid>
            <Grid container direction="column" rowGap={2} item lg={3.5}>
              <Typography variant="h6">Kĩ năng </Typography>
              <Stack
                direction="row"
                columnGap="8px"
                flexWrap="wrap"
                rowGap="8px"
              >
                {posters.map((p) => (
                  <Chip label={p} className={styles.chip}></Chip>
                ))}
              </Stack>
              <Typography variant="h6">Mức giá đề nghị</Typography>
              <Chip
                label="2-4 triệu"
                sx={{
                  background: '#1890FF',
                  borderRadius: '6px',
                  padding: '2px 35px',
                  color: '#FFFFFF',
                  width: '45%',
                }}
              ></Chip>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </Stack>
  )
}

export default CustomFreelancerCard
