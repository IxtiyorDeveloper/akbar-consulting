import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from '../../../styles/home/certificates/certificates.module.scss'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import ReactPlayer from "react-player";
import {useMediaQuery} from "react-responsive";

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow2" : "prevArrow2";
    className += " arrow2";
    const char = props.type === "next" ? <BsChevronRight/> : <BsChevronLeft/>;
    return (
        <span className={className} onClick={props.onClick}>
      {char}
    </span>
    );
}

function VideoCarousel(props) {
    const isResponsive = useMediaQuery({query: '(max-width: 600px)'});
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
        }
    ];
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false
    }

    return (
        <div id="sertifikatlar" className={styles.container}>
            <div className={styles.title}>
                Galereya
            </div>
            <Slider
                nextArrow={<Arrow type="next"/>}
                prevArrow={<Arrow type="prev"/>}
                {...settings}
            >
                {
                    data.map((i, k) => {
                        if (i.id === 9 || i.id === 8) {
                            return (
                                <div key={k}>
                                    <ReactPlayer
                                        url={`${i.img}`}
                                        height='500px'
                                        width={`${isResponsive ? "90%":"60%"}`}
                                        className={styles.re}
                                        style={{marginLeft:`${isResponsive ? "5%":"20%"}`}}
                                    />
                                </div>
                            )
                        } else {
                            return (
                                <div key={k}>
                                    <div
                                        style={{backgroundImage: `url('/gallery/${i.img}.JPG')`}}
                                        className={styles.img}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </Slider>
        </div>
    );
}

export default VideoCarousel;