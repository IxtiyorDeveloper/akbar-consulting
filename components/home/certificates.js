import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from '../../styles/home/certificates/certificates.module.scss'


function Certificates(props) {
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
        dots: true,
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
                Sertifikatlar
            </div>
            <Slider {...settings}>
                {
                  data.map((i,k) => {
                      return(
                          <div key={k}>
                              <div style={{backgroundImage:`url(/ser/JPG/${i.img}.jpg)`}}
                              className={styles.img}
                              />
                          </div>
                      )
                  })
                }
            </Slider>
        </div>
    );
}

export default Certificates;