import Section1 from "./section-1/section-1";
import Section2 from "./section-2/section-2";
import Section3 from "./section-3/section-3";
import Section4 from "./section-4/section-4";
import Section5 from "./section-5/section-5";
import Footer from "../footer/footer";
import Services from "./services/services";
import React, {useState, useRef, useEffect} from "react";
import window from "global/window";
import {AiOutlineArrowUp, AiOutlineClose} from "react-icons/ai";
import FAQ from "../faq/index";
import Sidebar from "../sidebar/sidebar";
import Certificates from "./certificates";
import VideoCarousel from "./video_carousel/videoCarousel";
import styles from '../../styles/home/popUp.module.scss'
import ReactPlayer from "react-player";


function Home() {
    const [isV, setIsV] = useState(false);
    const [isV1, setIsV1] = useState(false);
    const [img, setImg] = useState(false);
    const [vid, setVid] = useState(false);
    const bg = {
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: 99,
        position: "fixed",
        display: `${(isV || isV1) ? "block" : "none"}`
    }
    const handleClose = () => {
        setIsV(false);
        setIsV1(false);
    }
    return (
        <>
            <div style={bg} onClick={() => handleClose()}/>
            <div
                className={styles.pop}
                style={{display: `${isV ? "block" : "none"}`}}
            >
                <div
                    className={styles.abs}
                    onClick={() => setIsV(false)}
                >
                    <AiOutlineClose/>
                </div>
                <div
                    className={styles.popIn}
                    style={{backgroundImage: `url(${img})`, display: `${isV ? "block" : "none"}`}}
                >

                </div>
            </div>
            <div
                className={styles.vid}
                style={{display: `${isV1 ? "block" : "none"}`}}
            >
                <ReactPlayer
                    width="100%"
                    height="70vh"
                    url={vid}
                    playing={isV1}
                    style={{marginTop: "5vh"}}
                />
                <div className={styles.abs1} onClick={() => setIsV1(false)}>
                    <AiOutlineClose/>
                </div>
            </div>
            <Sidebar/>
            <Section1/>
            <Section2/>
            <Section3
                text1={"Davlatlar"}
                num1={20}
                text2={"Universitetlar"}
                num2={100}
                text3={"Talabalar"}
                num3={1000}
                button={"Batafsil"}
                link={'/universities'}
            />
            <Certificates setImg={setImg} setIsV={setIsV}/>
            <Section4/>
            <VideoCarousel
                setImg={setImg}
                setIsV={setIsV}
                setIsV1={setIsV1}
                setVid={setVid}
            />
            <hr/>
            <Services/>
            <FAQ num={8}/>
            <Section5/>
            <Footer/>
        </>
    );
}

export default Home;