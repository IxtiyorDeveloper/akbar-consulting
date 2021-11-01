import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from '../../styles/home/certificates/certificates.module.scss'
import {FaSearchPlus} from "react-icons/fa";
import {useMediaQuery} from "react-responsive";


function Certificates({setIsV,setImg}) {
    const isResponsive = useMediaQuery({query: '(max-width: 900px)'});

    const data = [
        {
            img: "p1"
        },
        {
            img: "p2"
        },
        {
            img: "p3"
        },
        {
            img: "p4"
        },
        {
            img: "p5"
        },
        {
            img: "p6"
        },
        {
            img: "p7"
        },
        {
            img: "p8"
        },
        {
            img: "p9"
        },
        {
            img: "p10"
        },
    ];
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots:true
                }
            }
        ]
    }

    const handleZoom = (a) => {
        if (!isResponsive){
            setImg(a);
            setIsV(true)
        }
    }
    return (
        <div id="sertifikatlar" className={styles.container}>
            <div className={styles.title}>
                Sertifikatlar
            </div>
            <Slider {...settings}>
                {
                    data.map((i, k) => {
                        return (
                            <div key={k}>
                                <div style={{backgroundImage: `url(/ser/JPG/${i.img}.jpg)`}}
                                     className={styles.img}
                                     onClick={() => handleZoom(`/ser/JPG/${i.img}.jpg`)}
                                >
                                <div className={styles.hover}>
                                    <div className={styles.circ}
                                         onClick={() =>  handleZoom("two")}
                                    >
                                        <FaSearchPlus className={styles.icon}/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default Certificates;