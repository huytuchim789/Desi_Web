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
import styles from './../PrivateProfile/index.module.css'

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
    email: yup
      .string()
      .email('Bạn chưa nhập đúng định dạng email')
      .required(requiredMessage),
    phone: yup.string().required(requiredMessage),
    city: yup.string().required(requiredMessage),
    address: yup.string(),
    job: yup.string().required(requiredMessage),
    level: yup.string().required(requiredMessage),
    skills: yup.array(),
    web: yup.string(),
    salary: yup.string(),
    time: yup.string().required(requiredMessage),
    description: yup.string().required(requiredMessage),
    ava: yup.string().required(requiredMessage),
  })
  .required()
const times = [
  { label: 'Bán thời gian (dưới 40h/tuần)', value: '40' },
  { label: 'Toàn thời gian (trên 40h/tuần)', value: '41' },
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
const levels = [
  { label: 'Mới đi làm', value: 'new' },
  { label: 'Đã có kinh nghiệm', value: 'exp' },
  { label: 'Chuyên gia', value: 'pro' },
]
const skills = [
  { title: 'Adobe Skills 1', value: 'adobe 1' },
  { title: 'Adobe Skills 2', value: 'adobe 2' },
  { title: 'Adobe Skills 3', value: 'adobe 3' },
  { title: 'Adobe Skills 4', value: 'adobe 4' },
]
export default function PrivateProfile() {
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
          text=" Cho phép tải lên file dung lượng dưới 2 MB và tệp định dạng *.jpeg,
        *.jpg, *.png"
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
              placeholder="Nhập họ tên"
              helperText={errors?.name?.message}
              sx={{ width: '48%' }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.email}
              required
              {...field}
              id="outlined-error"
              label="Email"
              placeholder="Nhập email"
              helperText={errors?.email?.message}
              sx={{ width: '48%' }}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.phone}
              id="outlined-error"
              label="Số điện thoại"
              placeholder="Nhập số điện thoại"
              helperText={errors?.phone?.message}
              sx={{ width: '48%' }}
            />
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
              label="Thành phố"
              placeholder="Nhập thành phố"
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
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.address}
              id="outlined-error"
              label="Địa chỉ"
              placeholder="Nhập địa chỉ của bạn"
              helperText={errors?.address?.message}
              sx={{ width: '100%' }}
            />
          )}
        />
        <Controller
          name="job"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.job}
              id="outlined-error"
              label="Chức danh"
              placeholder="Nhập chức danh (Graphic Designer, UI/UX Designer, Artist,...)"
              helperText={errors?.job?.message}
              sx={{ width: '48%' }}
            />
          )}
        />
        <Controller
          name="level"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.level}
              required
              select
              {...field}
              id="outlined-error"
              label="Trình độ"
              placeholder="Chọn trình độ"
              helperText={errors?.level?.message}
              sx={{ width: '48%' }}
            >
              {levels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Autocomplete
              multiple
              options={skills}
              getOptionLabel={(option) => option.title}
              defaultValue={[skills[2]]}
              sx={{ width: '48%' }}
              isOptionEqualToValue={(option, value) => {
                return option.value === value.value
              }}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={
                      <Typography fontWeight={400}>{option.title}</Typography>
                    }
                    {...getTagProps({ index })}
                  />
                ))
              }
              {...field}
              onChange={(e, v) => setValueForm('skills', v)}
              renderInput={(params) => (
                <TextField
                  error={!!errors.skills}
                  {...params}
                  id="outlined-error"
                  label="Kĩ năng chính"
                  placeholder="Chọn kĩ năng"
                  helperText={errors?.skills?.message}
                ></TextField>
              )}
            />
          )}
        />
        <Controller
          name="web"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.web}
              id="outlined-error"
              label="Website cá nhân (nếu có)"
              placeholder="Nhập link website"
              helperText={errors?.web?.message}
              sx={{ width: '48%' }}
            />
          )}
        />{' '}
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.time}
              required
              select
              {...field}
              id="outlined-error"
              label="Thời gian làm việc"
              placeholder="Chọn thời gian làm việc "
              helperText={errors?.time?.message}
              sx={{ width: '48%' }}
            >
              {times.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="salary"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.salary}
              id="outlined-error"
              label="Mức lương mong đợi"
              placeholder="Nhập mức lương (đơn vị tính viết rõ bằng chữ: 2 triệu)"
              helperText={errors?.salary?.message}
              sx={{ width: '48%' }}
            />
          )}
        />
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
              placeholder="Mô tả ngắn về bản thân (tối đa 100 ký tự) *"
              helperText={errors?.description?.message}
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
          Lưu thông tin
        </CustomButton>
      </Stack>
    </Stack>
  )
}
