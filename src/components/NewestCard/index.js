import { Box, Chip, Typography, Stack, Avatar } from '@mui/material'
import React, { useState } from 'react'
import { PRIMARY_COLOR } from '../../utilities/constant'
import CustomButton from '../CustomButton'
import styles from './../NewestCard/NewestCard.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import formatThousands from 'format-thousands'
export default function NewestCard({
  name,
  content,
  avatar,
  company,
  salary,
  tags,
  hour,
  date,
}) {
  const [hovering, setHovering] = useState(false)
  const [love, setLove] = useState(false)
  const hover = () => {
    setHovering(true)
  }
  const unHover = () => {
    setHovering(false)
  }
  return (
    <Stack
      onMouseOver={hover}
      onMouseOut={unHover}
      spacing="21px"
      className={styles.newest_card}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction={{ lg: 'row', xs: 'column' }} spacing="16px">
          <Typography
            sx={{
              typography: { lg: 'h5', xs: 'h6' },
              fontWeight: '700',
              lineHeight: { lg: 'initial', xs: '1' },
            }}
          >
            {name}
          </Typography>
        </Stack>
        {love ? (
          <FavoriteIcon
            sx={{ color: PRIMARY_COLOR, cursor: 'pointer' }}
            onClick={() => {
              setLove(!love)
            }}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              setLove(!love)
            }}
          />
        )}
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        style={{ color: '#637381' }}
      >
        <Stack direction="row" alignItems="center" spacing="15px">
          <Chip
            label="Mới nhất"
            sx={{
              color: '#fff',
              backgroundColor: '#1890FF',
              maxWidth: { lg: 'initial', xs: '100px' },
            }}
          />
          <Typography className={styles.normal_text}>
            Cập nhật {hour} giờ trước
          </Typography>
        </Stack>
        <Typography className={styles.normal_text}>
          Còn <span style={{ fontWeight: '700' }}>{date}</span> ngày trước
        </Typography>
      </Stack>
      <Typography className={styles.normal_text}>{content}</Typography>
      <Typography
        sx={{
          typography: { lg: 'h5', xs: 'body1' },
          fontWeight: '400',
          display: { lg: 'initial', xs: 'none' },
        }}
      >
        {`${formatThousands(salary, { separator: '.' })} VNĐ`}
      </Typography>
      <Stack
        direction={{ lg: 'row' }}
        alignItems={{ lg: 'center', xs: 'start' }}
        justifyContent={{ lg: 'space-between', xs: 'start' }}
      >
        <Stack direction="row" alignItems="center" spacing="20px">
          <Avatar src={avatar} />
          <Typography variant="body2">{company}</Typography>
        </Stack>
        <CustomButton
          className={`${styles.button} ${
            hovering ? styles.show : styles.unShow
          }`}
          sx={{ backgroundColor: PRIMARY_COLOR }}
        >
          Xem chi tiết
        </CustomButton>
        {/* <Typography
          sx={{
            typography: { lg: 'h5', xs: 'body1' },
            fontWeight: '400',
            display: { lg: 'initial', xs: 'none' },
          }}
        >
          {salary}
        </Typography> */}
      </Stack>
      <Stack
        direction={{ lg: 'row', xs: 'column' }}
        justifyContent="space-between"
        spacing={{ xs: '20px' }}
      >
        {/* <Stack direction="row" spacing="12px">
          {tags.map((t) => (
            <Chip
              label={t}
              style={{
                background: 'rgba(0, 171, 85, 0.08)',
                borderRadius: '6px',
              }}
            />
          ))}
        </Stack> */}
      </Stack>
    </Stack>
  )
}
