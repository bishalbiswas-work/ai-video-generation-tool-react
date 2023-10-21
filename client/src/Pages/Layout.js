// Layout.js
import React from "react";
import LiveChat from "../Components/LiveChat";

const Layout = ({ children }) => {
  return (
    <>
      {/* Add Header here if you have one */}
      {children} {/* This is where your routed component will render */}
      {/* Add Footer here if you have one */}
      <LiveChat />
    </>
  );
};

export default Layout;
