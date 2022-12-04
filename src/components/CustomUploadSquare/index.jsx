import styled from 'styled-components'
import { FiCamera } from 'react-icons/fi'
import { useState } from 'react'
import ReactFileReader from 'react-file-reader'
import { Button } from '@material-ui/core'
import { Stack, Typography } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import styles from './../CustomUploadSquare/index.module.css'
import empty from 'images/Profile/empty.png'
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .circle {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`

export default function CustomUploadFileSquare({
  setValue,
  text,
  size,
  front,
}) {
  const [url, setUrl] = useState('')

  const handleFiles = (files) => {
    console.log(files)
    setUrl(files.base64)
    setValue('ava', files.base64, { shouldValidate: true })
  }

  return (
    <Stack justifyContent="center" sx={{ width: '48%' }} spacing="8px">
      <ReactFileReader
        fileTypes={['.png', '.jpg']}
        base64={true}
        handleFiles={handleFiles}
      >
        {url ? (
          <AvatarInput style={{ cursor: 'pointer' }} size={size}>
            <img src={url} alt="Avatar Placeholder" />
          </AvatarInput>
        ) : (
          <Stack
            sx={{
              width: '100%',
              height: '100%',
              background: '#F4F6F8',
              cursor: 'pointer',
              padding: '40px',
            }}
            alignItems="center"
            justifyContent="center"
            spacing="6px"
          >
            <img src={empty} alt="" />
            <Typography className={styles.gray_text} fontWeight={600}>
              Tải ảnh lên {`${front ? 'mặt trước' : 'mặt sau'}`}
            </Typography>
            <Typography className={styles.gray_text} fontWeight={400}>
              {text}
            </Typography>
          </Stack>
        )}
      </ReactFileReader>
    </Stack>
  )
}
