import Section1 from "./section-1/section-1";
import Section2 from "./section-2/section-2";
import Section3 from "./section-3/section-3";
import Section4 from "./section-4/section-4";
import Section5 from "./section-5/section-5";
import Footer from "../footer/footer";
import Services from "./services/services";
import React, {useState, useRef, useEffect} from "react";
import window from "global/window";
import {AiOutlineArrowUp} from "react-icons/ai";
import FAQ from "../faq/index";
import Sidebar from "../sidebar/sidebar";
import Certificates from "./certificates";


function Home() {
    return (
        <>
            <Sidebar/>
            <Section1/>
            <Section2/>
            <Section3
                text1={"Davlatlar"}
                num1={6}
                text2={"Universitetlar"}
                num2={50}
                text3={"Talabalar"}
                num3={800}
                button = {"Batafsil"}
                link={'/universities'}
            />
            <Certificates/>
            <Section4/>
            <hr/>
            <Services/>
            <FAQ num={8}/>
            <Section5/>
            <Footer/>
        </>
    );
}

export default Home;