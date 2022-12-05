import { Box, Chip, Typography, Stack, Avatar } from "@mui/material";
import React, { useState } from "react";
import { ACCEPTED, PRIMARY_COLOR } from "../../utilities/constant";
import CustomButton from "../CustomButton";
import styles from "./../NewestCard/NewestCard.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import formatThousands from "format-thousands";
import { useJobs } from "pages/HiredDetail/store";
export default function NewestCard({
  id,
  name,
  content,
  avatar,
  company,
  salary,
  tags,
  hour,
  date,
  status,
  love,
}) {
  const [hovering, setHovering] = useState(false);
  const { jobs, setJobs } = useJobs((state) => state);

  const hover = () => {
    setHovering(true);
  };
  const unHover = () => {
    setHovering(false);
  };
  const getChipStatus = () => {
    switch (status) {
      case "hired":
        return (
          <Chip
            label="Đã tuyển"
            sx={{
              color: "#212B36",
              backgroundColor: "#54D62C",
              maxWidth: { lg: "initial", xs: "100px" },
              borderRadius: "6px",
            }}
          />
        );

      default:
        return (
          <Chip
            label="Mới nhất"
            sx={{
              color: "#fff",
              backgroundColor: "#1890FF",
              maxWidth: { lg: "initial", xs: "100px" },
              borderRadius: "6px",
            }}
          />
        );
    }
  };
  return (
    <Stack
      onMouseOver={hover}
      onMouseOut={unHover}
      spacing="21px"
      className={styles.newest_card}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction={{ lg: "row", xs: "column" }} spacing="16px">
          <Typography
            sx={{
              typography: { lg: "h5", xs: "h6" },
              fontWeight: "700",
              lineHeight: { lg: "initial", xs: "1" },
            }}
          >
            {name}
          </Typography>
        </Stack>
        {love ? (
          <FavoriteIcon
            sx={{ color: PRIMARY_COLOR, cursor: "pointer" }}
            onClick={() => {
              const newJobs = jobs.map((j) => {
                if (j.id === id)
                  return {
                    ...j,
                    love: !j.love,
                  };
                else return j;
              });
              setJobs(newJobs);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{ cursor: "pointer" }}
            onClick={() => {
              const newJobs = jobs.map((j) => {
                if (j.id === id)
                  return {
                    ...j,
                    love: !j.love,
                  };
                else return j;
              });
              setJobs(newJobs);
            }}
          />
        )}
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        style={{ color: "#637381" }}
      >
        <Stack direction="row" alignItems="center" spacing="15px">
          {getChipStatus()}
          <Typography className={styles.normal_text}>
            Cập nhật {hour} giờ trước
          </Typography>
        </Stack>
        <Typography className={styles.normal_text}>
          Còn <span style={{ fontWeight: "700" }}>{date}</span> ngày trước
        </Typography>
      </Stack>
      <Typography className={styles.normal_text}>{content}</Typography>
      <Typography
        sx={{
          typography: { lg: "h5", xs: "body1" },
          fontWeight: "400",
          display: { lg: "initial", xs: "none" },
        }}
      >
        {`${formatThousands(salary, { separator: "." })} VNĐ`}
      </Typography>
      <Stack
        direction={{ lg: "row" }}
        alignItems={{ lg: "center", xs: "start" }}
        justifyContent={{ lg: "space-between", xs: "start" }}
      >
        <Stack direction="row" alignItems="center" spacing="20px">
          <Avatar src={avatar} />
          <Typography variant="body2">{company}</Typography>
        </Stack>
        <CustomButton
          className={`${styles.button} ${
            hovering ? styles.show : styles.unShow
          }`}
          sx={{ backgroundColor: PRIMARY_COLOR }}
        >
          Xem chi tiết
        </CustomButton>
        {/* <Typography
          sx={{
            typography: { lg: 'h5', xs: 'body1' },
            fontWeight: '400',
            display: { lg: 'initial', xs: 'none' },
          }}
        >
          {salary}
        </Typography> */}
      </Stack>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        justifyContent="space-between"
        spacing={{ xs: "20px" }}
      >
        {/* <Stack direction="row" spacing="12px">
          {tags.map((t) => (
            <Chip
              label={t}
              style={{
                background: 'rgba(0, 171, 85, 0.08)',
                borderRadius: '6px',
              }}
            />
          ))}
        </Stack> */}
      </Stack>
    </Stack>
  );
}
