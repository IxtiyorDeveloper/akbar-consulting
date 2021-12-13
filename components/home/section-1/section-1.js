import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styles from "../../../styles/home/section-1/section-1.module.scss";
import {AiOutlineArrowRight} from "react-icons/ai"
import {connect} from "react-redux";
import {getAll, LinkHandler, toggle, UNChange} from "../../redux/reducers/reducer/universities";
import {useEffect, useState} from "react";
import window from "global";
import {useMediaQuery} from 'react-responsive';
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link"
import Header from "../../header/header";


function Section1({click, toggle, sidebar}) {
    const isResponsive = useMediaQuery({query: '(max-width: 1550px)'});

    function getPageYOffSet() {
        if (window !== undefined) {
            return window.pageYOffset;
        } else {
            return 0;
        }
    }

    const [offTop, setOffTop] = useState(getPageYOffSet());

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (window !== undefined) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function handleScroll() {
        setOffTop(getPageYOffSet);
    }

    const stylesHeader = {
        top: `${offTop > 120 || isResponsive ? "0" : "40px"}`,
        zIndex: "21",
        width: `${offTop > 120 || isResponsive ? "100%" : "80%"}`,
        marginLeft: `${offTop > 120 || isResponsive ? "0%" : "10%"}`
    }
    const data = [
        {
            id: 1,
            title: "Imtihonsiz talaba bo'lish imkoniyati",
            text: "buni qo'ldan boy bermang",
            ariza: "Ariza",
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639043486/slide2_vnp4zn.webp"
        },
        {
            id: 2,
            title: "Chet el nufuzli oliygohlarida o'qish",
            text: "bizda oson va kafolatlangan",
            ariza: "Ariza",
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639043499/slide3_gbwlt9.webp"
        },
        {
            id: 3,
            title: "Masofadan turib hujjat topshiring",
            text: "qolganini bizga qo'yib bering",
            ariza: "Ariza",
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639043475/slide0_eilxtj.webp"
        },
    ]
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
    };
    useEffect(() => {
        if (click !== undefined) {
            document.getElementById(click).click();
            if (click.toString().includes("1")) {
                toggle();
            }
        }
    }, [click])
    const stylesMain = {
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 101,
        width: "100%",
        height: "100vh",
        display: `${sidebar ? "block" : "none"}`
    }
    return (
        <div>
            <div style={stylesMain} onClick={() => toggle()}/>
            <div className={styles.container}>
                <div className={styles.header} style={stylesHeader}>
                     <Header/>
                </div>
                <Slider {...settings}>
                    {
                        data.map((i, k) => {
                            return (
                                <div key={k} id="asosiy">
                                    <div className={styles.sliderWrapper}
                                         style={{backgroundImage: `url('${i.img}')`}}
                                    >
                                        <div className={styles.contentWrapper}>
                                            <div className={styles.title}>
                                                {i.title}
                                            </div>
                                            <div className={styles.text}>
                                                {i.text}
                                            </div>
                                            <a href="/apply">
                                                <div className={styles.apply}>
                                                    <div className={styles.textApply}>
                                                        Ariza berish
                                                    </div>
                                                    <div className={styles.iconWr}>
                                                        <AiOutlineArrowRight className="fa-arrow-right2"/>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country,
    click: state.sidebar.click,
    sidebar: state.sidebar.sidebar,
});

export default connect(
    mapStateToProps,
    {UNChange, getAll, LinkHandler, toggle}
)(Section1);