import React from 'react'
import Modal from '@mui/material/Modal'
import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography,
  Alert,
  TextField,
  Divider,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { PRIMARY_COLOR } from 'utilities/constant'
import CloseIcon from '@mui/icons-material/Close'
import styles from './../CandidateModal/Modal.module.css'
import CustomButton from 'components/CustomButton'
import upload from 'images/JobDetail/ic_upload.svg'
import { useJobDetailStore } from '../../pages/JobDetail/store'
import CustomEditor from 'components/Editor'
import CustomizedSnackbars from 'components/Toast'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  pt: '40px',
}
const schema = yup
  .object({
    title: yup.string().required('Bạn cần nhập thông tin này'),
    content: yup.string().required('Bạn cần nhập thông tin này'),
  })
  .required()
export default function CustomModal({ open, setOpen }) {
  const [openAlert, setOpenAlert] = React.useState(false)

  const handleClose = () => setOpen(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  console.log(errors)
  const onSubmit = (data) => {
    console.log(data)
    setOpenAlert(true)
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: '0 40px 40px' }}
          alignItems="center"
        >
          <Typography variant="h4">Liên hệ với ứng viên qua email</Typography>
          <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
        </Stack>
        <Divider sx={{ width: '100%' }} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Stack sx={{ padding: '0 40px' }} spacing="20px">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  error={!!errors.title}
                  id="outlined-error"
                  label="Tiêu đề"
                  placeholder="Nhập tiêu đề"
                  helperText={errors?.title?.message}
                />
              )}
            />
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <CustomEditor
                  {...field}
                  placeholder={'Nhập nội dung email *'}
                />
              )}
            />
          </Stack>
          <Divider sx={{ width: '100%', marginTop: '20px' }} />

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ padding: '28px 40px' }}
            spacing="15px"
          >
            <CustomButton
              sx={{
                width: { xs: '100%', lg: '20%' },
                whiteSpace: 'nowrap',

                color: '#212b36',
              }}
              className={styles.buttons}
              onClick={() => {
                setOpen(false)
              }}
            >
              Hủy bỏ
            </CustomButton>
            <CustomButton
              type="submit"
              sx={{
                width: { xs: '100%', lg: '20%' },
                whiteSpace: 'nowrap',
                backgroundColor: PRIMARY_COLOR,
                padding: '11px 65px',
              }}
              disabled={!isValid}
              onClick={handleSubmit(onSubmit)}
            >
              Gửi Email
            </CustomButton>
            <CustomizedSnackbars
              open={openAlert}
              message="Gửi email thành công"
              setOpen={setOpenAlert}
            />
          </Stack>
        </form>
      </Box>
    </Modal>
  )
}
