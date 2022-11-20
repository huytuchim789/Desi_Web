import { Stack, Typography } from '@mui/material'
import CustomButton from 'components/CustomButton'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { PRIMARY_COLOR } from 'utilities/constant'
import Logo from './../../../images/logo.svg'
import styles from './../Confirmation/Forget.module.css'
import toast from '../../../utilities/toast'
import CustomizedSnackbars from 'components/Toast'
const Confirmation = () => {
  const [otp, setOtp] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <Stack className={styles.forget} alignItems="center" spacing="35px">
      <img src={Logo} alt="" className={styles.logo} />
      <Typography variant="h4">Vui lòng kiểm tra email!</Typography>
      <Typography variant="body2" className={styles.normal_text}>
        Chúng tôi đã gửi tới email bạn đăng ký một mã code gồm 6 chữ số. Vui
        lòng kiểm tra email và điền mã code tại đây.
      </Typography>
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
      <CustomButton
        className={styles.button}
        disabled={otp.length < 6}
        sx={{
          backgroundColor: PRIMARY_COLOR,
          whiteSpace: 'nowrap',
        }}
        fullWidth
        onClick={() => {
          setOpen(true)
        }}
      >
        Xác Nhận
      </CustomButton>
      <Typography variant="body2">
        Không nhận được mã xác nhận?{' '}
        <span
          style={{ color: PRIMARY_COLOR, fontWeight: 700, cursor: 'pointer' }}
        >
          Gửi lại mã
        </span>
      </Typography>
      <CustomizedSnackbars
        open={open}
        message="Xác nhận email thành công"
        setOpen={setOpen}
      />
    </Stack>
  )
}

export default Confirmation
