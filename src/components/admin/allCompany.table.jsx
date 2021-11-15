import React from "react";
import Table from "../common/table/table.component";
import { TiEdit } from "react-icons/ti";
import { BiShow } from "react-icons/bi";

const AllCompanyTable = ({ companies, oneCompanyInfo }) => {
  const columns = [
    {
      path: "name_en",
      label: "Company Name",
      content: (company) => company.name_en,
    },
    { path: "email", label: "Email", content: (company) => company.user.email },
    {
      path: "phone_no",
      label: "Phone Number",
      content: (company) => company.phone_no,
    },
    {
      path: "status",
      label: "Status",
      content: (company) =>
        company.user.online_status === "offline" ? (
          <span class="badge bg-info text-dark">Offline</span>
        ) : (
          <span class="badge bg-success">Online</span>
        ),
    },
    {
      path: "",
      label: "Action",
      content: (company) => (
        <>
          <BiShow
            style={{
              fontSize: "18px",
              marginRight: "10px",
              color: "green",
              cursor: "pointer",
            }}
            title="Show"
            onClick={() => oneCompanyInfo(company.user_id, company.user.username)}
          />
          <TiEdit style={{ fontSize: "18px" }}  />
        </>
      ),
    },
  ];

  return (
    <>
      <Table items={companies} columns={columns} />
    </>
  );
};

export default AllCompanyTable;
