import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomDrawer from "components/CustomDrawler";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect } from "react";
import styles from "./../Dashboard/dashboard.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CustomTable from "components/CustomTable";
import { useDashboardStore } from "./store";
import { ACCEPTED, dashboardData, REJECTED, WAITING } from "utilities/constant";
import { useNavigate } from "react-router-dom";
const tabs = ["Việc làm đã ứng tuyển", "Việc làm yêu thích "];
export default function Dashboard() {
  let navigate = useNavigate();
  const { datas, setDatas } = useDashboardStore((state) => state);
  const [value, setValue] = React.useState(0);
  const [choice, setChoice] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [choices, setChoices] = React.useState([
    {
      num: -1,
      key: "wait",
      label: "Chờ phản hồi",
      color: "#FFC107",
    },
    {
      num: -1,
      key: "accept",
      label: "Đã nhận",
      color: "#00AB55",
    },
    {
      num: -1,
      key: "reject",
      label: "Bị từ chối ",
      color: "#FF4842",
    },
    {
      num: -1,
      key: "all",
      label: "Tất cả",
      color: "#DFE3E8",
    },
  ]);
 
  useEffect(() => {
    const newChoices = choices.map((c) => {
      if (c.key === "all") return { ...c, num: datas.length };

      return {
        ...c,
        num: dashboardData.filter((d) => d.status === c.key).length,
      };
    });
    setChoices(newChoices);
  }, []);
  const handleSelectChoice = () => {
    switch (choice) {
      case 0:
        setDatas(
          dashboardData
            .filter((d) => d.status === "wait")
            .filter((a) => {
              if (!search) return true;
              return a.title.includes(search);
            })
        );
        break;
      case 1:
        setDatas(
          dashboardData
            .filter((d) => d.status === "accept")
            .filter((a) => {
              if (!search) return true;
              return a.title.includes(search);
            })
        );
        break;
      case 2:
        setDatas(
          dashboardData
            .filter((d) => d.status === "reject")
            .filter((a) => {
              if (!search) return true;
              return a.title.includes(search);
            })
        );
        break;
      case 3:
        setDatas(
          dashboardData.filter((a) => {
            if (!search) return true;
            return a.title.includes(search);
          })
        );
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    handleSelectChoice();
  }, [choice, search]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChoice = (event, newValue) => {
    setChoice(newValue);
  };
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={2.2}>
          <CustomDrawer />
        </Grid>
        <Grid item lg={9.8}>
          <Stack className={styles.dashboard} spacing="50px">
            <Stack spacing="10px">
              {" "}
              <Typography variant="h5">Quản lý việc làm </Typography>
              <Typography className={styles.normal_text} fontWeight={400}>
                Bạn có thể quản lý các công việc yêu thích hoặc công việc đã ứng
                tuyển tại đây
              </Typography>
            </Stack>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabs.map((t) => (
                <Tab label={t}></Tab>
              ))}
            </Tabs>
            <Stack spacing="30px" className={styles.dashboard_container}>
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
                            width: "21px",
                            height: "21px",
                            borderRadius: "6px",
                            backgroundColor: t.color,
                          }}
                        >
                          {t.num}
                        </Stack>
                        <Typography
                          className={styles.normal_text}
                          fontWeight={600}
                        >
                          {t.label}
                        </Typography>
                      </Stack>
                    }
                  ></Tab>
                ))}
              </Tabs>
              <Box sx={{ padding: "0 20px" }}>
                <TextField
                  hiddenLabel
                  id="outlined-start-adornment"
                  fullWidth
                  placeholder="Tìm kiếm việc làm cụ thể..."
                  onChange={(e) => {
                    if (!e.target.value) {
                      setChoice(choice);
                    }
                    setSearch(e.target.value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <CustomTable datas={datas} />
            </Stack>
            <Stack
              spacing="20px"
              sx={{ width: "100%", padding: "20px 40px 0" }}
              alignItems="start"
            >
              <Typography className={styles.notice_title}>
                Chú thích:{<br />}Bạn cần kiểm tra email đã đăng ký với Desi để
                nhận được các thông báo mới nhất về công việc bạn đã ứng tuyển
                và các thông tin quan trọng!
              </Typography>
              <Stack spacing="4px">
                <Typography className={styles.notice_content}>
                  Trạng thái{" "}
                  {<span style={{ color: WAITING }}>{`“Chờ phản hồi” `}</span>}:
                  Sau khi bạn gửi hồ sơ ứng tuyển, nhà tuyển dụng có thời hạn
                  72h để xem xét và phản hồi lại yêu cầu ứng tuyển của bạn.
                </Typography>
                <Typography className={styles.notice_content}>
                  Trạng thái{" "}
                  {<span style={{ color: ACCEPTED }}>{`“Đã nhận”  `}</span>}:
                  Nhà tuyển dụng đã xem xét và chấp nhận hồ sơ của bạn phù hợp
                  với công việc mà họ đang tìm kiếm nhân sự.
                </Typography>
                <Typography className={styles.notice_content}>
                  Trạng thái{" "}
                  {<span style={{ color: REJECTED }}>{`“Bị từ chối” `}</span>}:
                  Nhà tuyển dụng đã xem xét hồ sơ của bạn và cảm thấy bạn không
                  phù hợp với công việc, khi đó nhà tuyển dụng sẽ lựa chọn từ
                  chối hồ sơ của bạn.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
