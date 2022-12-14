import React, { useState } from 'react'
import styles from './../CandidateDetail/CandidateDetail.module.css'
import Footer from 'components/Footer'
import Header from 'components/Header'
import bgEmail from 'images/Outstanding/bg-input.svg'
import {
  Box,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import CustomCard from '../../components/CustomCard'
import ImagePreview from 'components/ImagePreview'
import img from 'images/candidates/nature.svg'
import Outstanding from './Outstanding'
import { useLocation, useSearchParams } from 'react-router-dom'
import ProjectCard from 'components/ProjectCard'
import CustomModal from 'components/CandidateModal'
const images = [
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
  {
    img: img,
    name: 'Thiên Nhiên',
    subname: 'Thu Trang Nguyen',
    love: '12',
    view: '10',
  },
]
function CandidateDetail() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('project_id')

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f4f6f8' }}>
        <img src={bgEmail} alt="bgEmail" className={styles.bgEmail} />
        <Grid container className={styles.candi}>
          <Grid item lg={4} sx={{ position: 'relative' }}>
            <CustomCard />
          </Grid>
          <Grid container item lg={8}>
            <Box>
              <Typography
                variant="h5"
                className={styles.normal_text}
                sx={{ width: '100%' }}
                align="start"
              >
                Hồ sơ dự án của ứng viên
              </Typography>
            </Box>
            <Divider sx={{ width: '100%', height: '1px' }} />
            {id ? (
              <ProjectCard />
            ) : (
              <>
                <Stack
                  direction="row"
                  columnGap="30px"
                  rowGap="30px"
                  flexWrap="wrap"
                  sx={{ padding: '40px' }}
                >
                  {images.map((i) => (
                    <ImagePreview {...i} />
                  ))}
                </Stack>
                <Pagination count={10} size="large" />
              </>
            )}
          </Grid>
        </Grid>
        <Divider />
        <Box>
          <Outstanding />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default CandidateDetail
