import {
  Autocomplete,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Chip,
  FilledInput,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import CustomButton from 'components/CustomButton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useEffect, useState } from 'react'
import { cardsData, PRIMARY_COLOR } from 'utilities/constant'
import styles from './../JobDetail/FindJob.module.css'
import SearchIcon from '@mui/icons-material/Search'
import img from 'images/JobDetail/logo.svg'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import NewestCard from 'components/NewestCard'
import l1 from 'images/JobDetail/ic_cost.svg'
import l2 from 'images/JobDetail/ic_verified.svg'
import l3 from 'images/JobDetail/ic_user_group.svg'
import l4 from 'images/JobDetail/ic_job.svg'
import l5 from 'images/JobDetail/ic_location.svg'
import BoltIcon from '@mui/icons-material/Bolt'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CopyToClipboardButton from 'components/InputCopyClipboard'
import Facebook from 'images/Social Media.svg'
import Youtube from 'images/Social Media (2).svg'
import Linkedln from 'images/Social Media (3).svg'
const jobs = [
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
const tabs = [
  { label: 'Mới Nhất', value: 'newest', count: '1' },
  { label: 'Thiết kế bao bì', value: 'design', count: '2' },
  { label: 'Thiết kế nội thất', value: 'infra', count: '3' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  // { label: 'Thiết kế bao bì', value: 15, count: '4' },
  { label: 'Thiết kế nhận diện thương hiệu ', value: 'brand', count: '5' },
]
const recruits = [
  {
    logo: l1,
    header: 'Mức lương',
    content: '2-4 triệu',
  },
  {
    logo: l2,
    header: 'Kinh nghiệm',
    content: 'Không yêu cầu',
  },
  {
    logo: l3,
    header: 'Số lượng tuyển',
    content: '2 người',
  },
  {
    logo: l4,
    header: 'Thời gian tối thiểu',
    content: '3-5 tiếng/ngày',
  },
  {
    logo: l5,
    header: 'Địa điểm',
    content: 'Hà Nội',
  },
]
const posters = ['Poster', 'Hà Nội', 'Graphic Designer', 'Banner']
export default function JobDetail() {
  const [alignment, setAlignment] = React.useState()
  const [cards, setCards] = useState(cardsData)
  const [job, setJob] = React.useState()
  const [price, setPrice] = React.useState()
  const [search, setSearch] = useState('')
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
    filterAlign(cardsData, newAlignment)
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Tìm việc làm
    </Link>,
    <Typography key="3" color="text.primary">
      Chi tiết việc làm
    </Typography>,
  ]

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
        if (alignment) return c.category === alignment
        return true
      })
    setCards(newData)
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
        if (alignment) return c.category === alignment
        return true
      })
    setCards(newData)
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
        if (alignment) return c.category === alignment
        return true
      })
    setCards(newData)
  }
  const filterAlign = (cards, align) => {
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
        if (align) return c.category === align
        return true
      })
    setCards(newData)
  }
  const renderTitle = () => {
    if (!search && !alignment && !price && !job)
      return (
        <Stack alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: '600' }}>
            Việc làm freelancer - Làm online, nhận tiền nhanh chóng
          </Typography>
          <Typography variant="h6" sx={{ color: '#637381', fontWeight: '500' }}>
            Hơn 51931 dự án đã đăng và thuê được freelancer thành công.
          </Typography>
        </Stack>
      )
    return (
      <Stack alignItems="start" sx={{ width: '100%' }}>
        <Typography variant="h5" sx={{ fontWeight: '600' }}>
          {`${
            alignment
              ? 'Thiết kế nhận diện thương hiệu 15 dự án'
              : 'Kết quả tìm kiếm'
          }`}
        </Typography>
        <Typography variant="h6" sx={{ color: '#637381', fontWeight: '500' }}>
          {`${cards.length} dự án`}
        </Typography>
      </Stack>
    )
  }
  useEffect(() => {
    // console.log(price, job, cards)
    // const newData = newDataCards.filter((c) => {
    //   if (price || job || search)
    //     return (
    //       c.salary > price?.[0] &&
    //       c.salary < price?.[1] &&
    //       c.jobKey === job &&
    //       c.name.includes(search)
    //     )
    //   return true
    // })
    // setCards(newData)
  }, [price, job, search])
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
          onChange={(e) => {
            if (e.target.value) {
              setSearch(e.target.value)
              filterSearch(cardsData, e.target.value)
              // filterJob(cardsData, job)
              // filterSalary(cardsData, price)
            } else {
              setCards(cardsData)
            }
          }}
        />

        <FormControl sx={{ width: '30%' }}>
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
                setCards(cardsData)
              }
            }}
          >
            <Typography sx={{ padding: '16px 16px' }}>
              Danh mục công việc <span>{` (${jobs.length})`}</span>
            </Typography>
            {jobs.map((job, i) => (
              <MenuItem className={styles.menu_item} key={i} value={job.value}>
                {job.label}
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
      <Stack className={styles.main} alignItems="center" spacing="50px">
        <Breadcrumbs
          sx={{ width: '100%' }}
          separator="."
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Box sx={{ width: '100%' }}>
          <Stack
            className={styles.container}
            alignItems="start"
            justifyContent="space-between"
            direction="row"
          >
            <Stack direction="row" spacing="40px">
              <Avatar
                alt="logo"
                src={img}
                sx={{ width: '138px', height: '138px' }}
              ></Avatar>
              <Stack justifyContent="center" spacing="10px">
                <Typography variant="h5">
                  Thiết kế sản phẩm truyền thông cho chiến dịch chào đón Tết
                  2023
                </Typography>
                <Typography variant="h6" className={styles.normal_text}>
                  Công ty TNHH Graphic Design
                </Typography>
                <Stack direction="row" spacing="10px" alignItems="center">
                  <CalendarTodayIcon />
                  <Typography variant="body2" sx={{ fontWeight: '400' }}>
                    Hạn ứng tuyển: 30/12/2022
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="20px">
              <CustomButton
                startIcon={<BoltIcon />}
                size="large"
                className={styles.btn_padding}
                sx={{
                  width: { xs: '100%', lg: 'initial' },
                  backgroundColor: PRIMARY_COLOR,
                  whiteSpace: 'nowrap',
                }}
              >
                Đã ứng tuyển
              </CustomButton>
              <Button
                variant="outlined"
                className={`${styles.buttons} ${styles.btn_padding}`}
                startIcon={<FavoriteBorderIcon />}
                size="large"
                sx={{
                  width: { xs: '100%', lg: 'initial' },
                  // backgroundColor: PRIMARY_COLOR,
                  whiteSpace: 'nowrap',
                }}
              >
                Lưu tin
              </Button>
            </Stack>
          </Stack>
          <Grid
            container
            justifyContent="space-between"
            // spacing={3}
            sx={{
              borderTop: '1px dashed #dfe3e8',
              width: '100%',
              background: 'white',
              padding: '27px 40px',
            }}
          >
            <Grid container item lg={7} rowGap={3}>
              <Stack
                sx={{
                  padding: '27px 29px',
                  background: 'rgba(145, 158, 171, 0.08);',
                  borderRadius: '8px',
                }}
                spacing="30px"
              >
                <Typography variant="h6" fontWeight={500}>
                  Chi tiết tin tuyển dụng
                </Typography>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  rowGap="30px"
                  columnGap="15px"
                >
                  {recruits.map((r) => (
                    <Stack direction="row" sx={{ width: '25%' }} spacing="8px">
                      <img src={r.logo} width="27px" alt="" height="27px" />
                      <Stack spacing="5px">
                        <Typography className={styles.gray_text}>
                          {r.header}
                        </Typography>
                        <Typography sx={{ fontWeight: '600' }}>
                          {r.content}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="h4">Mô tả công việc </Typography>
                <ul>
                  <li>
                    Chịu trách nhiệm thiết kế, quản lý và phát triển về mặt mỹ
                    thuật các sản phẩm thiết kế của công ty.
                  </li>
                  <li>
                    Thiết kế các ấn phẩm quảng cáo trên kênh digital marketing
                    (website, facebook, Instagram, youtube…) như poster hình
                    ảnh, gif, banner flash, pop up, email template, giao diện
                    website/ ứng dụng…
                  </li>
                  <li>
                    Thiết kế các ấn phẩm in (tờ rơi, brochure, poster, bandroll,
                    v.v..)
                  </li>
                  <li>
                    Thiết kế các vật phẩm sử dụng trong ngày lễ, sự kiện
                    (backdrop, giấy mời, standee, bảng biển, v.v…).
                  </li>
                  <li>
                    Giám sát và quản lý chất lượng in ấn của các biểu mẫu, tư
                    liệu quảng cáo, đảm bảo thực hiện đúng với mẫu thiết kế đã
                    được phê duyệt.
                  </li>
                  <li>
                    Thiết kế, quản lý hệ thống nhận dạng thương hiệu của công
                    ty.
                  </li>
                </ul>
              </Stack>

              <Stack>
                <Typography variant="h4">Yêu cầu ứng viên</Typography>
                <ul>
                  <li>Tuổi từ 22 - 30.</li>
                  <li>Khả năng tổ chức và quản lý thời gian tốt.</li>
                  <li>
                    Có sự yêu thích và hiểu biết tốt về ngành mỹ phẩm, thời
                    trang.
                  </li>
                  <li>
                    Có khả năng làm việc độc lập & tinh thần làm việc theo nhóm
                  </li>
                  <li>
                    Thành thạo các phần mềm thiết kế như Photoshop, Illustrator,
                    InDesign, Flash, Adobe Premier, Deamweaver.
                  </li>
                  <li>
                    Phát triển khả năng sáng tạo và tư duy sáng tạo phù hợp với
                    định hướng thương hiệu.
                  </li>
                </ul>
              </Stack>

              <Stack>
                <Typography variant="h4">Quyền lợi</Typography>
                <ul>
                  <li>
                    Được hưởng các chính sách phúc lợi theo quy định của công
                    ty.
                  </li>
                  <li>Được đào tạo, nâng cao nghiệp vụ thường xuyên.</li>
                </ul>
              </Stack>
              <Stack sx={{ width: '100%' }} spacing="12px">
                <Typography variant="h4">Cách thức ứng tuyển</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay tại
                  đây
                </Typography>
              </Stack>

              <CustomButton
                sx={{
                  width: { xs: '100%', lg: 'initial' },
                  backgroundColor: PRIMARY_COLOR,
                  // whiteSpace: 'nowrap',
                  padding: '11px 52px',
                }}
              >
                Ứng tuyển ngay
              </CustomButton>
            </Grid>
            <Grid item lg={4.8}>
              <Stack spacing="30px">
                <Stack spacing="20px" className={styles.box1}>
                  <Typography variant="body1" sx={{ fontWeight: '600' }}>
                    Chia sẻ tin tuyển dụng
                  </Typography>
                  <Typography className={styles.gray_text}>
                    Sao chép đường dẫn
                  </Typography>
                  <CopyToClipboardButton />
                  <Typography className={styles.gray_text}>
                    Chia sẻ qua mạng xã hội
                  </Typography>
                  <Stack direction="row" spacing={'20px'}>
                    <img src={Facebook} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Linkedln} alt="" />
                  </Stack>
                </Stack>
                <Stack spacing="20px" className={styles.box1}>
                  <Typography variant="body1" sx={{ fontWeight: '600' }}>
                    Báo cáo tin tuyển dụng
                  </Typography>
                  <Typography className={styles.gray_text}>
                    Nếu bạn thấy tin tuyển dụng này không đúng hoặc có các dấu
                    hiệu lừa đảo, xúc phạm,.. Hãy phản ánh với chúng tôi!
                  </Typography>
                  <CustomButton
                    className={styles.orange_btn}
                    sx={{
                      width: { xs: '100%', lg: 'initial' },
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Ứng tuyển ngay
                  </CustomButton>
                </Stack>
                <Stack spacing="15px">
                  <Typography variant="h6" fontWeight="500">
                    Tags
                  </Typography>
                  <Stack direction="row" spacing="8px">
                    {posters.map((p) => (
                      <Chip label={p} className={styles.chip}></Chip>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {renderTitle()}
        <Grid container rowSpacing={'40px'} justify="space-between" spacing={3}>
          {cards.map((e) => (
            <Grid item lg={5.85} xs={12}>
              <NewestCard {...e} />
            </Grid>
          ))}
        </Grid>
        <Pagination count={10} size="large" />
      </Stack>
      <Footer />
    </>
  )
}
