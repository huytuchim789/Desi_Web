import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import React, { useEffect } from 'react'
import styles from './../Competence/index.module.css'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CustomUploadFile from 'components/CustomUploadFile'
import CustomButton from 'components/CustomButton'
import { PRIMARY_COLOR } from 'utilities/constant'

const requiredMessage = 'Nội dung chưa được nhập'
const schema = yup
  .object({
    name: yup.string().required(requiredMessage),
    link: yup.string().required(requiredMessage),
    description: yup.string().required(requiredMessage),
  })
  .required()
export default function Competence() {
  const {
    register,
    handleSubmit,
    setValue: setValueForm,
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <Stack alignItems="center" className={styles.form_container} spacing="30px">
      <Stack spacing="20px">
        <Typography className={styles.notice_content}>
          Hồ sơ năng lực là các dự án cũ hoặc các công việc bạn đã từng làm
          trước đâu (bao gồm cả các khách hàng bên ngoài vLance). Khách hàng
          trước khi giao việc thường xem qua các hồ sơ năng lực của freelancer
          rồi mới quyết định thuê. Vì vậy hãy đăng càng nhiều hồ sơ năng lực
          chất lượng, bạn càng có thêm nhiều cơ hội!
        </Typography>
        <Typography className={styles.notice_content}>
          {
            <span style={{ color: '#212B36', fontWeight: 600 }}>
              Hiện tại bạn chưa có hồ sơ năng lực nào
            </span>
          }
          . Hãy dùng form dưới đây để bắt đầu đăng hồ sơ đầu tiên ngay bây giờ
          nhé.
        </Typography>
      </Stack>
      <form
        className={styles.form}
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '100%',
          padding: '30px 60px',
          rowGap: '30px',
        }}
      >
        <CustomUploadFile
          setValue={setValueForm}
          text="Cho phép tải lên file dung lượng dưới 5 MB, kích thước tối đa là 1600x900px, kích thước tối thiểu 380x214px
 và tệp định dạng *.jpeg, *.jpg, *.png
"
          size="big"
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.name}
              id="outlined-error"
              label="Tiêu đề dự án (tên sản phẩm)"
              placeholder="Nhập tên dự án (sản phẩm)"
              helperText={errors?.name?.message}
              sx={{ width: '100%' }}
            />
          )}
        />{' '}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.description}
              required
              id="outlined-error"
              hiddenLabel
              multiline
              rows={10}
              placeholder="Mô tả về dự án hoặc sản phẩm (tối đa 100 ký tự) *"
              helperText={errors?.description?.message}
              sx={{ width: '100%' }}
            />
          )}
        />
        <Controller
          name="link"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.link}
              required
              {...field}
              id="outlined-error"
              label="Link sản phẩm (link dẫn đến dự án hoặc sản phẩm này được đăng tải trên các nền tảng thiết kế khác. Ví dụ: Behance, Dribbble,...)"
              placeholder="Nhập link dự án (sản phẩm)"
              helperText={errors?.link?.message}
              sx={{ width: '100%' }}
            />
          )}
        />
      </form>
      <Stack direction="row" sx={{ width: '100%' }} justifyContent="flex-end">
        <CustomButton
          form="form"
          type="submit"
          disabled={!isValid}
          className={styles.button}
          sx={{
            width: { xs: '100%', lg: '20%' },
            backgroundColor: PRIMARY_COLOR,
            whiteSpace: 'nowrap',
            padding: '11px 123px',
          }}
        >
          Lưu hồ sơ
        </CustomButton>
      </Stack>
    </Stack>
  )
}
