import React, { useState } from "react";
import { allCompanies } from "../service/company-service";

const AllCompany = () => {
  const [data, SetData] = useState({
    companies: allCompanies(),
    activePage: 1,
    pageCount: 5
  });
  console.log(allCompanies)
  
  return <></>;
};

export default AllCompany;
