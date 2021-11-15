import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "./service/user-service";
import { Link } from 'react-router-dom';

const LogIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
    } catch (e) {}
  };
  return (
    <Formik
      initialValues = {initialValues}
      validationSchema = {validationSchema}
      onSubmit = {onSubmit}
    >
      <Form>
        <div className="login-body">
        <div className="login-form">
        <Link to="/" style={{'textDecoration': 'none'}}>
            <div
              className="text-center"
              style={{ color: "gray", fontSize: "24px" }}
            >
              <span style={{ color: "red" }}>F</span>ounder
              <span style={{ color: "red" }}>S</span>uite
            </div>
          </Link>
          <div className="my-4">
            <label htmlFor="username" className="text-white pb-2">
              User Name
            </label>
            <Field
              className="form-control"
              name="username"
              type="text"
              id="username"
              style={{'background': 'transparent', 'color': 'white'}}
            />
            <ErrorMessage name="username" className="text-danger" />
          </div>
          <div className="my-4">
            <label htmlFor="password" className="text-white pb-2">
              Password
            </label>
            <Field
              className="form-control"
              name="password"
              type="password"
              id="password"
              style={{'background': 'transparent', 'color': 'white'}}
            />
            <ErrorMessage name="password" />
          </div>
          <div class="d-grid ">
            <button class="btn btn-danger fw-bold mt-2" type="submit">
              Log In
            </button>
          </div>
        </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LogIn;
