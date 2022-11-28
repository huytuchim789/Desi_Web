import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./../ImagePreview/image.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
const ImagePreview = ({ img, name, subname, love, view }) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <>
      <Stack
        className={`${styles.image}`}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        // justifyContent="flex-end"
      >
        <img
          src={img}
          alt=""
          className={`${styles.img} ${hover ? styles.darken : ""}`}
        />
        {hover ? (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: "3",
              bottom: "5%",
              padding: "0 20px",
            }}
          >
            <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
              {name}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography className={styles.normal_text}>{subname}</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing="8px"
              >
                <Stack direction="row" spacing="4px">
                  <FavoriteIcon sx={{ color: "white" }} fontSize={"small"} />
                  <Typography className={styles.normal_text}>{love}</Typography>
                </Stack>
                <Stack direction="row" spacing="4px">
                  <VisibilityIcon sx={{ color: "white" }} fontSize={"small"} />
                  <Typography className={styles.normal_text}>{view}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

export default ImagePreview;
