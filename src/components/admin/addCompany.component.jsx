import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getCurrentUser } from '../service/user-service';
import React from 'react';
import * as Yup from 'yup';
import { RiEditBoxLine } from "react-icons/ri";
import { addCompany } from '../service/admin-service';



const AddCompany = (props) => (

  <Formik
  initialValues = {{
    admin_id: getCurrentUser().id,
    name_en: '',
    name_ar: '',
    contact_person_name_en: '',
    contact_person_name_ar: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
    is_active: '',
    country_id: '',
    phone_no: '',
    license_start_date: '',
    license_end_date: '',
    users_limit: '',
    branches_limit: ''

  }}
  validationSchema = {
    Yup.object({
          name_en: Yup.string().required("Required"),
          name_ar: Yup.string().required("Required"),
          contact_person_name_en: Yup.string().required("Required"),
          contact_person_name_ar: Yup.string().required("Required"),
          username: Yup.string().required("Required"),
          password1: Yup.string().required("Required"),
          password2: Yup.string().required("Required"),
          email: Yup.string().email("Invalid Email Format").required("Required"),
          phone_no: Yup.string().required("Required"),
          is_active: Yup.string().required("Required"),
          license_start_date: Yup.string().required("Required"),
          license_end_date: Yup.string().required("Required"),
          users_limit: Yup.string().required("Required"),
          branches_limit: Yup.string().required("Required")
        })
  }
  onSubmit = {async (values) => {
    try {
      await addCompany(values);
props.history.push('/dashboard')
    } catch (e) {
       console.log(e)
     }
  }}
  >
    <Form>
    <p className="fw-bold">
            <RiEditBoxLine /> Basic Info
          </p>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name_en">Company Name english</label>
              <Field
                className="form-control"
                name="name_en"
                type="text"
                id="name_en"
              />
              <ErrorMessage name="name_en" style={{ color: "red" }} />
            </div>
            <div className="col-md-6">
              <label htmlFor="name_ar">Company Name Arabbic</label>

              <Field
                className="form-control"
                name="name_ar"
                type="text"
                id="name_ar"
              />
              <ErrorMessage name="name_ar" />
            </div>

            <div className="col-md-6">
              <label htmlFor="contact_person_name_en">contact person name english</label>

              <Field
                className="form-control"
                name="contact_person_name_en"
                type="text"
                id="contact_person_name_en"
              />
              <ErrorMessage name="contact_person_name_en" />
            </div>

            <div className="col-md-6">
              <label htmlFor="contact_person_name_ar">contact person name arabic</label>

              <Field
                className="form-control"
                name="contact_person_name_ar"
                type="text"
                id="contact_person_name_ar"
              />
              <ErrorMessage name="contact_person_name_ar" />
            </div>
          </div>
          <p className="fw-bold py-3">
            <RiEditBoxLine /> Account Info
          </p>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="username">Username</label>

              <Field
                className="form-control"
                name="username"
                type="text"
                id="username"
              />
              <ErrorMessage name="username" />
            </div>
            <div className="col-md-6">
              <label htmlFor="password1">Password</label>
              <Field
                className="form-control"
                name="password1"
                type="password"
                id="password1"
              />
              <ErrorMessage name="password1" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email">email</label>
              <Field
                className="form-control"
                name="email"
                type="email"
                id="email"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="password2">Repeat Password</label>
              <Field
                className="form-control"
                name="password2"
                type="password"
                id="password2"
              />
              <ErrorMessage name="password2" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone_no">phone_no</label>
              <Field
                className="form-control"
                name="phone_no"
                type="tel"
                id="phone_no"
              />
              <ErrorMessage name="phone_no" />
            </div>
            <div className="col-md-6">
              <label htmlFor="is_active">Status</label>
              <Field
                className="form-control"
                name="is_active"
                as="select"
                id="is_active"
              >
                <option>Select Status</option>
                <option value="1" >Active</option>
                <option value="2">Inactive</option>
              </Field>
              <ErrorMessage name="is_active" />
            </div>
            <div className="col-md-6">
              <label htmlFor="country_id">Country</label>
              <Field
                className="form-control"
                name="country_id"
                as="select"
                id="country_id"
              >
                <option>Select Country</option>
                <option value="1" >Bangladesh</option>
                <option value="2">Jordan</option>
              </Field>
              <ErrorMessage name="country_id" />
            </div>
          </div>

          <p className="fw-bold my-3">
            <RiEditBoxLine /> License Control
          </p>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="license_start_date">License start date</label>

              <Field
                name="license_start_date"
                id="license_start_date"
                type="datetime-local"
                placeholder="License Start Date"
                className="form-control"
              />
              <ErrorMessage name="license_start_date" />
            </div>
            <div className="col-md-6">
              <label htmlFor="license_end_date">License end date</label>

              <Field
                name="license_end_date"
                type="datetime-local"
                id="license_end_date"
                className="form-control"
              />
              <ErrorMessage name="license_end_date" />
            </div>
            <div className="col-md-6">
              <label htmlFor="users_limit">Users Limit</label>

              <Field
                name="users_limit"
                type="number"
                id="users_limit"
                className="form-control"
              />
              <ErrorMessage name="users_limit" />
            </div>
            <div className="col-md-6">
              <label htmlFor="branches_limit">Branches Limit</label>

              <Field
                name="branches_limit"
                type="number"
                id="branches_limit"
                className="form-control"
              />
              <ErrorMessage name="branches_limit" />
            </div>
          </div>
          <div class="d-grid ">
            <button class="btn btn-dark fw-bold" type="submit">
              Save
            </button>
          </div>
    </Form>
  </Formik>
);

export default AddCompany;