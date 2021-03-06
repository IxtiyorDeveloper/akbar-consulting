import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../../styles/home/videoCarousel/videoCarousel.module.scss'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import ReactPlayer from "react-player";
import {useMediaQuery} from "react-responsive";
import {FaSearchPlus} from "react-icons/fa";
import {AiOutlinePicture, AiOutlineVideoCamera} from "react-icons/ai";
import Carousel, {consts} from "react-elastic-carousel";


function myArrow({type, onClick, isEdge}) {
    const pointer = type === consts.PREV ? <BsArrowLeft/> : <BsArrowRight/>
    return (
        <div className={`${type === consts.PREV ? "before" : "w1200A"}`}>
            <div onClick={onClick} disabled={isEdge}
                 className={type === consts.PREV ? "prevArrow22 arrow2" : "nextArrow22 arrow2"}>
                {pointer}
            </div>
        </div>
    )
}

function VideoCarousel({setImg, setIsV, setIsV1, setVid}) {
    const isResponsive = useMediaQuery({query: '(max-width: 900px)'});
    const is500 = useMediaQuery({query: '(max-width: 500px)'});


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
        },
        {
            id: 11,
            img: "https://www.youtube.com/watch?v=XnziiH0XIb8"
        },
        {
            id: 12,
            img: "https://www.youtube.com/watch?v=mHOE6OApSlE"
        },
        {
            id: 13,
            img: "https://www.youtube.com/watch?v=6mtzBSyo_IU"
        },
        {
            id: 14,
            img: "https://www.youtube.com/watch?v=NQXehQSFBp4"
        },
        {
            id: 15,
            img: "https://www.youtube.com/watch?v=JutAeRv6djA&t=4s"
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
                    if (a === "y3") {
                        setIsV1(true);
                        setVid("https://www.youtube.com/watch?v=XnziiH0XIb8")
                    } else {
                        if (a === "y4") {
                            setIsV1(true);
                            setVid("https://www.youtube.com/watch?v=mHOE6OApSlE")
                        } else {
                            if (a === "y5") {
                                setIsV1(true);
                                setVid("https://www.youtube.com/watch?v=6mtzBSyo_IU")
                            } else {
                                if (a === "y6") {
                                    setIsV1(true);
                                    setVid("https://www.youtube.com/watch?v=NQXehQSFBp4")
                                } else {
                                    if (a === "y7") {
                                        setIsV1(true);
                                        setVid("https://www.youtube.com/watch?v=JutAeRv6djA&t=4s")
                                    } else {
                                        setImg(a);
                                        setIsV(true)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const styles2 = {
        display: `${isResponsive ? "none" : "flex"} `
    }
    const styles1 = {
        display: `${isResponsive ? "block" : "none"} `
    }
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(data.length);
        }
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
                <div
                    className={styles.col}
                    onClick={() => handleZoom("y3")}
                >
                    <img src="/gallery/a1.webp" alt="" className={styles.imgIt}/>
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
                    onClick={() => handleZoom("y4")}
                >
                    <img src="/gallery/a2.webp" alt="" className={styles.imgIt}/>
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
                    onClick={() => handleZoom("y5")}
                >
                    <img src="/gallery/a3.webp" alt="" className={styles.imgIt}/>
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
                    onClick={() => handleZoom("y7")}
                >
                    <img src="/gallery/a5.webp" alt="" className={styles.imgIt}/>
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
                    onClick={() => handleZoom("y6")}
                >
                    <img src="/gallery/a4.webp" alt="" className={styles.imgIt}/>
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
                <Carousel
                    renderArrow={myArrow}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                    autoPlaySpeed={0}
                    className="car"
                >
                    {
                        data && data.map((i, k) => {
                                if (i.id === 9 || i.id === 8 || i.id === 10 || i.id === 11
                                    || i.id === 12 || i.id === 13 || i.id === 14 || i.id === 15
                                ) {
                                    return (
                                        <div key={k} style={{width: "100%"}}>
                                            <ReactPlayer
                                                url={`${i.img}`}
                                                height={is500 ? "250px" : "400px"}
                                                width={`${isResponsive ? "100%" : "100%"}`}
                                                className={styles.re}
                                            />
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                    {
                        data && data.map((i, k) => {
                                if (i.id === 1 || i.id === 2 || i.id === 3 || i.id === 4 || i.id === 5 || i.id === 6 ||
                                    i.id === 7
                                ) {
                                    return (
                                        <div key={k}>
                                            <img src={`/gallery/${i.img}.webp`} alt="" className={styles.img}/>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default VideoCarousel;