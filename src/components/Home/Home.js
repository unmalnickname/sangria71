import React from "react";
import Nav from "./nav.js";

import Tips from "./Tips";
import Staff from "./Staff.js";

import StorageProvider from "./storageContext";
import TipsContextProvider from "../Staff/tipsContext";

const Home = () => {
  return (
    <TipsContextProvider>
      <StorageProvider>
        <div>
          <Nav />
          <Tips />
          <Staff />
        </div>
      </StorageProvider>
    </TipsContextProvider>
  );
};

export default Home;
