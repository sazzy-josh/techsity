import React from "react";
import {useSelector} from "react-redux";
import {Outlet} from "react-router";
import {SideBar, TopBar} from "../components";
import NavBar from "../components/NavBar";
import {useToggle} from "../hooks";

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
    </div>
  );
};

export default BaseLayout;
