import React, {useEffect, useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from '../../../styles/home/videoCarousel/videoCarousel.module.scss'
import ReactPlayer from "react-player";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
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
    const is900 = useMediaQuery({query: '(max-width: 900px)'});

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300000,
        pauseOnHover: false
    };

    const [width, setWidth] = useState("60%");

    useEffect(() => {
        if (is900) {
            setWidth("90%")
        }
    }, [is900])
    const links = [
        {
            id:1,
            img: "six"
        },
        {
            id:2,
            img: "seven"
        },
        {
            id:3,
            img: "one"
        },
        {
            id:4,
            img: "two"
        },
        {
            id:5,
            img: "three"
        },
        {
            id:6,
            img: "four"
        },
        {
            id:7,
            img: "five"
        },
        {
            id: 8,
            url: "https://www.youtube.com/watch?v=TdwBFzfvRhM"
        },
        {
            id: 9,
            url: "https://www.youtube.com/watch?v=Xre0e976sEw"
        },
    ];
    return (
        <div>
            <div className={styles.title}>
                Galereya
            </div>
            <Slider {...settings} className={styles.car}
                    nextArrow={<Arrow type="next"/>}
                    prevArrow={<Arrow type="prev"/>}
            >
                {
                    links.map((i, k) => {
                        if (i.id === 1 || i.id === 2){
                            return (
                                <div className={styles.inThen}>
                                    <div className={styles.player}>
                                        <ReactPlayer
                                            url={i.url}
                                            width={width}
                                            height="500px"
                                        />
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className={styles.inThen}>
                                    <div className={styles.player1}
                                         style={{backgroundImage:`url('/home/gallery/${i.img}.JPG')`}}>

                                    </div>
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