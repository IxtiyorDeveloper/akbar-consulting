import React, {useState} from 'react';
import VideoCarousel from "../components/home/video_carousel/videoCarousel";
import styles from "../styles/home/popUp.module.scss";
import {IoCloseSharp} from "react-icons/io5";
import ReactPlayer from "react-player";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Certificates from "../components/home/certificates";

function Gallery(props) {
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
        <div>
            <Header/>
            <div style={bg} onClick={() => handleClose()}/>
            <div
                className={styles.pop}
                style={{display: `${isV ? "block" : "none"}`}}
            >
                <div
                    className={styles.abs}
                    onClick={() => setIsV(false)}
                >
                    <IoCloseSharp/>
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
                    <IoCloseSharp/>
                </div>
            </div>
            <div className="m50">
                <VideoCarousel
                    setImg={setImg}
                    setIsV={setIsV}
                    setIsV1={setIsV1}
                    setVid={setVid}
                />
                <Certificates setImg={setImg} setIsV={setIsV}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Gallery;