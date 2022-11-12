import { Box, Chip, Typography, Stack, Avatar } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOR } from '../../utilities/constant'
import CustomButton from '../CustomButton'
import styles from './../NewestCard/NewestCard.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
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
  return (
    <Stack spacing="21px" className={styles.newest_card}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="16px">
          <Typography variant="h5">{name}</Typography>
          <Chip
            label="Mới nhất"
            style={{ color: '#fff', backgroundColor: '#1890FF' }}
          />
        </Stack>
        <FavoriteBorderIcon />
      </Stack>
      <Typography className={styles.normal_text}>{content}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing="20px">
          <Avatar src={avatar} />
          <Typography variant="body2">{company}</Typography>
        </Stack>
        <Typography variant="h5">{salary}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="12px">
          {tags.map((t) => (
            <Chip
              label={t}
              style={{
                background: 'rgba(0, 171, 85, 0.08)',
                borderRadius: '6px',
              }}
            />
          ))}
        </Stack>
        <CustomButton
          className={styles.button}
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          Xem chi tiết
        </CustomButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        style={{ color: '#637381' }}
      >
        <Typography className={styles.normal_text}>
          Cập nhật {hour} giờ trước
        </Typography>
        <Typography className={styles.normal_text}>
          Còn <span style={{ fontWeight: '700' }}>{date}</span> ngày trước
        </Typography>
      </Stack>
    </Stack>
  )
}
