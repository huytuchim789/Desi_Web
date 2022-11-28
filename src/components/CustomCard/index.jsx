import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./../CustomCard/CustomCard.module.css";
import ava from "images/Outstanding/ttn.svg";
import location from "images/candidates/ic_location.svg";
import CustomButton from "../CustomButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PRIMARY_COLOR } from "../../utilities/constant";
import l1 from "images/JobDetail/ic_cost.svg";
import l2 from "images/JobDetail/ic_verified.svg";
import l3 from "images/JobDetail/ic_user_group.svg";
import l4 from "images/JobDetail/ic_job.svg";
import l5 from "images/JobDetail/ic_location.svg";
export default function CustomCard() {
  return (
    <Stack alignItems="center" className={styles.card}>
      <Avatar src={ava} sx={{ width: "136px", height: "136px" }} />
      <Stack alignItems="center" spacing="25px">
        <Typography fontWeight={500} variant="h4">
          Thu Trang Nguyen
        </Typography>
        <Typography className={styles.gray_text}>Graphic Designer</Typography>
        <Stack direction="row">
          <img src={location} alt="" />
          <Typography className={styles.gray_text}>Hà Nội, Việt Nam</Typography>
        </Stack>
        <Stack direction="row" spacing="10px" sx={{ width: "100%" }}>
          <Button
            variant="outlined"
            className={`${styles.buttons} ${styles.btn_padding}`}
            startIcon={<FavoriteBorderIcon />}
            size="large"
            sx={{
              width: { xs: "100%", lg: "50%" },
              // backgroundColor: PRIMARY_COLOR,
              whiteSpace: "nowrap",
            }}
          >
            Yêu thích
          </Button>
          <CustomButton
            size="large"
            className={styles.btn_padding}
            sx={{
              width: { xs: "100%", lg: "50%" },
              backgroundColor: PRIMARY_COLOR,
              whiteSpace: "nowrap",
            }}
          >
            Liên hệ ứng viên
          </CustomButton>
        </Stack>
        <Stack spacing="16px">
          <Typography className={styles.title}>Giới thiệu</Typography>{" "}
          <Typography className={styles.gray_text}>
            Mình là Trang, mình làm các công việc freelance về thiết kế đồ họa,
            vẽ minh họa, phác thảo 3D, dựng 3D,...và các công việc liên quan đến
            việc lên ý tưởng, sáng tạo, xây dựng concept ,...Ngoài ra mình còn
            nhận các job viết content, lên kịch bản, ý tưởng,...Cảm ơn nhà tuyển
            dụng đã đọc!
          </Typography>
          <Divider sx={{ marginTop: "40px" }} />
        </Stack>
        <Stack spacing="16px">
          <Typography className={styles.title}>Làm việc</Typography>
          <Stack direction="row">
            <img alt="" />
            <Box compo></Box>
          </Stack>
          <Divider sx={{ marginTop: "40px" }} />
        </Stack>
      </Stack>
    </Stack>
  );
}
