import { Button } from '@mui/material'
import React from 'react'
import styles from './../CustomButton/Button.module.css'
export default function CustomButton({ children, style, ...props }) {
  return (
    <Button
      variant="contained"
      style={style}
      //   disableElevation
      //   disableFocusRipple
      //   disableRipple
      {...props}
    >
      {children}
    </Button>
  )
}
