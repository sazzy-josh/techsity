import React from "react";
import {useSelector} from "react-redux";
import {Outlet} from "react-router";
import {CommonSection, NavBar, OverView, SideBar, TopBar} from "../components";

const BaseLayout = () => {
  const showSideBar = useSelector((state) => state.general.showSideBar);

  return (
    <div className='w-screen h-screen'>
      {/* SIDE BAR GOES HERE */}
      <SideBar />

      {/* TOP BAR */}
      <TopBar />

      {/*NAVBAR FOR SMALL SCREENS */}
      {showSideBar ? <NavBar /> : null}

      {/*DISPLAYS COUNT OF ALL NOTES*/}
      <OverView />

      {/* CONTAINS THE URL_PARAMS AND ADDBUTTON */}
      <CommonSection />

      <Outlet />
    </div>
  );
};

export default BaseLayout;
