import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { Button } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import styles from "./../CustomUploadFile/index.module.css";
export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: 50%;
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
`;

export default function CustomUploadFile() {
  const [url, setUrl] = useState("");

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };

  return (
    <Stack justifyContent="center">
      <ReactFileReader
        fileTypes={[".png", ".jpg"]}
        base64={true}
        handleFiles={handleFiles}
      >
        {url ? (
          <AvatarInput>
            <img src={url} alt="Avatar Placeholder" />
          </AvatarInput>
        ) : (
          <Stack
            sx={{
              width: "186px",
              height: "186px",
              borderRadius: "100%",
              background: "#F4F6F8",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <AddAPhotoIcon />
            <Typography className={styles.gray_text}>Tải ảnh lên</Typography>
          </Stack>
        )}
      </ReactFileReader>

      <Typography className={styles.gray_text}>
        Cho phép tải lên file dung lượng dưới 2 MB và tệp định dạng *.jpeg,
        *.jpg, *.png
      </Typography>
    </Stack>
  );
}
