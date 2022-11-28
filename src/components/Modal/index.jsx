import React from "react";
import Modal from "@mui/material/Modal";
import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography,
  Alert,
} from "@mui/material";

import { PRIMARY_COLOR } from "utilities/constant";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./../Modal/Modal.module.css";
import CustomButton from "components/CustomButton";
import upload from "images/JobDetail/ic_upload.svg";
import { useJobDetailStore } from "../../pages/JobDetail/store";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  pt: "40px",
};
export default function CustomModal({ open, setOpen }) {
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClose = () => setOpen(false);
  const { file, setFile, status, setStatus } = useJobDetailStore(
    (state) => state
  );

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
          sx={{ padding: "0 40px 40px" }}
        >
          <Typography variant="h4">
            Ứng tuyển
            <span style={{ color: PRIMARY_COLOR }}>
              {` Thiết kế sản phẩm truyền thông cho chiến dịch chào đón Tết 2023`}
            </span>
          </Typography>
        </Stack>
        <Stack className={styles.main} sx={{ padding: "40px" }} spacing="25px">
          {status === 0 ? (
            <>
              <Typography variant="body2" className={styles.normar_text}>
                Bạn chưa điền đầy đủ thông tin hồ sơ. Chọn
                <span
                  style={{ color: PRIMARY_COLOR }}
                >{` Bổ sung hồ sơ `}</span>
                để có thể ứng tuyển nhanh!
              </Typography>
              <Typography variant="body2" className={styles.normar_text}>
                Hoặc bạn có thể tải lên CV online tại đây
              </Typography>
              <CustomButton
                sx={{
                  width: { xs: "100%", lg: "20%" },
                  backgroundColor: PRIMARY_COLOR,
                  whiteSpace: "nowrap",
                  padding: "11px 80px",
                }}
                startIcon={
                  <img src={upload} alt="" style={{ filter: "#FFFFFF" }} />
                }
                variant="contained"
                component="label"
              >
                Tải lên CV từ máy tính
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0].name);
                  }}
                />
              </CustomButton>
              <Collapse in={openAlert || file}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlert(false);
                        setFile(null);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {file}
                </Alert>
              </Collapse>
            </>
          ) : (
            <>
              <Typography variant="body2" className={styles.normar_text}>
                Đã nộp đơn ứng tuyển trực tuyến
                <span style={{ color: PRIMARY_COLOR }}>{` thành công `}</span> !
                Vui lòng kiểm tra email để nhận liên hệ từ nhà tuyển dụng hoặc
                kiểm tra trạng thái tại mục “Quản lý việc làm”
              </Typography>
            </>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ padding: "40px" }}
          spacing="15px"
        >
          {status === 0 ? (
            <>
              <CustomButton
                sx={{
                  width: { xs: "100%", lg: "20%" },
                  whiteSpace: "nowrap",

                  color: "#212b36",
                }}
                className={styles.buttons}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Hủy bỏ
              </CustomButton>
              {!file ? (
                <CustomButton
                  sx={{
                    width: { xs: "100%", lg: "20%" },
                    whiteSpace: "nowrap",
                    color: "#212b36",
                  }}
                  className={styles.buttons}
                  disabled={!file}
                >
                  Ứng tuyển
                </CustomButton>
              ) : (
                <CustomButton
                  sx={{
                    width: { xs: "100%", lg: "20%" },
                    whiteSpace: "nowrap",
                    backgroundColor: PRIMARY_COLOR,
                    padding: "11px 65px",
                  }}
                  onClick={() => {
                    setStatus(1);
                  }}
                >
                  Ứng tuyển
                </CustomButton>
              )}
            </>
          ) : (
            <>
              <CustomButton
                sx={{
                  width: { xs: "100%", lg: "20%" },
                  whiteSpace: "nowrap",

                  color: "#212b36",
                }}
                className={styles.buttons}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Trở về
              </CustomButton>

              <CustomButton
                sx={{
                  width: { xs: "100%", lg: "20%" },
                  whiteSpace: "nowrap",
                  backgroundColor: PRIMARY_COLOR,
                  padding: "11px 65px",
                }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Quản lý việc làm
              </CustomButton>
            </>
          )}
        </Stack>
      </Box>
    </Modal>
  );
}
