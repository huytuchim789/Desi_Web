import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import img from './../../images/login/bro.svg'
import styles from './../Login/login.module.css'
import Logo from './../../images/logo.svg'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Visibility } from '@mui/icons-material'
import CustomButton from 'components/CustomButton'
import { PRIMARY_COLOR } from 'utilities/constant'
import Facebook from './../../images/login/ic_facebbook.svg'
import Google from './../../images/login/ic_google.svg'
import Linkedln from './../../images/login/ic_linkedin.svg'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const requiredMessage = 'Nội dung chưa được nhập'
const schema = yup
  .object({
    name: yup.string().required(requiredMessage),
    email: yup
      .string()
      .email('Bạn chưa nhập đúng định dạng email')
      .required(requiredMessage),
    password: yup.string().required(requiredMessage),
    password_confirmation: yup.string().required(requiredMessage),
  })
  .required()
const Login = () => {
  const [alignment, setAlignment] = React.useState('1')
  const [showPassword, setShowPassword] = useState(false)
  const [showAgainPassword, setAgainShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  console.log(errors)
  const onSubmit = (data) => console.log(data)
  return (
    <Grid container className={styles.login}>
      <Grid item lg={5} sx={{ background: 'rgba(145, 158, 171, 0.08)' }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: '100%' }}
          spacing="30px"
        >
          <img src={img} alt="" />
          <Typography variant="h4">Hỗ trợ Người tìm việc</Typography>
          <Typography variant="body2" className={styles.normal_text}>
            Nhà tuyển dụng chủ động tìm kiếm và liên hệ với bạn qua hệ thống kết
            nối ứng viên thông minh.
          </Typography>
        </Stack>
      </Grid>
      <Grid item lg={7} sx={{ padding: '60px 150px' }}>
        <Stack spacing="15px">
          <img src={Logo} alt="" className={styles.logo} />
          <Typography variant="h6">Chào mừng bạn đến với Desi!</Typography>
          <Typography variant="body2" className={styles.normal_text}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </Typography>
          <Typography
            variant="body2"
            className={styles.normal_text}
            sx={{ marginTop: '30px' }}
          >
            Để tối ưu tốt nhất cho trải nghiệm của bạn với Desi, vui lòng lựa
            chọn nhóm phù hợp nhất với bạn
            <span style={{ color: 'red' }}>*</span>
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
          <Stack spacing="25px">
            <ToggleButtonGroup
              fullWidth
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="1">Ứng viên</ToggleButton>
              <ToggleButton value="2">Nhà tuyển dụng</ToggleButton>
            </ToggleButtonGroup>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  error={!!errors.name}
                  id="outlined-error"
                  label="Name"
                  placeholder="Nhập họ tên"
                  helperText={errors?.name?.message}
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
                />
              )}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="password"
              render={({ field }) => (
                <FormControl
                  sx={{ m: 1, width: '100%' }}
                  variant="outlined"
                  required
                  error={!!errors.password}
                >
                  <InputLabel htmlFor="outlined-adornment-password1">
                    Mật khẩu
                  </InputLabel>
                  <OutlinedInput
                    // ref={ref}
                    {...field}
                    id="outlined-adornment-password1"
                    type={showPassword ? 'text' : 'password'}
                    label="Mật khẩu"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setShowPassword(!showPassword)
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault()
                          }}
                          edge="end"
                        >
                          {field.value ? <Visibility /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error={!!errors?.password}>
                    {errors?.password?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="password_confirmation"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password2" required>
                    Nhập lại Mật Khẩu
                  </InputLabel>
                  <OutlinedInput
                    // ref={ref}
                    name={name}
                    InputLabelProps={{ required: false }}
                    id="outlined-adornment-password2"
                    type={showAgainPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setAgainShowPassword(!showAgainPassword)
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault()
                          }}
                          edge="end"
                        >
                          {value ? <Visibility /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Nhập lại mật khẩu"
                  />
                  <FormHelperText error={!!errors?.password_confirmation}>
                    {errors?.password_confirmation?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <FormControlLabel
              control={<Checkbox checked={checked} />}
              onChange={() => {
                setChecked(!checked)
              }}
              defaultChecked={checked}
              label={
                <Typography variant="body2" className={styles.normal_text}>
                  Bằng việc đăng ký tài khoản, bạn đã đồng ý với
                  <span style={{ color: PRIMARY_COLOR, fontWeight: 700 }}>
                    {` Điều khoản dịch vụ `}
                  </span>
                  và
                  <span style={{ color: PRIMARY_COLOR, fontWeight: 700 }}>
                    {` Chính sách bảo mật `}
                  </span>
                  của chúng tôi
                </Typography>
              }
            />
            <CustomButton
              type="submit"
              disabled={!checked}
              className={styles.button}
              sx={{
                width: { xs: '100%', lg: 'initial' },
                backgroundColor: PRIMARY_COLOR,
                whiteSpace: 'nowrap',
              }}
              href="/confirm"
            >
              Đăng ký
            </CustomButton>
          </Stack>
        </form>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}>Hoặc</Divider>
        <ButtonGroup fullWidth sx={{ justifyContent: 'space-between' }}>
          <Button className={styles.logo_btn}>
            <img src={Facebook} />
          </Button>
          <Button className={styles.logo_btn}>
            <img src={Google} />
          </Button>
          <Button className={styles.logo_btn}>
            <img src={Linkedln} />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default Login
