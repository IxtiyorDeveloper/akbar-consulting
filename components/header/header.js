import styles from "../../styles/header/header.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useState} from "react";
import {Link} from 'react-scroll'
import {LinkHandler, toggle} from "../redux/reducers/reducer/universities";
import {connect} from "react-redux";
import sidebar from "../sidebar/sidebar";
import router from "next/router";



function Header({LinkHandler,toggle,sidebar}) {
    const LinkScrollHandler = p => {
        LinkHandler(p)
        router.push('/');
    }
    const stylesMain = {
        position:"fixed",
        top:"0",
        left:"0",
        backgroundColor:"rgba(0,0,0,0.3)",
        zIndex:101,
        width:"100%",
        height:"100vh",
        display:`${sidebar ? "block" : "none"}`
    }
    return (
        <div>
            <div style={stylesMain} onClick={() =>toggle()}/>
            <div className={styles.container}>
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
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('asosiyLink')}
                    >
                        Asosiy
                    </Link>
                    <Link activeClass="active"
                          to="davlatlar"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('davlatlarLink')}
                    >
                        Davlatlar
                    </Link>
                    <Link activeClass="active"
                          to="sertifikatlar"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('sertifikatlarLink')}
                    >
                       Sertifikatlar
                    </Link>
                    <Link activeClass="active"
                          to="talabalar"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('talabalarLink')}
                    >
                        Talabalar
                    </Link>
                    <Link activeClass="active"
                          to="servislar"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('servislarLink')}
                    >
                        Servislar
                    </Link>
                    <Link activeClass="active"
                          to="savollar"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('savollarLink')}
                    >
                        Savollar
                    </Link>
                    <Link activeClass="aloqa"
                          to="aloqa"
                          smooth={true}
                          className={`${styles.menu}`}
                          offset={0}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          onClick={() =>LinkScrollHandler('aloqaLink')}
                    >
                        Aloqa
                    </Link>
                    <a href="tel:+99893 093 27 27" className={styles.menu}>
                        +99893 093 27 27
                    </a>
                </div>
                <div className={styles.sidebarToggle} onClick={() => toggle()}>
                    <GiHamburgerMenu className={styles.sidebarIcon}/>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    country: state.sidebar.country,
    click:state.sidebar.click,
    sidebar:state.sidebar.sidebar,
});

export default connect(
    mapStateToProps,
    {LinkHandler,toggle}
)(Header);