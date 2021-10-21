import styles from "../../../styles/home/section-2/section-2.module.scss"
import Link from 'next/link'
import {connect} from 'react-redux';
import {UNChange} from "../../redux/reducers/reducer/universities";


function Section2({UNChange, country}) {

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
                    <div className={styles.list} onClick={() => UNChange("Rossiya")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Rossiya
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.list} onClick={() => UNChange("Qozog'iston")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Qozog'iston
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.list} onClick={() => UNChange("Qirg'iziston")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Qirg'iziston
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.list} onClick={() => UNChange("Tojikiston")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Tojikiston
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.list} onClick={() => UNChange("Dubay")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Dubay
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.list} onClick={() => UNChange("Turkiya")}>
                        <Link href={'/universities'}>
                            <div className={styles.darkMaker}>
                                <div className={styles.dr}>
                                    Batafsil
                                </div>
                                <div className={styles.absolute}>
                                    Turkiya
                                </div>
                            </div>
                        </Link>
                    </div>
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