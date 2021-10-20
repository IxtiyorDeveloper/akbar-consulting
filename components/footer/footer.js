import styles from "../../styles/footer/footer.module.scss";
import styles1 from "../../styles/footer/draw.module.scss";
import {FaFacebookF, FaGraduationCap, FaQuestion, FaTelegramPlane} from "react-icons/fa"
import {GrInstagram, GrServices, GrYoutube} from "react-icons/gr";
import {IoHome} from "react-icons/io5";
import {GiWorld} from "react-icons/gi";
import {FiPhoneCall} from "react-icons/fi";
import {IoMdSettings} from "react-icons/io";
import router from "next/router";
import {LinkHandler, toggle} from "../redux/reducers/reducer/universities";
import {connect} from "react-redux";
import React from "react";
import {Link} from 'react-scroll'
import {AiOutlineFileProtect} from "react-icons/ai";

function Footer({LinkHandler}) {
    const LinkScrollHandler = p => {
        LinkHandler(p)
        router.push('/');
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.social}>
                    <div className={styles.title}>
                        Bizni ijtimoiy tarmoqlarda kuzating
                    </div>
                    <div className={styles.links}>
                        <div className={styles.linksIn}>
                            <div className={`${styles1.spin1} ${styles1.circle1}`}>
                                <FaFacebookF className={styles1.icon1}/>
                            </div>
                        </div>
                        <div className={styles.linksIn}>
                            <a className={`${styles1.spin2} ${styles1.circle2}`}
                               href="http://instagram.com/akbarconsulting">
                                <GrInstagram className={styles1.icon2}/>
                            </a>
                        </div>
                        <div className={styles.linksIn}>
                            <a className={`${styles1.spin3} ${styles1.circle3}`}
                               href="https://www.youtube.com/channel/UCNe_4Kv8DA2Q00D_w6klUeg">
                                <GrYoutube className={styles1.icon3}/>
                            </a>
                        </div>
                        <div className={styles.linksIn}>
                            <a className={`${styles1.spin4} ${styles1.circle4}`} href="http://t.me/akbarconsulting">
                                <FaTelegramPlane className={styles1.icon4}/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.applyWr}>
                        <a href='/apply'>
                            <div className={styles.apply}>
                                Ariza topshirish
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.title1}>
                    Sahifalar
                </div>
                <Link activeClass="active"
                      to="asosiy"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='asosiyLink'
                      onClick={() => LinkScrollHandler('asosiyLink')}
                >
                    <IoHome className={styles.icon}/> Asosiy
                </Link>
                <Link activeClass="active"
                      to="davlatlar"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='davlatlarLink'
                      onClick={() => LinkScrollHandler('davlatlarLink')}
                >
                    <GiWorld className={styles.icon}/> Davlatlar
                </Link>
                <Link activeClass="active"
                      to="sertifikatlar"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='sertifikatlarLink'
                      onClick={() => LinkScrollHandler('sertifikatlarLink')}
                >
                    <AiOutlineFileProtect className={styles.icon}/> Sertifikatlar
                </Link>
                <Link activeClass="active"
                      to="talabalar"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='talabalarLink'
                      onClick={() => LinkScrollHandler('talabalarLink')}
                >
                    <FaGraduationCap className={styles.icon}/> Talabalar
                </Link>
                <Link activeClass="active"
                      to="servislar"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='servislarLink'
                      onClick={() => LinkScrollHandler('servislarLink')}
                >
                    <IoMdSettings className={styles.icon}/> Servislar
                </Link>
                <Link activeClass="active"
                      to="savollar"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='savollarLink'
                      onClick={() => LinkScrollHandler('savollarLink')}
                >
                    <FaQuestion className={styles.icon}/> Savollar
                </Link>
                <Link activeClass="active"
                      to="aloqa"
                      smooth={true}
                      className={`${styles.menu}`}
                      offset={50}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      id='aloqaLink'
                      onClick={() => LinkScrollHandler('aloqaLink')}
                >
                    <FiPhoneCall className={styles.icon}/> Aloqa
                </Link>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title2}>
                        Biz bilan bog'laning
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.col1}>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+99893914340077">
                                     ofis: 91 434 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+99893914350077">
                                     ofis: 91 435 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+998906480077">
                                    Namangan: 90 648 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+998886380077">
                                    Yangibozor: 88 638 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+998976380077">
                                    Bog`ot: 97 638 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+998976390077">
                                    Yangiariq: 97 639 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="tel:+998886390077">
                                    Beruniy: 88 639 00 77
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="mailto:info@akbarconsulting.uz">
                                    info@akbarconsulting.uz
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title2}>
                        Bizning manzil
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.col1}>
                            <div className={styles.row}>
                                <div className={styles.two}>
                                    Urganch shahar, Xonqa ko'chasi, Oldingi Turizm kollej binosi
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.two}>
                                    Mash'al do'koni ro'parasida
                                </div>
                            </div>
                            <div className={styles.row}>
                                <a className={styles.two} href="https://akbarconsulting.uz">
                                    akbarconsulting.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
    {LinkHandler, toggle}
)(Footer);