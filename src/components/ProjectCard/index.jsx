import React, { useState } from 'react'
import styles from './../ProjectCard/project.module.css'
import backIcon from 'images/project/ic_chevron_left.svg'
import img from 'images/candidates/nature.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LeftArrow from 'images/impress/prev_arrow.svg'
import RightArrow from 'images/impress/next_arrow.svg'
import { Box, Link, Stack, Typography } from '@mui/material'
import Slider from 'react-slick'
import { PRIMARY_COLOR } from 'utilities/constant'
import { useNavigate } from 'react-router-dom'
const PrevArrow = (props) => <img src={LeftArrow} alt="" {...props} />
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
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
const ProjectCard = ({ name, subname, love, view }) => {
  let navigate = useNavigate()
  return (
    <Stack className={styles.project} spacing="40px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing="20px">
          <img
            src={backIcon}
            style={{ cursor: 'pointer' }}
            alt=""
            onClick={() => {
              navigate('/candidate')
            }}
          />
          <Typography variant="h5">Thiên nhiên </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing="8px">
          <Stack direction="row" spacing="4px">
            <FavoriteIcon fontSize={'small'} />
            <Typography className={styles.normal_text}>12</Typography>
          </Stack>
          <Stack direction="row" spacing="4px">
            <VisibilityIcon fontSize={'small'} />
            <Typography className={styles.normal_text}>1</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Slider {...settings} style={{ width: '100%', maxHeight: '500px' }}>
        <img src={img} alt="" style={{ width: '100%' }} />
        <img src={img} alt="" style={{ width: '100%' }} />
        <img src={img} alt="" style={{ width: '100%' }} />
      </Slider>
      <Typography className={styles.gray_text} sx={{ color: '#637381' }}>
        Việt Nam ta được mẹ thiên nhiên ưu ái, ban tặng cho rất nhiều cảnh quan
        thiên nhiên núi rừng kỳ vĩ. Thắng cảnh không chỉ hiện hữu ở ngoài khơi
        xa hay trên tận đỉnh cao mây mờ, mà ngay giữa những thành phố sầm uất
        cũng có thể thấy nhiều địa danh thiên nhiên nổi tiếng. Hình ảnh ngọn núi
        sừng sững, hiên ngang trước những dãy nhà cao tầng cùng cuộc sống tấp
        nập của người dân, tạo nên một bức tranh hùng vĩ, bề thế mà cũng chẳng
        kém phần nên thơ, trữ tình.
      </Typography>
      <Stack spacing="8px">
        <Box>
          <Typography className={styles.gray_text} component="span">
            Behance:
          </Typography>
          <Link
            className={styles.gray_text}
            underline="none"
            href="https://www.behance.net/ttrngx_"
            sx={{ color: PRIMARY_COLOR }}
          >
            {` https://www.behance.net/ttrngx_`}
          </Link>
        </Box>
        <Box>
          <Typography className={styles.gray_text} component="span">
            Dribbble:
          </Typography>
          <Link
            className={styles.gray_text}
            underline="none"
            href="https://dribbble.com/thutrangnguyen"
            sx={{ color: PRIMARY_COLOR }}
          >
            {` https://dribbble.com/thutrangnguyen`}
          </Link>
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProjectCard
