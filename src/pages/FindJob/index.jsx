import {
  Autocomplete,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CustomButton from 'components/CustomButton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import { PRIMARY_COLOR } from 'utilities/constant'
import styles from './../FindJob/FindJob.module.css'
import SearchIcon from '@mui/icons-material/Search'

const jobs = [
  'Tất cả công việc',
  'Thiết kế nhận diện thương hiệu ',
  'Thiết kế đồ họa truyền thông ',
  'Thiết kế hoạt họa',
  'Thiết kế nội thất ',
]
const prices = [
  'Dưới 500.000 VND',
  '500.000 - 1.500.000 VND',
  '1.500.000 - 3.000.000 VND',
]
export default function FindJob() {
  const [job, setJob] = React.useState('')
  const [price, setPrice] = React.useState('')

  return (
    <>
      <Header />
      <Stack
        direction="row"
        className={styles.findJob}
        justifyContent="space-between"
      >
        <OutlinedInput
          required
          id="outlined-required"
          hiddenLabel
          placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
          sx={{ width: '30%' }}
        />

        <FormControl sx={{ width: '30%' }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            hiddenLabel
            value={job}
            // placeholder="Danh mục công việc"
            displayEmpty
            renderValue={job !== '' ? undefined : () => 'Danh mục công việc'}
            onChange={(e) => {
              setJob(e.target.value)
            }}
          >
            <Typography sx={{ padding: '16px 16px' }}>
              Danh mục công việc <span>{` (${jobs.length})`}</span>
            </Typography>
            {jobs.map((job) => (
              <MenuItem className={styles.menu_item} key={job} value={job}>
                {job}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: '30%' }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            hiddenLabel
            value={price}
            // placeholder="Danh mục công việc"
            displayEmpty
            renderValue={price !== '' ? undefined : () => 'Mức giá mong muốn'}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          >
            <Typography sx={{ padding: '16px 16px' }}>
              Danh mục công việc <span>{` (${prices.length})`}</span>
            </Typography>
            {prices.map((price) => (
              <MenuItem key={price} value={price} className={styles.menu_item}>
                {price}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton
          sx={{
            width: { xs: '100%', lg: 'initial' },
            backgroundColor: PRIMARY_COLOR,
            whiteSpace: 'nowrap',
          }}
          startIcon={<SearchIcon />}
        >
          Tìm kiếm
        </CustomButton>
      </Stack>
      <Footer />
    </>
  )
}
