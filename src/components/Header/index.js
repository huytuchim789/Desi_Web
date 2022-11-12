import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styles from './../Header/Header.module.css'
import Button from '@mui/material/Button'
import CustomButton from '../CustomButton'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utilities/constant'

export default function Header() {
  const [language, setLanguage] = React.useState('VI')

  const handleChange = (event) => {
    setLanguage(event.target.value)
  }
  return (
    <Grid container className={styles.header} spacing="200px">
      <Grid item xs={6}>
        <Stack direction="row" spacing={'56px'} alignItems="center">
          <Link>
            <img className={styles.logo} src={Logo} alt="" />
          </Link>
          <Link>Tìm việc làm</Link>
          <Link>Tìm Freelancer</Link>
          <Link>Blog</Link>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          spacing={'40px'}
          direction="row"
          alignItems="center"
          justifyContent="end"
          height={'100%'}
        >
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={language}
              onChange={handleChange}
              disableUnderline
              style={{ paddingBottom: '0px' }}
            >
              <MenuItem value={'VI'}>VI</MenuItem>
              <MenuItem value={'EN'}>EN</MenuItem>
              <MenuItem value={'JP'}>JP</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="text"
            style={{ lineHeight: '27px', color: PRIMARY_COLOR }}
            disableElevation
            disableFocusRipple
            disableRipple
          >
            Đăng nhập
          </Button>
          <CustomButton
            className={styles.button}
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Đăng ký
          </CustomButton>
          <CustomButton
            className={styles.button}
            style={{ backgroundColor: SECONDARY_COLOR }}
          >
            Đăng tin tuyển dụng
          </CustomButton>
        </Stack>
      </Grid>
    </Grid>
  )
}
