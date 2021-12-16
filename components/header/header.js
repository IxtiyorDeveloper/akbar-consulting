import styles from "../../styles/header/header.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useEffect, useState} from "react";
import Link from 'next/link'
import {LinkHandler, toggle} from "../redux/reducers/reducer/universities";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import window from "global";
import {useMediaQuery} from "react-responsive";



function Header({toggle,sidebar}) {
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
    const stylesMain = {
        position:"fixed",
        left:"0",
        backgroundColor:"rgba(0,0,0,0.3)",
        zIndex:101,
        height:"100vh",
        display:`${sidebar ? "block" : "none"}`,
        top: `${offTop > 120 || isResponsive ? "0" : "40px"}`,
        width: `${offTop > 120 || isResponsive ? "100%" : "80%"}`,
        marginLeft: `${offTop > 120 || isResponsive ? "0%" : "10%"}`
    }

    const location = useRouter();
    const style1 = {
        padding:"20px"
    }
    return (
        <div>
            <div style={stylesMain} onClick={() =>toggle()}/>
            <div className={styles.container} style={style1}>
                <div className={styles.then} >
                    <Link href={'/'}>
                            <img src="/home/logosvg.svg" alt="" className={styles.img}/>
                    </Link>
                    <Link href={'/'}>
                        <img src="/home/logotitle.svg" alt="" className={styles.img1}/>
                    </Link>
                    {/*<div className={styles.title}>*/}
                    {/*    Akbar-consulting*/}
                    {/*</div>*/}
                </div>
                <div className={styles.link}>
                    <Link href={'/'}>
                        <div
                            className={`${styles.menuAnd} ${location.pathname === '/' ? styles.another : ""}`}
                        >
                            Asosiy sahifa
                        </div>
                    </Link>
                    <Link href={'/universities'}>
                        <div
                            className={`${styles.menuAnd} ${location.pathname === '/universities' ? styles.another : ""}`}
                        >
                            Universitetlar
                        </div>
                    </Link>
                    <Link href={'/filiallar'}
                    >
                        <div
                            className={`${styles.menuAnd} ${location.pathname === '/filiallar' ? styles.another : ""}`}
                        >
                            Filiallar
                        </div>
                    </Link>
                    <Link href={'/gallery'}
                    >
                        <div
                            className={`${styles.menuAnd} ${location.pathname === '/gallery' ? styles.another : ""}`}
                        >
                            Galereya
                        </div>
                    </Link>
                    <Link href={'/faq'}
                    >
                        <div
                            className={`${styles.menuAnd}  ${location.pathname === '/faq' ? styles.another : ""}`}
                        >
                            Savollar
                        </div>
                    </Link>
                    <a href="tel:+99893 093 27 27" className={styles.menuAnd}>
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