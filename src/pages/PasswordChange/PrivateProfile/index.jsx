import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import styles from "./../PrivateProfile/index.module.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomUploadFile from "components/CustomUploadFile";
import CustomButton from "components/CustomButton";
import { PRIMARY_COLOR } from "utilities/constant";
import { Visibility } from "@mui/icons-material";

import CustomizedSnackbars from "components/Toast";

const requiredMessage = "Nội dung chưa được nhập";
const minLength = "Mật khẩu phải nhiều hơn 8 kí tự ";
const schema = yup
  .object({
    password: yup.string().required(requiredMessage).min(8, minLength),
    new_password: yup.string().required(requiredMessage).min(8, minLength),
    new_password_confirmation: yup
      .string()
      .required(requiredMessage)
      .min(8, minLength),
  })
  .required();
export default function PrivateProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    setValue: setValueForm,
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("here");
    setOpenAlert(true);
  };
  return (
    <Stack alignItems="center" className={styles.form_container} spacing="30px">
      <form
        className={styles.form}
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          padding: "30px 15px",
          rowGap: "30px",
        }}
      >
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          render={({ field }) => (
            <FormControl
              sx={{ m: 1, width: "100%" }}
              variant="outlined"
              required
              error={!!errors.password}
            >
              <InputLabel htmlFor="outlined-adornment-password1">
                Nhập mật khẩu cũ
              </InputLabel>
              <OutlinedInput
                // ref={ref}
                {...field}
                id="outlined-adornment-password1"
                type={showPassword ? "text" : "password"}
                label="Nhập mật khẩu cũ"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {field.value ? <Visibility /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText error={!!errors?.password}>
                {errors?.password?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="new_password"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password2" required>
                Nhập mật khẩu mới
              </InputLabel>
              <OutlinedInput
                // ref={ref}
                name={name}
                InputLabelProps={{ required: false }}
                id="outlined-adornment-password2"
                type={newPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setNewPassword(!newPassword);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {value ? <Visibility /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Nhập mật khẩu mới "
              />
              <FormHelperText error={!!errors?.new_password}>
                {errors?.new_password?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="new_password_confirmation"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password2" required>
                Nhập lại Mật Khẩu
              </InputLabel>
              <OutlinedInput
                // ref={ref}
                name={name}
                InputLabelProps={{ required: false }}
                id="outlined-adornment-password2"
                type={newPasswordConfirm ? "text" : "password"}
                value={value}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setNewPasswordConfirm(!newPasswordConfirm);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {value ? <Visibility /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Nhập lại mật khẩu"
              />
              <FormHelperText error={!!errors?.new_password_confirmation}>
                {errors?.new_password_confirmation?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
      </form>
      <Stack direction="row" sx={{ width: "100%" }} justifyContent="flex-end">
        <CustomButton
          form="form"
          type="submit"
          disabled={!isValid}
          className={styles.button}
          sx={{
            width: { xs: "100%", lg: "20%" },
            backgroundColor: PRIMARY_COLOR,
            whiteSpace: "nowrap",
            padding: "11px 123px",
          }}
        >
          Lưu thay đổi
        </CustomButton>
      </Stack>
      <CustomizedSnackbars
        open={openAlert}
        message="Đổi mật khẩu thành công "
        setOpen={setOpenAlert}
      />
    </Stack>
  );
}
