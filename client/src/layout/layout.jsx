import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routers from "../routers/routers";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
