import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CustomButton from 'components/CustomButton'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { PRIMARY_COLOR } from 'utilities/constant'
import Logo from './../../../images/logo.svg'
import styles from './../ForgetPassword/Forget.module.css'
import toast from '../../../utilities/toast'
import CustomizedSnackbars from 'components/Toast'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility } from '@mui/icons-material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const requiredMessage = 'Nội dung chưa được nhập'
const schema1 = yup
  .object({
    email: yup
      .string()
      .email('Bạn chưa nhập đúng định dạng email')
      .required(requiredMessage),
  })
  .required()
const schema2 = yup
  .object({
    email: yup
      .string()
      .email('Bạn chưa nhập đúng định dạng email')
      .required(requiredMessage),
    password: yup.string().required(requiredMessage),
    password_confirmation: yup.string().required(requiredMessage),
  })
  .required()
const ForgetPassword = () => {
  const [otp, setOtp] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showAgainPassword, setAgainShowPassword] = useState(false)
  const [step, setStep] = useState(0)
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(step === 0 ? schema1 : schema2),
    mode: 'onChange',
  })
  console.log(Object.keys(errors).length, step)
  const onSubmit = (data) => console.log(data)
  return (
    <Stack className={styles.forget} alignItems="center" spacing="35px">
      <img src={Logo} alt="" className={styles.logo} />
      <Typography variant="h4">
        {step === 0
          ? 'Quên mật khẩu?'
          : step === 1
          ? 'Yêu cầu đã được gửi!'
          : 'Đổi mật khẩu thành công!'}
      </Typography>
      <Typography variant="body2" className={styles.normal_text}>
        {step === 0
          ? 'Vui lòng điền địa chỉ email bạn đã đăng ký và chúng tôi sẽ gửi cho bạn đường link để đặt lại mật khẩu'
          : step === 1
          ? 'Chúng tôi đã gửi mã code gồm 6 chữ số qua email bạn đã đăng ký. Vui lòng điền mã code để đổi mật khẩu!'
          : 'Bạn có tối đa 10 lần đổi mật khẩu trong một tháng '}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
        <Stack spacing="25px">
          {step === 0 || step === 1 ? (
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
          ) : (
            <></>
          )}
          {step === 0 ? (
            <></>
          ) : step === 1 ? (
            <>
              <OtpInput
                className={styles.otp}
                value={otp}
                isInputNum
                onChange={(otp) => {
                  console.log(otp)
                  setOtp(otp)
                }}
                numInputs={6}
                separator={<></>}
                containerStyle={{ width: '100%', justifyContent: 'center' }}
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
            </>
          ) : (
            <></>
          )}

          <CustomButton
            type="submit"
            disabled={!isValid}
            className={styles.button}
            sx={{
              width: { xs: '100%', lg: 'initial' },
              backgroundColor: PRIMARY_COLOR,
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              setStep((step) => step + 1)
            }}
          >
            {step === 0
              ? 'Đặt lại mật khẩu'
              : step === 1
              ? 'Đổi mật khẩu'
              : 'Đăng nhập'}
          </CustomButton>
          {step === 0 ? (
            <Link
              sx={{ color: PRIMARY_COLOR, fontWeight: 700, width: '100%' }}
              underline="none"
              href="/signUp"
              align="center"
              onClick={() => {
                setStep(0)
              }}
            >
              Trở về
            </Link>
          ) : step === 1 ? (
            <Typography variant="body2" align="center">
              Không nhận được mã code?
              {
                <Link
                  sx={{ color: PRIMARY_COLOR, fontWeight: 600 }}
                  underline="none"
                  href="#"
                  onClick={() => {}}
                >
                  {' Gửi lại mã'}
                </Link>
              }
            </Typography>
          ) : (
            <></>
          )}
        </Stack>
      </form>

      <CustomizedSnackbars
        open={open}
        message="Xác nhận email thành công"
        setOpen={setOpen}
      />
    </Stack>
  )
}

export default ForgetPassword
