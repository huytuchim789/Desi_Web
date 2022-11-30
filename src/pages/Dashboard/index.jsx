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
import React from 'react'
import styles from './../Dashboard/dashboard.module.css'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CustomTable from 'components/CustomTable'
const tabs = ['Việc làm đã ứng tuyển', 'Việc làm yêu thích ']
export default function Dashboard() {
  const [value, setValue] = React.useState(0)
  const [choice, setChoice] = React.useState(0)
  const [choices, setChoices] = React.useState([
    {
      num: 1,
      label: 'Chờ phản hồi',
      color: '#FFC107',
    },
    {
      num: 1,
      label: 'Đã nhận',
      color: '#00AB55',
    },
    {
      num: 1,
      label: 'Bị từ chối ',
      color: '#FF4842',
    },
    {
      num: 1,
      label: 'Tất cả',
      color: '#DFE3E8',
    },
  ])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChoice = (event, newValue) => {
    setChoice(newValue)
  }
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={2.5}>
          <CustomDrawer />
        </Grid>
        <Grid item lg={9.5}>
          <Stack className={styles.dashboard} spacing="30px">
            <Typography variant="h5">Quản lý việc làm </Typography>
            <Typography className={styles.normal_text} fontWeight={400}>
              Bạn có thể quản lý các công việc yêu thích hoặc công việc đã ứng
              tuyển tại đây
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabs.map((t) => (
                <Tab label={t}></Tab>
              ))}
            </Tabs>
            <Stack spacing="10px">
              <Tabs
                aria-label="basic tabs example"
                value={choice}
                onChange={handleChoice}
                className={styles.tab_header}
              >
                {choices.map((t) => (
                  <Tab
                    label={
                      <Stack direction="row" spacing="15px">
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            width: '21px',
                            height: '21px',
                            borderRadius: '6px',
                            backgroundColor: t.color,
                          }}
                        >
                          {t.num}
                        </Stack>
                        <Typography
                          className={styles.normal_text}
                          fontWeight={600}
                        >
                          {t.label}
                        </Typography>
                      </Stack>
                    }
                  ></Tab>
                ))}
              </Tabs>
              <Box>
                <TextField
                  hiddenLabel
                  id="outlined-start-adornment"
                  fullWidth
                  placeholder="Tìm kiếm việc làm cụ thể..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <CustomTable />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
