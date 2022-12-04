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
import styles from './../Confirm/index.module.css'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CustomUploadFile from 'components/CustomUploadFile'
import CustomButton from 'components/CustomButton'
import { PRIMARY_COLOR } from 'utilities/constant'
import CustomUploadFileSquare from 'components/CustomUploadSquare'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
const types = [
  { label: 'Chứng minh nhân dân (CMND)', value: 'cmnd' },
  { label: 'Căn cước công dân (CCCD)', value: 'cccd' },
]
const cities = [
  {
    value: 'USD',
    label: 'Hà Nội',
  },
  {
    value: 'EUR',
    label: 'TP.HCM',
  },
  {
    value: 'BTC',
    label: 'Hòa Bình',
  },
]
const requiredMessage = 'Nội dung chưa được nhập'
const schema = yup
  .object({
    name: yup.string().required(requiredMessage),
    link: yup.string().required(requiredMessage),
    description: yup.string().required(requiredMessage),
  })
  .required()
export default function Confirm() {
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
    defaultValues: {
      birth: null,
      supply_date: null,
    },
  })
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <Stack className={styles.form_container} spacing="30px">
      <Stack spacing="20px">
        <Typography variant="h6">Xác thực CMND</Typography>
        <Stack>
          <Typography>Xác thực CMND mang lại những lợi ích gì?</Typography>
          <ul>
            <li>
              Đảm bảo hoàn toàn độ tin cậy đối với khách hàng và freelancer.
            </li>
            <li>
              95% tài khoản đã xác thực CMND qua Desi được thuê hoặc tìm được
              freelancer chất lượng.
            </li>
            <li>
              Quá trình thanh toán nhanh hơn, các vấn đề tài khoản hay khó khăn
              khi làm việc có thể được giải quyết nhanh chóng.
            </li>
          </ul>
        </Stack>
        <Grid container justifyContent="space-between">
          <Grid item lg={5}>
            <Stack>
              <Typography sx={{ color: '#637381' }} fontWeight={600}>
                Chụp CMND như thế nào cho đúng cách?
              </Typography>
              <ul>
                <li>CMND được chụp chính diện, không nghiêng ngả.</li>
                <li>
                  Chụp trên nền mầu trắng, không bị xen lẫn chữ hay hình vẽ.
                </li>
                <li>Ảnh chụp CMND phải thấy hết toàn bộ CMND, không bị cắt</li>
                <li>Xoay ảnh đúng chiều đọc được khi chụp xong.</li>
              </ul>
            </Stack>
          </Grid>
          <Grid item lg={5}>
            <Stack>
              <Typography sx={{ color: '#637381' }} fontWeight={600}>
                Làm cách nào để xác thực CMND?
              </Typography>
              <ul>
                <li>Scan và đăng lên Ảnh CMND cả 2 mặt.</li>
                <li>Điền đầy đủ, chính xác Số CMND, Ngày cấp, Nơi cấp.</li>
                <li>Bấm nút Lưu thông tin CMND.</li>
                <li>Desi sẽ xác thực trong vòng 72 tiếng.</li>
              </ul>
            </Stack>
          </Grid>
        </Grid>
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
        <Controller
          name="cccd"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.cccd}
              required
              select
              {...field}
              id="outlined-error"
              label="Loại thẻ"
              placeholder="Căn cước công dân (CCCD)"
              helperText={errors?.cccd?.message}
              sx={{ width: '100%' }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />{' '}
        <CustomUploadFileSquare
          front
          text={
            ' Kích thước < 10MB. Định dạng jpg, jpeg, png, gif. Độ phân giải tối thiểu 1200x1200px'
          }
        />
        <CustomUploadFileSquare text="Kích thước < 10MB. Định dạng jpg, jpeg, png, gif. Độ phân giải tối thiểu 1200x1200px" />
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.id}
              id="outlined-error"
              label="Mã số ID"
              placeholder="Nhập mã số ID"
              helperText={errors?.id?.message}
              sx={{ width: '100%' }}
            />
          )}
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
              label="Họ tên"
              placeholder="Nhập họ tên đầy đủ có dấu"
              helperText={errors?.name?.message}
              sx={{ width: '48%' }}
            />
          )}
        />
        <Controller
          name="birth"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày sinh"
                {...field}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    error={!!errors?.birth}
                    id="outlined-error"
                    placeholder="Chọn ngày sinh"
                    helperText={errors?.birth?.message}
                    sx={{ width: '48%' }}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name="supply_date"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày cấp CMND/CCCD"
                {...field}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    error={!!errors?.supply_date}
                    id="outlined-error"
                    placeholder="VD: 18/05/2021"
                    helperText={errors?.supply_date?.message}
                    sx={{ width: '48%' }}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.city}
              required
              select
              {...field}
              id="outlined-error"
              label="Nơi cấp CMND/CCCD"
              placeholder="Chọn thành phố"
              helperText={errors?.city?.message}
              sx={{ width: '48%' }}
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
