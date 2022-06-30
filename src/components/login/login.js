import React from "react";
import "./login.css";
import { Paper, Grid, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 350,
    margin: "30px auto",
  };
  const size = {
    height: 75,
    weight: 125,
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  const inputProps = {
    maxLength: 20,
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <img src="/mc_logo.png" style={size} />
        <h4 style={{ color: "#1daedf" }}>LOGIN</h4>
      </Grid>
      <TextField
        style={{ marginBottom: "20px" }}
        fullWidth
        id="outlined-basic"
        label="Username"
        name="userName"
        variant="outlined"
        required
        value={formik.values.userName}
        onChange={formik.handleChange}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
        inputProps={inputProps}
        onPaste={(e: any) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e: any) => {
          e.preventDefault();
          return false;
        }}
      />

      <TextField
        fullWidth
        id="outlined-password-input"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        inputProps={{ maxLength: 20 }}
        onPaste={(e: any) => {
          e.preventDefault();
          return false;
        }}
        onCopy={(e: any) => {
          e.preventDefault();
          return false;
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultUnChecked />}
              label="Remember me"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} style={{ marginTop: "8px" }}>
          <Link href="#" style={{ color: "#1daedf" }}>
            Forgot password ?
          </Link>
        </Grid>
      </Grid>
      <Button
        type="submit"
        onClick={formik.handleSubmit}
        disabled={!formik.isValid}
        variant="contained"
        size="large"
        style={{
          width: "100%",
          paddingTop: "20",
          marginTop: "30px",
          background: "#1daedf",
        }}
      >
        {" "}
        LOGIN
      </Button>
      <p style={{ marginTop: "30px", fontSize: "14px", color: "#0000008a" }}>
        Copyright © 2022
        <Link
          href="http://www.mcinc-products.jp/en/"
          style={{ color: "#1daedf" }}
        >
          {" "}
          Mobile Create Co.Ltd.
        </Link>
      </p>
      <span style={{ fontSize: "14px", color: "#0000008a" }}>
        All rights reserved.
      </span>
    </Paper>
  );
};

export default Login;
