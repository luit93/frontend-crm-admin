import React from "react";
import Header from "./Header";
import SuperUser from "../sidebar/SuperUser";
import "./layout.scss";
const MainLayout = ({ children }) => {
  const sideBar = {
    superAdmin: <SuperUser />,
  };
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <aside className="sidebar"> {sideBar.superAdmin}</aside>
        <div className="content "> {children}</div>
      </div>
      <div className="footer">copy right CRM 2022</div>
    </div>
  );
};

export default MainLayout;
