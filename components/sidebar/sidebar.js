import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {connect} from "react-redux";
import styles from "../../styles/sidebar/sidebar.module.scss"
import {LinkHandler, toggle} from "../redux/reducers/reducer/universities";
import router from "next/router";
import {FaHome, FaUniversity} from "react-icons/fa"
import {BiGitBranch} from "react-icons/bi"
import {BsQuestionCircleFill} from "react-icons/bs"
import {RiGalleryLine} from "react-icons/ri";

function Sidebar({sidebar,toggle,LinkHandler}) {
    const [display, setDisplay] = useState('none')
    useEffect(() => {
            if (sidebar === true){
                setDisplay('0')
            }
            if (sidebar === false){
                setDisplay('-200px')
            }
    });
    const linkHandler = p => {
        router.push('/');
        toggle()
        LinkHandler(p)
    }
    const stylesMain = {
        left:display
    };
    const hide = () => {
      toggle();
    }
    return (
        <div className={styles.container} style={stylesMain}>
            <div className={styles.title}>
                Akbar Consulting
            </div>
            <Link href={'/'}>
                <div
                    className={`${styles.menu} ${location.pathname === '/' ? styles.another : ""}`}
                    onClick={() => hide()}
                >
                  <FaHome className={styles.icon}/>  Asosiy sahifa
                </div>
            </Link>
            <Link href={'/universities'}>
                <div
                    onClick={() => hide()}
                    className={`${styles.menu} ${location.pathname === '/universities/' ? styles.another : ""}`}
                >
                <FaUniversity className={styles.icon}/>    Universitetlar
                </div>
            </Link>
            <Link href={'/filiallar'}
            >
                <div
                    onClick={() => hide()}
                    className={`${styles.menu} ${location.pathname === '/filiallar/' ? styles.another : ""}`}
                >
                 <BiGitBranch className={styles.icon}/>   Filiallar
                </div>
            </Link>
            <Link href={'/gallery'}
            >
                <div
                    onClick={() => hide()}
                    className={`${styles.menu} ${location.pathname === '/gallery/' ? styles.another : ""}`}
                >
                    <RiGalleryLine className={styles.icon}/>  Galereya
                </div>
            </Link>
            <Link href={'/faq'}
            >
                <div
                    onClick={() => hide()}
                    className={`${styles.menu}  ${location.pathname === '/faq/' ? styles.another : ""}`}
                >
                <BsQuestionCircleFill className={styles.icon}/>    Savollar
                </div>
            </Link>
            <a href="tel:+998914350077" className={styles.menu}>
                +998 91 435 00 77
            </a>
        </div>
    );
}

const mapStateToProps = (state) => ({
    sidebar:state.sidebar.sidebar
});

export default connect(
    mapStateToProps,
    {toggle,LinkHandler}
)(Sidebar);