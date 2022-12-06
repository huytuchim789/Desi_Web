import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import styles from './../FreelancerList/index.module.css'
import bgEmail from 'images/Outstanding/bg-input.svg'
import StarIcon from '@mui/icons-material/Star'
import CustomButton from 'components/CustomButton'
import SearchIcon from '@mui/icons-material/Search'

import { cardsData, PRIMARY_COLOR } from 'utilities/constant'
import { useState } from 'react'
import { useJobs } from 'pages/HiredDetail/store'
import CustomFreelancerCard from 'components/CustomFreelancerCard'
const jobsSelect = [
  { label: 'Tất cả công việc', value: 'all' },
  { label: 'Thiết kế nhận diện thương hiệu ', value: 'brand' },
  { label: 'Thiết kế hoạt họa', value: 'design' },
  { label: 'Thiết kế nội thất ', value: 'infra' },
]
const prices = [
  { label: 'Dưới 500.000 VND', value: [0, 500000] },
  { label: '500.000 - 1.500.000 VND', value: [500000, 1500000] },
  { label: '1.500.000 - 3.000.000 VND', value: [1500000, 3000000] },
  { label: 'Trên 3.000.000 VND', value: [3000000, 999999999999] },
]
const exs = [
  { label: 'Không yêu cầu ', value: 0, count: '1' },
  { label: '1 năm kinh nghiệm ', value: 1, count: '2' },
  { label: '1-2 năm kinh nghiệm', value: [1, 2], count: '3' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  { label: '2-3 năm kinh nghiệm ', value: [2, 3], count: '5' },
  { label: 'Trên 3 năm kinh nghiệm ', value: 3, count: '5' },
]
const FreelancerList = () => {
  const [job, setJob] = React.useState()
  const [price, setPrice] = React.useState()
  const [search, setSearch] = useState('')
  const [ex, setEx] = useState('')
  const { jobs, setJobs } = useJobs((state) => state)
  const filterSalary = (cards, price) => {
    let newPrice = price
    let newDataCards = cards
    console.log(cards, price)
    const newData = newDataCards
      .filter((c) => {
        if (newPrice) return c.salary > newPrice[0] && c.salary < newPrice[1]
        return true
      })
      .filter((c) => {
        if (job) return c.jobKey === job
        return true
      })
      .filter((c) => {
        if (search) return c.name.includes(search)

        return true
      })
      .filter((c) => {
        if (ex)
          return typeof ex === 'number'
            ? c.exp === ex
            : c.exp > ex[0] && c.exp < ex[1]
        return true
      })

    setJobs(newData)
  }
  const filterJob = (cards, job) => {
    let newDataCards = cards
    const newData = newDataCards
      .filter((c) => {
        if (job) return c.jobKey === job
        return true
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1]
        return true
      })
      .filter((c) => {
        if (search) return c.name.includes(search)

        return true
      })
      .filter((c) => {
        if (ex)
          return typeof ex === 'number'
            ? c.exp === ex
            : c.exp > ex[0] && c.exp < ex[1]
        return true
      })

    setJobs(newData)
  }
  const filterEx = (cards, job) => {
    let newDataCards = cards
    const newData = newDataCards
      .filter((c) => {
        if (ex)
          return typeof ex === 'number'
            ? c.exp === ex
            : c.exp > ex[0] && c.exp < ex[1]
        return true
      })
      .filter((c) => {
        if (job) return c.jobKey === job
        return true
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1]
        return true
      })
      .filter((c) => {
        if (search) return c.name.includes(search)

        return true
      })

    setJobs(newData)
  }
  const filterSearch = (cards, search) => {
    let newDataCards = cards
    const newData = newDataCards
      .filter((c) => {
        if (search) return c.name.includes(search)

        return true
      })
      .filter((c) => {
        if (price) return c.salary > price[0] && c.salary < price[1]
        return true
      })
      .filter((c) => {
        if (job) return c.jobKey === job
        return true
      })
      .filter((c) => {
        if (ex)
          return typeof ex === 'number'
            ? c.exp === ex
            : c.exp > ex[0] && c.exp < ex[1]
        return true
      })

    setJobs(newData)
  }
  return (
    <>
      <Header />
      <Stack
        className={styles.free}
        sx={{ padding: '110px', width: '100%' }}
        spacing={3}
      >
        <Stack spacing={3}>
          <Typography variant="h4">
            Tìm kiếm freelancer cho dự án của bạn
          </Typography>
          <Typography variant="body1" className={styles.normal_text}>
            Tìm những freelancer phù hợp và tốt nhất trên Desi - nền tảng kết
            nối freelancer trong lĩnh vực thiết kế
          </Typography>
          <Stack
            direction="row"
            sx={{
              backgroundImage: `url(${bgEmail})`,
              padding: '60px 40px',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              backgroundSize: 'cover',
              borderRadius: '10px',
            }}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <StarIcon sx={{ color: '#FFC107' }} />
              <Typography variant="h5" sx={{ color: '#FFFFFF' }}>
                Bạn muốn tìm freelancer phù hợp dự án của mình? Đăng tuyển ngay
              </Typography>
            </Stack>
            <CustomButton
              type="submit"
              sx={{
                width: { xs: '100%', lg: '20%' },
                whiteSpace: 'nowrap',
                backgroundColor: PRIMARY_COLOR,
                padding: '15px 45px',
              }}
            >
              Đăng tin tuyển dụng{' '}
            </CustomButton>
          </Stack>
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
              sx={{ width: '22%' }}
              onChange={(e) => {
                if (e.target.value) {
                  setSearch(e.target.value)
                  filterSearch(cardsData, e.target.value)
                  // filterJob(cardsData, job)
                  // filterSalary(cardsData, price)
                } else {
                  setJobs(cardsData)
                }
              }}
            />

            <FormControl sx={{ width: '22%' }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                hiddenLabel
                value={job}
                // placeholder="Danh mục công việc"
                displayEmpty
                renderValue={job ? undefined : () => 'Danh mục công việc'}
                onChange={(e) => {
                  if (e.target.value) {
                    setJob(e.target.value)
                    // filterSearch(cardsData, search)
                    filterJob(cardsData, e.target.value)
                    // filterSalary(cardsData, price)
                  } else {
                    setJobs(cardsData)
                  }
                }}
              >
                <Typography sx={{ padding: '16px 16px' }}>
                  Danh mục công việc <span>{` (${jobsSelect.length})`}</span>
                </Typography>
                {jobsSelect.map((job, i) => (
                  <MenuItem
                    className={styles.menu_item}
                    key={i}
                    value={job.value}
                  >
                    {job.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '22%' }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                hiddenLabel
                value={price}
                // placeholder="Danh mục công việc"
                displayEmpty
                renderValue={price ? undefined : () => 'Mức giá mong muốn'}
                onChange={(e) => {
                  if (e.target.value) {
                    setPrice(JSON.parse(e.target.value))
                    filterSalary(cardsData, JSON.parse(e.target.value))
                  }
                }}
              >
                <Typography sx={{ padding: '16px 16px' }}>
                  Danh mục công việc <span>{` (${prices.length})`}</span>
                </Typography>
                {prices.map((price, i) => (
                  <MenuItem
                    key={i}
                    value={JSON.stringify(price.value)}
                    className={styles.menu_item}
                  >
                    {price.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '22%' }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                hiddenLabel
                value={price}
                // placeholder="Danh mục công việc"
                displayEmpty
                renderValue={price ? undefined : () => 'Kinh nghiệm làm việc '}
                onChange={(e) => {
                  if (e.target.value) {
                    setEx(JSON.parse(e.target.value))
                    filterEx(cardsData, JSON.parse(e.target.value))
                  }
                }}
              >
                <Typography sx={{ padding: '16px 16px' }}>
                  Kinh nghiệm làm việc <span>{` (${prices.length})`}</span>
                </Typography>
                {exs.map((price, i) => (
                  <MenuItem
                    key={i}
                    value={JSON.stringify(price.value)}
                    className={styles.menu_item}
                  >
                    {price.label}
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
        </Stack>
        <Stack rowGap={5}>
          <CustomFreelancerCard />
          <CustomFreelancerCard />
          <CustomFreelancerCard />
          <CustomFreelancerCard />
          <CustomFreelancerCard />
          <CustomFreelancerCard />
        </Stack>
        <Pagination count={10} size="large" />
      </Stack>
      <Footer />
    </>
  )
}

export default FreelancerList
