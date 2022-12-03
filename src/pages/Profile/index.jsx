import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CustomDrawer from 'components/CustomDrawler'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useEffect } from 'react'
import styles from './../Profile/profile.module.css'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CustomUploadFile from 'components/CustomUploadFile'

const tabs = ['Thông tin cá nhân', 'Hồ sơ năng lực', 'Xác thực thông tin']

const requiredMessage = 'Nội dung chưa được nhập'
const schema = yup
  .object({
    name: yup.string().required(requiredMessage),
    email: yup
      .string()
      .email('Bạn chưa nhập đúng định dạng email')
      .required(requiredMessage),
  })
  .required()

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]
export default function Profile() {
  const [value, setValue] = React.useState(0)

  useEffect(() => {}, [])

  useEffect(() => {}, [])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={2.2}>
          <CustomDrawer />
        </Grid>
        <Grid item lg={9.8}>
          <Stack className={styles.dashboard} spacing="50px">
            <Stack spacing="10px">
              <Typography variant="h5">Hồ sơ cá nhân </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Bạn có thể quản lý các thông tin cá nhân tại đây
              </Typography>
            </Stack>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabs.map((t) => (
                <Tab label={t}></Tab>
              ))}
            </Tabs>
          </Stack>
          <Stack className={styles.form} alignItems="center">
            <CustomUploadFile />
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                width: '100%',
                padding: '0 80px',
              }}
            >
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
                    sx={{ width: '47%' }}
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
                    sx={{ width: '47%' }}
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
                    error={!!errors.phone}
                    id="outlined-error"
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                    helperText={errors?.phone?.message}
                    sx={{ width: '47%' }}
                  />
                )}
              />
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <TextField
                    error={!!errors.email}
                    required
                    {...field}
                    id="outlined-error"
                    label="Thành phố"
                    placeholder="Nhập thành phố"
                    helperText={errors?.email?.message}
                    sx={{ width: '47%' }}
                  />
                )}
              />
            </form>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
