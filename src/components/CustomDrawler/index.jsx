import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import styles from "./../CustomDrawler/drawler.module.css";
import { Link, useLocation } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        setTimeout(() => {
          if (props.to === "/dashboard") window.location.reload();
        }, 100);
      }}
      {...props}
    />
  );
}
const tabs = [
  { icon: <PersonIcon />, label: "Hồ sơ cá nhân", href: "/profile" },
  {
    icon: <BusinessCenterIcon />,
    label: "Quản lý việc làm",
    href: "/dashboard",
  },
  { icon: <KeyIcon />, label: "Đổi mật khẩu", href: "/passChange" },
];
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  React.useEffect(() => {
    switch (location.pathname) {
      case "/profile":
        setValue(0);
        break;
      case "/dashboard":
        setValue(1);
        break;
      case "/passChange":
        setValue(2);
        break;
      default:
        break;
    }
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={styles.drawler}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        orientation="vertical"
      >
        {tabs.map((t) => (
          <LinkTab
            to={t.href}
            icon={t.icon}
            iconPosition="start"
            label={t.label}
          />
        ))}
      </Tabs>
    </Box>
  );
}
