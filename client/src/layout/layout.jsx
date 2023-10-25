import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routers from "../routers/routers";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ManagePacakes from "../components/ManagePackages";
import ManageOrders from "../components/Order";
import AddPackages from "../components/AddPackages";
import ManageInactivePackages from "../components/ManageInactivePackages";
const Layout = () => {
  if (!localStorage.getItem('accessToken')) {
    return (

      <Fragment>
        <Navbar />
        <div>
          <Routers />
        </div>
        <Footer />
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<ManagePacakes />} />  
          <Route path="/admin/managepackages" element={<ManagePacakes />} /> 
          <Route path="/admin/manageOrders" element={<ManageOrders />} />
          <Route path="/admin/addpackages" element={<AddPackages />} />
          <Route path="/admin/manageinactivepackages" element={<ManageInactivePackages />} />
        </Routes>
      </Fragment>
    );
  }
};

export default Layout;
