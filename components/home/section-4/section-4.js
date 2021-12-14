import styles from "../../../styles/home/section-4/section-4.module.scss";
import Slider from "react-slick";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import ReactPlayer from "react-player";
import React, {useState} from "react";
import {AiOutlineCloseSquare} from "react-icons/ai"
import data from "./data/data"


function Arrow(props) {
    let className = props.type === "next" ? "nextArrow1" : "prevArrow1";
    className += " arrow1";
    const char = props.type === "next" ? <BsChevronRight/> : <BsChevronLeft/>;
    return (
        <span className={className} onClick={props.onClick}>
      {char}
    </span>
    );
}


function Section4(props) {
    const [bool, setBool] = useState(false)
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=eacD7gUbyKs')
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false
    };
    const style1 = {
        display: `${bool ? "none" : "flex"}`,
        flexDirection:"column"
    }
    const style2 = {
        display: `${bool ? "block" : "none"}`,
        zIndex:500
    }
    const handle = (a) => {
        document.body.style.overflow = "hidden";
        setBool(true)
        if (a === "m1"){
         setUrl('https://www.youtube.com/watch?v=eacD7gUbyKs')
        }
        if (a === "m2"){
         setUrl('https://www.youtube.com/watch?v=qFqxI79BDbk')
        }
        if (a === "m3"){
         setUrl('https://www.youtube.com/watch?v=Wvj2mKqaPhQ')
        }
    }
    const handleDelete = () => {
        document.body.style.overflow = "auto";
        setBool(false)
    }
    return (
        <div className={styles.container} id="talabalar">
            <div style={style1}>
                <div className={styles.cTitle}>
                    Bizning Talabalar
                </div>
                <Slider {...settings} className={styles.wr}
                        nextArrow={<Arrow type="next"/>}
                        prevArrow={<Arrow type="prev"/>}
                >
                    {
                        data.map((i, k) => {
                            return (
                                <div key={k} className={styles.slideContainer}>
                                    <div style={{backgroundImage: `url('/home/students/${i.img}.webp')`}}
                                         className={styles.img}>
                                    </div>
                                    <div className={styles.contentWr}>
                                        <div className={styles.name}>
                                            {i.name}
                                        </div>
                                        <p className={styles.text}>
                                            {i.text}
                                        </p>
                                        <div className={styles.videoWr} onClick={() => handle(i.img)}>
                                            <div className={styles.video}>Videoni tomosha qiling</div>
                                            <img src="/home/youtube.png" alt="" className={styles.youtube}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className={styles.modal} style={style2}>
                <div className={styles.in} onClick={() => handleDelete()}>
                    <AiOutlineCloseSquare className={styles.icon}/>
                </div>
            </div>
            <ReactPlayer
                style={style2}
                url={url}
                width='100%'
                height='92vh'
                className="player"
                playing={bool}
            />
        </div>
    );
}

export default Section4;