import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../component/NavBar";
import FooterSection from '../component/FooterSection';

const MainLayout = () => {
    return (
        <>
        <NavBar />
        <Outlet/>
        {/* <FooterSection/> */}
        </>
    )
}
export default MainLayout;