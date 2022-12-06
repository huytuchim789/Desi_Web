import React, { useState } from 'react'
import styles from './../HiredDetail/CandidateDetail.module.css'
import Footer from 'components/Footer'
import Header from 'components/Header'
import bgEmail from 'images/Outstanding/bg-input.svg'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import CustomCard from '../../components/CustomCard'
import ImagePreview from 'components/ImagePreview'
import img from 'images/HiredDetail/ava.svg'
import { useLocation, useSearchParams } from 'react-router-dom'
import ProjectCard from 'components/ProjectCard'
import { Bolt, CalendarToday, FavoriteBorder } from '@mui/icons-material'
import CustomButton from 'components/CustomButton'
import { cardsData, PRIMARY_COLOR } from 'utilities/constant'
import Facebook from 'images/Social Media.svg'
import Youtube from 'images/Social Media (2).svg'
import Linkedln from 'images/Social Media (3).svg'
import { useJobs } from './store'
import { useEffect } from 'react'
import NewestCard from 'components/NewestCard'
import CustomModal from 'components/CandidateModal'

function HiredDetail() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('project_id')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const [choice, setChoice] = React.useState(0)
  const { jobs, setJobs } = useJobs((state) => state)
  const location = useLocation()
  useEffect(() => {
    console.log(location)

    if (location.state?.open) {
      setOpen(true)
    }
  }, [])
  const [choices, setChoices] = React.useState([
    {
      num: -1,
      key: 'all',
      label: 'Tất cả',
      color: '#DFE3E8',
    },
    {
      num: -1,
      key: 'hired',
      label: 'Đã nhận',
      color: '#00AB55',
    },
  ])
  const handleChoice = (event, newValue) => {
    setChoice(newValue)
  }
  useEffect(() => {
    const newChoices = choices.map((c) => {
      if (c.key === 'all') return { ...c, num: jobs.length }

      return {
        ...c,
        num: cardsData.filter((d) => d.status === c.key).length,
      }
    })
    setChoices(newChoices)
  }, [])
  const handleSelectChoice = () => {
    switch (choice) {
      case 0:
        setJobs(cardsData)
        break
      case 1:
        setJobs(cardsData.filter((d) => d.status === 'hired'))
        break
      default:
        break
    }
  }
  useEffect(() => {
    handleSelectChoice()
  }, [choice])
  return (
    <>
      <CustomModal open={open} setOpen={setOpen} />

      <Header />
      <Box sx={{ backgroundColor: '#f4f6f8' }}>
        <img src={bgEmail} alt="bgEmail" className={styles.bgEmail} />
      </Box>
      <Stack className={styles.container} rowGap={4}>
        <Stack justifyContent="center" direction="row" maxHeight={'230px'}>
          <Grid container columnGap={8}>
            <Grid item lg={3}>
              <Box
                sx={{
                  width: '280px',
                  height: '280px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '20px',
                  position: 'relative',
                  bottom: '30%',
                }}
              >
                <Stack
                  sx={{
                    background: '#FFFFFF',
                    border: '3px solid #637381',
                    borderRadius: '12px',
                    width: '100%',
                    height: '100%',
                    padding: '20px',
                  }}
                >
                  <img style={{ borderRadius: '12px' }} src={img} alt="" />
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={8}>
              <Stack spacing="10px">
                <Typography variant="h4">
                  Công ty TNHH Graphic Design
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.normal_text}
                  maxWidth="800px"
                >
                  Công ty phần mềm TNHH Graphic Design được thành lập vào năm
                  2015 và kể từ đó đã phát triển thành một nhà cung cấp dịch vụ
                  phát triển phần mềm tùy chỉnh quốc tế với đội ngũ khoảng 30
                  chuyên gia CNTT.
                </Typography>
                <Stack direction="row" spacing={'20px'}>
                  <img src={Facebook} alt="" />
                  <img src={Youtube} alt="" />
                  <img src={Linkedln} alt="" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack spacing="20px">
            <CustomButton
              size="large"
              className={styles.btn_padding}
              sx={{
                width: { xs: '100%', lg: 'initial' },
                backgroundColor: PRIMARY_COLOR,
                whiteSpace: 'nowrap',
              }}
              onClick={handleOpen}
            >
              Liên hệ
            </CustomButton>
          </Stack>
        </Stack>
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
                  <Typography className={styles.normal_text} fontWeight={600}>
                    {t.label}
                  </Typography>
                </Stack>
              }
            ></Tab>
          ))}
        </Tabs>
        <Grid container rowSpacing={'50px'} columnSpacing={'50px'}>
          {jobs.map((e) => (
            <Grid item lg={6} xs={12}>
              <NewestCard {...e} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Footer />
    </>
  )
}

export default HiredDetail
