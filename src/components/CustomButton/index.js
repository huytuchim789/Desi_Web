import { Button } from '@mui/material'
import React from 'react'
import styles from './../CustomButton/Button.module.css'
export default function CustomButton({ children, style, className, ...props }) {
  return (
    <Button
      variant="contained"
      className={`${className} ${styles.buttons} `}
      //   disableElevation
      //   disableFocusRipple
      //   disableRipple
      {...props}
    >
      {children}
    </Button>
  )
}
