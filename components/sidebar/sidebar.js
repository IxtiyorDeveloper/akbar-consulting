import React, {useEffect, useState} from 'react';
import {Link} from "react-scroll";
import {IoCallSharp, IoEarthSharp, IoHome, IoSettingsSharp} from "react-icons/io5";
import {FaQuestion, FaUserGraduate} from "react-icons/fa";
import {connect} from "react-redux";
import styles from "../../styles/sidebar/sidebar.module.scss"
import {LinkHandler, toggle} from "../redux/reducers/reducer/universities";
import router from "next/router";
import {AiOutlineFileProtect} from 'react-icons/ai'

function Sidebar({sidebar,toggle,LinkHandler}) {
    const [link, setLink] = useState('asosiy')
    const [display, setDisplay] = useState('none')
    useEffect(() => {
            if (sidebar === true){
                setDisplay('0')
                console.log(sidebar)
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
    }
    return (
        <div className={styles.container} style={stylesMain}>
            <div className={styles.title}>
                Akbar Consulting
            </div>
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
                  id="asosiyLink1"
                  onClick={() => {linkHandler('asosiyLink1')}}
            >
              <IoHome className={styles.icon}/>  Asosiy
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
                  id="davlatlarLink1"
                  onClick={() => linkHandler('davlatlarLink1')}
            >
             <IoEarthSharp className={styles.icon}/>   Davlatlar
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
                  id="sertifikatlarLink1"
                  onClick={() => linkHandler('sertifikatlarLink1')}
            >
                <AiOutlineFileProtect className={styles.icon}/> Sertifikatlar
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
                  id="talabalarLink1"
                  onClick={() => linkHandler('talabalarLink1')}
            >
           <FaUserGraduate className={styles.icon}/>     Talabalar
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
                  id="servislarLink1"
                  onClick={() => linkHandler('servislarLink1')}
            >
            <IoSettingsSharp className={styles.icon}/>    Servislar
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
                  id="savollarLink1"
                  onClick={() => linkHandler('savollarLink1')}
            >
            <FaQuestion className={styles.icon}/>    Savollar
            </Link>
            <Link activeClass="aloqa"
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
                  id="aloqaLink1"
                  onClick={() => linkHandler('aloqaLink1')}
            >
             <IoCallSharp className={styles.icon}/>   Aloqa
            </Link>
            <a href="tel:+99893 093 27 27" className={styles.menu}>
                +99893 093 27 27
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