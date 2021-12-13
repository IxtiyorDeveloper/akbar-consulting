import styles from "../../../styles/home/section-2/section-2.module.scss"
import Link from 'next/link'
import {connect} from 'react-redux';
import {UNChange} from "../../redux/reducers/reducer/universities";


function Section2({UNChange, country}) {
    const data = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041538/r1_ivegqp.webp",
            name:"Rossiya"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041527/q1_tvyro7.webp",
            name:"Qozog'iston"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041486/kirgizikhistan_ieoicr.webp",
            name:"Qirg'iziston"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041558/tadjikistan_j5suvf.webp",
            name:"Tojikiston"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639049568/dubai_v5ev0j.webp",
            name:"Dubay"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041549/t1_ptri4i.webp",
            name:"Turkiya"
        },
        {
            id: 7,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041499/latvia_xtju5t.webp",
            name:"Latviya"
        },
        {
            id: 8,
            img: "https://res.cloudinary.com/dzomhjx1c/image/upload/v1639041508/poland_b9ckfs.webp",
            name:"Polsha"
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.boxWrapper}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        Bizning afzalliklarimiz
                    </div>
                    <div className={styles.line}/>
                </div>
                <div className={styles.box}>
                    <img src='/home/section-2/consulting.svg' className={styles.img}/>
                    <div className={styles.title1}>
                        Konsultatsiya
                    </div>
                    <div className={styles.text}>
                        Ekspertlar tomonidan taklif qilinadigan professional va bepul konsultatsiya olish imkoniyati
                    </div>
                </div>
                <div className={styles.box}>
                    <img src='/home/section-2/paper.svg' className={styles.img}/>
                    <div className={styles.title1}>
                        Hujjat
                    </div>
                    <div className={styles.text}>
                        Online va offline hujjat topshirish imkoniyati va universitetdan beriladigan barcha
                        hujjatlarni masofadan qabul qilish
                    </div>
                </div>
                <div className={styles.box}>
                    <img src='/home/section-2/loan.svg' className={styles.img}/>
                    <div className={styles.title1}>
                        Moliyaviy yordam
                    </div>
                    <div className={styles.text}>
                        Pullik bonuslar va ijtimoiy yordamga muhtoj talabalar uchun mega chegirmalar
                    </div>
                </div>
            </div>
            <div className={styles.countries} id="davlatlar">
                <div className={styles.cTitle}>
                    Hamkor davlatlar
                </div>
                <div className={styles.countriesList}>
                    {
                        data.map((i,k) => {
                            return(
                                <div className={styles.list} onClick={() => UNChange(i.name)} key={k}>
                                    <img src={i.img} alt="" className={styles.img} loading="lazy"/>
                                        <Link href={'/universities'}>
                                            <div className={styles.darkMaker}>
                                                <div className={styles.dr}>
                                                    Batafsil
                                                </div>
                                                <div className={styles.absolute}>
                                                    {i.name}
                                                </div>
                                            </div>
                                        </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country,
});

export default connect(
    mapStateToProps,
    {UNChange}
)(Section2);