import { useEffect, forwardRef, useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { PRIMARY_COLOR, SUCCESS_COLOR } from 'utilities/constant'
import styles from './../Toast/toast.module.css'
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbars({ message, open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      className={styles.toast}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        iconMapping={{
          success: <CheckCircleRoundedIcon sx={{ color: PRIMARY_COLOR }} />,
        }}
        onClose={handleClose}
        severity="success"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
