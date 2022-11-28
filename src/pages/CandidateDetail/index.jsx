import React from 'react'
import styles from './../CandidateDetail/CandidateDetail.module.css'
import Footer from 'components/Footer'
import Header from 'components/Header'
import bgEmail from 'images/Outstanding/bg-input.svg'
import { Box, Divider, Grid, Typography } from '@mui/material'
import CustomCard from '../../components/CustomCard'
import ImagePreview from 'components/ImagePreview'
import img from 'images/candidates/nature.svg'
function CandidateDetail() {
  return (
    <>
      <Header />
      <Box>
        <img src={bgEmail} alt="bgEmail" className={styles.bgEmail} />
        <Grid container className={styles.candi}>
          <Grid item lg={5} sx={{ position: 'relative' }}>
            <CustomCard />
          </Grid>
          <Grid item lg={7}>
            <Typography variant="h5" className={styles.normal_text}>
              Hồ sơ dự án của ứng viên
            </Typography>
            <ImagePreview img={img} />
            <Divider />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default CandidateDetail
