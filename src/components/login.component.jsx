import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "./service/user-service";

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
        <div className="login-form">
          <h1 className="text-center">Log In </h1>
          <div className="my-4">
            <label htmlFor="username" className="text-white pb-2">
              User Name
            </label>
            <Field
              className="form-control"
              name="username"
              type="text"
              id="username"
            />
            <ErrorMessage name="username" />
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
            />
            <ErrorMessage name="password" />
          </div>
          <div class="d-grid ">
            <button class="btn btn-dark fw-bold mt-2" type="submit">
              Log In
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LogIn;
