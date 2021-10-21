import React, { useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import Input from "../common/input.component";
import { toast } from "react-toastify";
import { startCase } from "lodash";

const AddCompany = () => {
  const [data, setData] = useState({
    name_en: "",
    name_ar: "",
    contact_person_name_en: "",
    contact_person_name_ar: "",
    username: "",
    password: "",
    email: "",
    phone_no: "",
    status: "",
    license_start_date: "",
    license_end_date: "",
    users_limit: "",
    branches_limit: "",
  });

  const [errors, setErrors] = useState({
    name_en: "",
    name_ar: "",
    contact_person_name_en: "",
    contact_person_name_ar: "",
    username: "",
    password: "",
    email: "",
    phone_no: "",
    status: "",
    license_start_date: "",
    license_end_date: "",
    users_limit: "",
    branches_limit: "",
  });
  console.log(data, errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    //     this.doSubmit();
  };

  const changeHandler = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;
    const error = validateInput(name, value);
    const errors = {...errors};

    errors[name] = error;

    const data = { ...data };
    data[name] = value;
    setData(() => ({
      data,
    }));
    setErrors(() => ({
      errors,
    }));
  };

  const validateInput = (name, value) => {
    if (name) {
      if (value.trim() === "") {
        let errorMessage = startCase(`${name} cannot be empty. `);
        toast.error(errorMessage);
        return errorMessage;
      }
    }
    return "";
  };
  return (
    <div className="container pt-2">
      {/* Basic Info       */}
      <form onSubmit={handleSubmit}>
        <p className="fw-bold">
          <RiEditBoxLine /> Basic Info
        </p>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="name_en"
              type="text"
              label="English Company Name"
              value={data.name_en}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="name_ar"
              type="text"
              label="Arabic Company Name"
              value={data.name_ar}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="contact_person_name_en"
              type="text"
              label="English Contact Person Name"
              value={data.contact_person_name_en}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="contact_person_name_ar"
              type="text"
              label="Arabic Contact Person Name"
              value={data.contact_person_name_ar}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
        </div>
        {/* //Account Info */}
        <p className="fw-bold py-3">
          <RiEditBoxLine /> Account Info
        </p>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="username"
              type="text"
              label="User Name"
              value={data.username}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="password"
              type="text"
              label="Password"
              value={data.password}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="email"
              type="email"
              label="Email"
              value={data.email}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input name="repeat_password" type="text" label="Repeat Password" />
          </div>
          <div className="col-md-6">
            <Input
              name="phone_no"
              type="tel"
              label="Phone number"
              value={data.phone_no}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="status"
              type="text"
              label="Status"
              value={data.status}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
        </div>
        {/* License control */}
        <p className="fw-bold my-3">
          <RiEditBoxLine /> License Control
        </p>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="license_start_date"
              type="datetime-local"
              label="License Start Date"
              value={data.license_start_date}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="license_end_date"
              type="datetime-local"
              label="License End Date"
              value={data.license_end_date}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="users_limit"
              type="number"
              label="Max limit of employees"
              value={data.users_limit}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="branches_limit"
              type="number"
              label="Max limit of branches"
              value={data.branches_limit}
              onChange={(e) => changeHandler(e)}
              errors={errors}
            />
          </div>
        </div>
        <div class="d-grid ">
          <button class="btn btn-dark fw-bold" type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;
