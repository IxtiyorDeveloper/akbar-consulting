import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from '../../../styles/home/videoCarousel/videoCarousel.module.scss'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import ReactPlayer from "react-player";
import {useMediaQuery} from "react-responsive";
import {FaSearchPlus} from "react-icons/fa";
import {AiOutlinePicture, AiOutlineVideoCamera} from "react-icons/ai";


function Arrow(props) {
    let className = props.type === "next" ? "nextArrow22" : "prevArrow22";
    className += " arrow2";
    const char = props.type === "next" ? <BsChevronRight/> : <BsChevronLeft/>;
    return (
        <div className={`${props.type === "next" ? "w1200A" : "before"}`}>
            <div className={className} onClick={props.onClick}>
                {char}
            </div>
        </div>
    );
}

function VideoCarousel({setImg, setIsV, setIsV1, setVid}) {
    const isResponsive = useMediaQuery({query: '(max-width: 900px)'});
    const is500 = useMediaQuery({query: '(max-width: 900px)'});
    const data = [
        {
            id: 1,
            img: "six"
        },
        {
            id: 2,
            img: "seven"
        },
        {
            id: 3,
            img: "one"
        },
        {
            id: 4,
            img: "two"
        },
        {
            id: 5,
            img: "three"
        },
        {
            id: 6,
            img: "four"
        },
        {
            id: 7,
            img: "five"
        },
        {
            id: 8,
            img: "https://www.youtube.com/watch?v=Xre0e976sEw&t=1s"
        },
        {
            id: 9,
            img: "https://www.youtube.com/watch?v=TdwBFzfvRhM"
        },
        {
            id: 10,
            img: "https://www.youtube.com/watch?v=rudBdJxb_TE"
        }
    ];
    const handleZoom = (a) => {
        if (a === "y0") {
            setIsV1(true);
            setVid("https://www.youtube.com/watch?v=Xre0e976sEw&t=1s")
        } else {
            if (a === "y1") {
                setIsV1(true);
                setVid("https://www.youtube.com/watch?v=TdwBFzfvRhM")
            } else {
                if (a === "y2") {
                    setIsV1(true);
                    setVid("https://www.youtube.com/watch?v=rudBdJxb_TE")
                } else {
                    setImg(a);
                    setIsV(true)
                }
            }
        }
    }
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300000,
        pauseOnHover: false
    }
    const styles2 = {
        display: `${isResponsive ? "none" : "flex"} `
    }
    const styles1 = {
        display: `${isResponsive ? "block" : "none"} `
    }
    return (
        <div id="sertifikatlar" className={styles.container}>
            <div className={styles.title}>
                Galereya
            </div>
            <div className={styles.wr} style={styles2}>
                <div
                    className={styles.col}
                >
                    <img src="/gallery/one.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ} onClick={() => handleZoom("/gallery/one.webp")}
                        >
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("/gallery/two.webp")}
                >
                    <img src="/gallery/two.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}
                             onClick={() => handleZoom("two")}
                        >
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.col}`}
                    onClick={() => handleZoom("/gallery/three.webp")}
                >
                    <img src="/gallery/three.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.col}`}
                    onClick={() => handleZoom("/gallery/four.webp")}
                >
                    <img src="/gallery/four.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.col}`}
                    onClick={() => handleZoom("/gallery/five.webp")}
                >
                    <img src="/gallery/five.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("/gallery/six.webp")}
                >
                    <img src="/gallery/six.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("/gallery/seven.webp")}
                >
                    <img src="/gallery/seven.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlinePicture className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("y0")}
                >
                    <img src="/gallery/eight.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlineVideoCamera className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("y1")}
                >
                    <img src="/gallery/nine.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlineVideoCamera className={styles.icImg}/>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.col}
                    onClick={() => handleZoom("y2")}
                >
                    <img src="/gallery/ten.webp" alt="" className={styles.imgIt}/>
                    <div className={styles.hoverIt}>
                        <div className={styles.circ}>
                            <FaSearchPlus className={styles.icon}/>
                        </div>
                        <div className={styles.imgWr}>
                            <AiOutlineVideoCamera className={styles.icImg}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles1}>
                <Slider
                    nextArrow={<Arrow type="next"/>}
                    prevArrow={<Arrow type="prev"/>}
                    {...settings}
                >
                    {
                        data.map((i, k) => {
                            if (i.id === 9 || i.id === 8 || i.id === 10) {
                                return (
                                    <div key={k}>
                                        <ReactPlayer
                                            url={`${i.img}`}
                                            height={is500 ? "250px" : "400px"}
                                            width={`${isResponsive ? "90%" : "60%"}`}
                                            className={styles.re}
                                            style={{marginLeft: `${isResponsive ? "5%" : "20%"}`}}
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={k}>
                                        <div
                                            style={{backgroundImage: `url('/gallery/${i.img}.webp')`}}
                                            className={styles.img}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default VideoCarousel;