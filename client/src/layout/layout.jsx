import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routers from "../routers/routers";
import Admin from "../components/Admin";

const Layout = () => {
  return (

    <Fragment>
      {/* <Navbar /> */}
      <div>
        {/* <Routers /> */}
        <Admin />
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
