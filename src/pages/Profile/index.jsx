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
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CustomTable from 'components/CustomTable'
import { useDashboardStore } from './store'
import { ACCEPTED, dashboardData, REJECTED, WAITING } from 'utilities/constant'
const tabs = ['Thông tin cá nhân', 'Hồ sơ năng lực', 'Xác thực thông tin']
export default function Profile() {
  const { datas, setDatas } = useDashboardStore((state) => state)
  const [value, setValue] = React.useState(0)

  useEffect(() => {}, [])

  useEffect(() => {}, [])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
              {' '}
              <Typography variant="h5">Quản lý việc làm </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Bạn có thể quản lý các công việc yêu thích hoặc công việc đã ứng
                tuyển tại đây
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
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
