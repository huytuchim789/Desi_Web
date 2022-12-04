import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  InputAdornment,
  MenuItem,
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
import PrivateProfile from './PrivateProfile'
import TabPanel from '@mui/lab/TabPanel'
import { TabContext } from '@mui/lab'
import Competence from './Competence'
import Confirm from './Confirm'

const tabs = [
  { label: 'Thông tin cá nhân', value: 0 },
  { label: 'Hồ sơ năng lực', value: 1 },
  { label: 'Xác thực thông tin', value: 2 },
]
export default function Profile() {
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
              <Typography variant="h5">Hồ sơ cá nhân </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Bạn có thể quản lý các thông tin cá nhân tại đây
              </Typography>
            </Stack>
            <TabContext value={value}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {tabs.map((t) => (
                  <Tab label={t.label} value={t.value}></Tab>
                ))}
              </Tabs>
              <TabPanel value={0}>
                <PrivateProfile />
              </TabPanel>
              <TabPanel value={1}>
                <Competence />
              </TabPanel>
              <TabPanel value={2}>
                <Confirm />
              </TabPanel>
            </TabContext>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
