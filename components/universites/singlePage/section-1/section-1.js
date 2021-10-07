import {connect} from "react-redux";
import {getAll, UNChange} from "../../../redux/reducers/reducer/universities";
import data from "../../../universityList/index"
import styles from "../../../../styles/universities/singlePage/section-1/section-1.module.scss"
import {AiOutlineArrowRight, AiOutlineGateway, AiOutlineLine} from "react-icons/ai";
import {BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp} from "react-icons/bs";
import React, {useEffect, useState} from "react";
import Section3 from "../../../home/section-3/section-3";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GiDiploma, GiGiftOfKnowledge, GiReturnArrow} from "react-icons/gi";
import {IoNewspaperOutline} from "react-icons/io5"
import {FaPassport} from "react-icons/fa"
import {BsCamera, BsCardHeading} from "react-icons/bs"
import Link from "next/link"
import Faculties from "../faculties/faculties";
import {useRouter} from "next/router";


function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <BsChevronRight/> : <BsChevronLeft/>;
    return (
        <div className={className} onClick={props.onClick}>
            {char}
        </div>
    );
}

function Section1({ country }) {
    const router = useRouter();


    const [dropdown, setDropdown] = useState(false);
    const [currency, setCurrency] = useState('USA DOLLAR');
    const [currencySym, setCurrencySm] = useState('$');
    const [currencyList, setCurrencyList] = useState({})
    const [sum, setSum] = useState(710)
    const [sum1, setSum1] = useState(710)
    const bg = {
        display: `${dropdown ? "block" : "none"}`,
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 10
    }
    const styleDr = {
        display: `${dropdown ? "flex" : "none"}`,
        flexDirection: "column",
        alignItems: "flex-start"
    }
    // useEffect(() => {
    //     axios.get(`http://data.fixer.io/api/latest?access_key=36c889a3c0c1006a876e08f31f360e62`)
    //         .then(res => {
    //             const persons = res.data;
    //             setCurrencyList(persons)
    //         })
    //         .catch(e => console.log(e))
    // }, [currency])
    const handleCur = (a) => {
        if (a === 'uz') {
            setCurrency('UZ SUM');
            // const cal1 = sum / currencyList.rates.USD
            // const cal2 = cal1 * currencyList.rates.UZS
            const cal2 = sum * 10500
            setSum1(Math.floor(cal2))
            setCurrencySm('UZS')
        }
        if (a === 'usd') {
            const cal2 = sum
            setCurrency('USA DOLLAR');
            setSum1(Math.floor(cal2))
            setCurrencySm('$')
            // const cal1 = sum / currencyList.rates.USD
            // const cal2 = cal1 * currencyList.rates.USD
        }
        // if (a === 'try') {
        //     setCurrency('TRY LIRA');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.TRY
        //     setSum1(Math.floor(cal2))
        // }
        // if (a === 'tj') {
        //     setCurrency('TJ SOMONI');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.TJS
        //     setSum1(Math.floor(cal2))
        // }
        // if (a === 'kr') {
        //     setCurrency('KR SUM');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.KGS
        //     setSum1(Math.floor(cal2))
        // }
        // if (a === 'kz') {
        //     setCurrency('KZ TENGE');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.KZT
        //     setSum1(Math.floor(cal2))
        // }
        // if (a === 'uae') {
        //     setCurrency('UAE DIRHAM');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.AED
        //     setSum1(Math.floor(cal2))
        // }
        // if (a === 'ru') {
        //     setCurrency('RU RUBL');
        //     const cal1 = sum / currencyList.rates.USD
        //     const cal2 = cal1 * currencyList.rates.RUB
        //     setSum1(Math.floor(cal2))
        // }

    }
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false
    };
    const dataSlide = [
        {
            id: 1,
            img: "one"
        },
        {
            id: 2,
            img: "two"
        },
        {
            id: 3,
            img: "three"
        },
        {
            id: 4,
            img: "four"
        },
    ]
    return (
        <div>
            <div onClick={() => setDropdown(!dropdown)} style={bg}/>
            <div>
                {data.map((i, k) => {
                    if (parseInt(router.query.id) === parseInt(i.id))
                        return (
                            <div key={k} className={styles.wrapper}>
                                <div className={styles.container}
                                     style={{backgroundImage: `url('/home/universities/${i.img}.jpg')`}}
                                >
                                    <div className={styles.darkMaker}>
                                        <div className={styles.name}>
                                            {i.name}
                                        </div>
                                        <div className={styles.address}>
                                            {i.address}
                                        </div>
                                        <Link className={styles.button}
                                              href={{pathname: '/apply', query: {keyword: router.query.id}}}>
                                            <div className={styles.button}>
                                                Ariza Berish <AiOutlineArrowRight className="fa-arrow-right1"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.infoWr}>
                                    <div className={styles.containerCar}>
                                        <Slider {...settings}
                                                nextArrow={<Arrow type="next"/>}
                                                prevArrow={<Arrow type="prev"/>}
                                                className="slide"
                                        >
                                            {
                                                dataSlide.map((item, k) => {
                                                    return (
                                                        <div key={k} className={styles.carousel}>
                                                            <div
                                                                className={styles.wrS}
                                                                style={{backgroundImage: `url('/home/universities/${i.im_country}/${i.im_uni}/${item.img}.jpg')`}}
                                                            >
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className={styles.great1}>
                                        <div className={styles.infoNext}>
                                            {i.m_address}
                                        </div>
                                        <br/>
                                        <div className={styles.infoNext}>
                                            {i.info1}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.infoWr}>
                                    <div className={styles.info}>
                                        <div>
                                            {i.info2}
                                        </div>
                                    </div>
                                </div>
                                <Section3
                                    text1={"Fakultetlar"}
                                    num1={data[parseInt(router.query.id)].fac.map(i => i.they.length).reduce((sum, i) => sum + i)}
                                    text2={"Studentlar"}
                                    num2={55000}
                                    text3={"Expertlar"}
                                    num3={600}
                                    button={"Ariza"}
                                    link={`/apply?keyword=${parseInt(router.query.id)}`}
                                />
                                <Faculties id={router.query.id}/>
                                <div className={styles.s2Wrapper}>
                                    <div className={styles.left}>
                                        <div className={styles.advantages}>
                                            Biz bilan o'qishga topshirishning afzallik tomonlari
                                        </div>
                                        <div className={styles.then}>
                                            <GiDiploma className={styles.icon}/> - Davlat namunasidagi diplom;
                                        </div>
                                        <div className={styles.then}>
                                            <GiReturnArrow className={styles.icon}/> - 1 yildan keyin o'qishni
                                            ko'chirish;
                                        </div>
                                        <div className={styles.then}>
                                            <IoNewspaperOutline className={styles.icon}/> - Bepul sug'urta;
                                        </div>
                                        <div className={styles.then}>
                                            <GiGiftOfKnowledge className={styles.icon}/> - Imtihonsiz o'qishga kirish;
                                        </div>
                                        <div className={styles.then}>
                                            <AiOutlineGateway className={styles.icon}/> - BARCHA YO'NALISHLAR MAVJUD
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.advantages}>
                                            Kerakli hujjatlar:
                                        </div>
                                        <div className={styles.then}>
                                            <FaPassport className={styles.icon}/> - Pasport
                                        </div>
                                        <div className={styles.then}>
                                            <GiDiploma className={styles.icon}/> - Diplom yoki Attestat(ilovasi
                                            bilan)
                                        </div>
                                        <div className={styles.then}>
                                            <IoNewspaperOutline className={styles.icon}/> - Bitiruvchilar uchun 11-sinf
                                            bitiruvchisi ekanligini tasdiqlovchi ma'lumotnoma
                                        </div>
                                        <div className={styles.then}>
                                            <BsCamera className={styles.icon}/> - Foto 3x4 - 6ta
                                        </div>
                                        <div className={styles.then}>
                                            <BsCardHeading className={styles.icon}/> - 086-Ma'lumotnoma
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.nextS}>
                                    <div className={styles.nWr}>
                                        <div className={styles.present}>Mavjud o'quv dasturlari:</div>
                                        <div className={styles.stage}>Bakalavr, Magistratura, Doktorantura,
                                            Aspirantura
                                        </div>
                                    </div>
                                    <div className={styles.nWr}>
                                        <div className={styles.present}>Yillik ta'lim qiymati:</div>
                                        <div className={styles.row}>
                                            <div className={styles.dropdown} onClick={() => setDropdown(!dropdown)}>
                                                <div className={styles.flex}>
                                                    {currency} {
                                                    dropdown ?
                                                        <BsChevronUp className={styles.icon1}/>
                                                        :
                                                        <BsChevronDown className={styles.icon1}/>
                                                }
                                                </div>
                                                <div style={styleDr} className={styles.drabs}>
                                                    <div className={styles.sum} onClick={() => handleCur('uz')}>
                                                        UZ SUM
                                                    </div>
                                                    {/*<div className={styles.sum} onClick={() => handleCur('ru')}>*/}
                                                    {/*    RU RUBLE*/}
                                                    {/*</div>*/}
                                                    {/*<div className={styles.sum} onClick={() => handleCur('uae')}>*/}
                                                    {/*    UAE DIRHAM*/}
                                                    {/*</div>*/}
                                                    {/*<div className={styles.sum} onClick={() => handleCur('kz')}>*/}
                                                    {/*    KZ TENGE*/}
                                                    {/*</div>*/}
                                                    {/*<div className={styles.sum} onClick={() => handleCur('kr')}>*/}
                                                    {/*    KR SUM*/}
                                                    {/*</div>*/}
                                                    {/*<div className={styles.sum} onClick={() => handleCur('tj')}>*/}
                                                    {/*    TJ SOMONI*/}
                                                    {/*</div>*/}
                                                    {/*<div className={styles.sum} onClick={() => handleCur('try')}>*/}
                                                    {/*    TRY LIRA*/}
                                                    {/*</div>*/}
                                                    <div className={styles.sum} onClick={() => handleCur('usd')}>
                                                        USA DOLLAR
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.stage1}>{sum1} {" "} {currencySym}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country
});

export default connect(
    mapStateToProps,
    {UNChange, getAll}
)(Section1);