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
import {Link} from 'react-scroll'


function Section1({click, toggle,sidebar}) {
    const isResponsive = useMediaQuery({query: '(max-width: 1550px)'});
    const [link, setLink] = useState('asosiy')

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
            title: "Chet el nufuzli oliygohlarida o'qish",
            text: "bizda oson va kafolatlangan",
            ariza: "Ariza",
            img: "slide0"
        },
        {
            id: 2,
            title: "Imtihonsiz talaba bo'lish imkoniyati",
            text: "buni qo'ldan boy bermang",
            ariza: "Ariza",
            img: "slide2"
        },
        {
            id: 3,
            title: "Masofadan turib hujjat topshiring",
            text: "qolganini bizga qo'yib bering",
            ariza: "Ariza",
            img: "slide3"
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
        if (click !== undefined){
            document.getElementById(click).click();
            if (click.toString().includes("1")){
                toggle();
            }
        }
    }, [click])
    const stylesMain = {
        position:"fixed",
        top:"0",
        left:"0",
        backgroundColor:"rgba(0,0,0,0.7)",
        zIndex:101,
        width:"100%",
        height:"100vh",
        display:`${sidebar ? "block" : "none"}`
    }
    return (
        <div>
            <div style={stylesMain} onClick={() => toggle()}/>
            <div className={styles.container}>
                <div className={styles.header} style={stylesHeader}>
                    <div className={styles.then}>
                        <img src="/home/logosvg.svg" alt="" className={styles.img}/>
                        <img src="/home/logotitle.svg" alt="" className={styles.img1}/>
                        {/*<div className={styles.title}>*/}
                        {/*    Akbar-consulting*/}
                        {/*</div>*/}
                    </div>
                    <div className={styles.link}>
                        <Link activeClass="active"
                              to="asosiy"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'asosiy' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('asosiy')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Asosiy
                        </Link>
                        <Link activeClass="active"
                              to="davlatlar"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'davlatlar' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('davlatlar')}
                              ignoreCancelEvents={false}
                              id="davlatlarLink"
                        >
                            Davlatlar
                        </Link>
                        <Link activeClass="active"
                              to="sertifikatlar"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'sertifikatlar' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('sertifikatlar')}
                              ignoreCancelEvents={false}
                              id="sertifikatlarLink"
                        >
                            Sertifikatlar
                        </Link>
                        <Link activeClass="active"
                              to="talabalar"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'talabalar' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('talabalar')}
                              ignoreCancelEvents={false}
                              id="talabalarLink"
                        >
                            Talabalar
                        </Link>
                        <Link activeClass="active"
                              to="servislar"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'servislar' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('servislar')}
                              ignoreCancelEvents={false}
                              id="servislarLink"
                        >
                            Servislar
                        </Link>
                        <Link activeClass="active"
                              to="savollar"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'savollar' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('savollar')}
                              ignoreCancelEvents={false}
                              id="savollarLink"
                        >
                            Savollar
                        </Link>
                        <Link
                            activeClass="aloqa"
                              to="aloqa"
                              spy={true}
                              smooth={true}
                              className={`${styles.menu} ${link === 'aloqa' ? styles.another : ""}`}
                              offset={-50}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('aloqa')}
                              ignoreCancelEvents={false}
                              id="aloqaLink"
                        >
                            Aloqa
                        </Link>
                        <a href="tel:+998942557777" className={styles.menu}>
                            +998 94 255 77 77
                        </a>
                    </div>
                    <div className={styles.sidebarToggle} onClick={() => toggle()}>
                        <GiHamburgerMenu className={styles.sidebarIcon}/>
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        data.map((i, k) => {
                            return (
                                <div key={k} id="asosiy">
                                    <div className={styles.sliderWrapper}
                                         style={{backgroundImage: `url('/home/${i.img}.jpg')`}}
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