import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Chip, Typography } from "@mui/material";
import { useAuth } from "components/PrivateRouter/authStore";
import { useNavigate } from "react-router-dom";
import styles from "./../AvaMenu/index.module.css";
export default function AvaMenu({ sx }) {
  let navigate = useNavigate();
  const { auth } = useAuth((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          ...sx,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableFocusRipple
          disableRipple
        >
          <Chip
            sx={{ cursor: "pointer", display: { lg: "inherit", xs: "none" } }}
            avatar={
              <Avatar
                alt="Natacha"
                src="https://freesvg.org/img/abstract-user-flat-3.png"
              />
            }
            label={auth?.email}
          />
          <Avatar
            alt="Natacha"
            src="https://freesvg.org/img/abstract-user-flat-3.png"
            sx={{ display: { lg: "none", xs: "block" } }}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Typography variant="body1" fontWeight={600}>
            {auth.email}
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem href="/profile">Hồ sơ cá nhân </MenuItem>
        <MenuItem href="/dashboard">Quản lý việc làm</MenuItem>
        <MenuItem href="/passChange">Đổi mật khẩu </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            localStorage.removeItem("auth");
            navigate(0);
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
