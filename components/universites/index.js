import React from 'react';
import Section1 from "./section-1/section-1";
import Footer from "../footer/footer"
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

function Index() {
    return (
        <>
            <Sidebar/>
            <Header/>
            <Section1/>
            <Footer/>
        </>
    );
}

export default Index;