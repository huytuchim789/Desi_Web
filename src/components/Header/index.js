import { Box, Grid, Stack, Typography } from '@mui/material'
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
    <Grid
      container
      className={styles.header}
      spacing={{ lg: '200px', xs: '0' }}
    >
      <Grid item lg={6} xs={12}>
        <Stack
          direction={{ lg: 'row', xs: 'column' }}
          spacing={{ lg: '56px', xs: '5px' }}
          alignItems={{ lg: 'center', xs: 'left' }}
        >
          <Link>
            <img className={styles.logo} src={Logo} alt="" />
          </Link>
          <Link>
            <Typography className={styles.normal_text} noWrap>
              Tìm việc làm
            </Typography>
          </Link>
          <Link>
            <Typography className={styles.normal_text} noWrap>
              Tìm Freelancer
            </Typography>
          </Link>
          <Link>
            <Typography className={styles.normal_text} noWrap>
              Blog
            </Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Stack
          spacing={'40px'}
          direction={{ lg: 'row', xs: 'column' }}
          alignItems="center"
          justifyContent={{ lg: 'end' }}
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
              sx={{ display: { lg: 'inline', xs: 'none' } }}
            >
              <MenuItem value={'VI'}>VI</MenuItem>
              <MenuItem value={'EN'}>EN</MenuItem>
              <MenuItem value={'JP'}>JP</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="text"
            style={{
              lineHeight: '27px',
              color: PRIMARY_COLOR,
              whiteSpace: 'nowrap',
              // minWidth: '80px',
            }}
            sx={{
              width: { xs: '100%', lg: 'initial' },
              border: { lg: 'none', xs: `1px solid ${PRIMARY_COLOR}` },
            }}
            disableElevation
            disableFocusRipple
            disableRipple
          >
            Đăng nhập
          </Button>
          <CustomButton
            className={styles.button}
            style={{
              backgroundColor: PRIMARY_COLOR,
              whiteSpace: 'nowrap',
              // minWidth: '80px',
            }}
            sx={{
              width: { xs: '100%', lg: 'initial' },
            }}
          >
            Đăng ký
          </CustomButton>
          <CustomButton
            className={styles.button}
            style={{
              backgroundColor: SECONDARY_COLOR,
              whiteSpace: 'nowrap',
              // minWidth: '80px',
            }}
            sx={{
              width: { xs: '100%', lg: 'initial' },
            }}
          >
            Đăng tin tuyển dụng
          </CustomButton>
        </Stack>
      </Grid>
    </Grid>
  )
}
