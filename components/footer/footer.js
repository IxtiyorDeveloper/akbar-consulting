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
import React, {useState} from "react";
import Link from 'next/link'
import {AiOutlineFileProtect} from "react-icons/ai";

function Footer({LinkHandler}) {
    const LinkScrollHandler = p => {
        LinkHandler(p)
        router.push('/');
    }
    const [link, setLink] = useState('asosiy');

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
                <Link href={'/'}
                      onClick={() => setLink("asosiy")}
                >
                    <div
                        className={`${styles.menu}`}
                    >
                        Asosiy sahifa
                    </div>
                </Link>
                <Link href={'/universities'}
                      onClick={() => setLink("un")}
                >
                    <div
                        className={`${styles.menu}`}
                    >
                        Universitetlar
                    </div>
                </Link>
                <Link href={'/filiallar'}
                      onClick={() => setLink("fil")}
                >
                    <div
                        className={`${styles.menu}`}
                    >
                        Filiallar
                    </div>
                </Link>
                <Link href={'/gallery'}
                      onClick={() => setLink("gal")}
                >
                    <div
                        className={`${styles.menu}`}
                    >
                        Galereya
                    </div>
                </Link>
                <Link href={'/faq'}
                      onClick={() => setLink("ser")}
                >
                    <div
                        className={`${styles.menu}`}
                    >
                        Savollar
                    </div>
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
                                <a className={styles.two} href="tel:+998914340077">
                                    Bosh ofis: 91 434 00 77
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
                                <a className={styles.two} href="https://everbestlab.com">
                                 Powered by EverbestLab
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