import data from "../../universityList/index"
import styles from "../../../styles/universities/section-1/section-1.module.scss"
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {useState} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link"
import {connect} from "react-redux";
import {UNChange} from "../../redux/reducers/reducer/universities";
import {getAll} from "../../redux/reducers/reducer/universities"

function Section1({country,UNChange}) {
    const [dr, setDr] = useState(false)
    const drStyle = {
        display: `${dr ? "flex" : "none"}`
    }
    const bg = {
        display: `${dr ? "block" : "none"}`,
        width: "100%",
        height: "100vh",
        position: "fixed"
    }
    return (
        <div>
            <div style={bg} onClick={() => setDr(!dr)}/>
            <div className={styles.container}>
                <div className={styles.dropdownWr}>
                    <div className={styles.title}>
                        Davlatlar:
                    </div>
                    <div className={styles.dropdown} onClick={() => setDr(!dr)}>
                        <div className={styles.in}>
                            <div>
                                {country}
                            </div>
                            {
                                dr ?
                                    <BsChevronUp className={styles.icon}/>
                                    :
                                    <BsChevronDown className={styles.icon}/>
                            }
                        </div>
                        <div className={styles.drD} style={drStyle}>
                            <div className={styles.drC} onClick={() => UNChange("Rossiya")}>
                                Rossiya
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Qozog'iston")}>
                                Qozog'iston
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Qirg'iziston")}>
                                Qirg'iziston
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Tojikiston")}>
                                Tojikiston
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Turkiya")}>
                                Turkiya
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Dubay")}>
                                Dubay
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Latviya")}>
                                Latviya
                            </div>
                            <div className={styles.drC} onClick={() => UNChange("Polsha")}>
                                Polsha
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.boxWr}>
                    {
                        data.map((i, k) => {
                            if (i.country === country) {
                                return (
                                        <Link href={{pathname: `/university/${i.id}`, query: {keyword: i.id}}}
                                              key={k}

                                        >
                                            <div className={styles.box}>
                                                <div className={styles.img}
                                                     style={{backgroundImage: `url('/home/universities/${i.img}.jpg')`}}>
                                                    <div className={styles.darkMaker}>
                                                        <div className={`${styles.circle} ${styles.spin}`}>
                                                            <AiOutlineArrowRight className="fa-arrow-right"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.city}>
                                                    {i.address}
                                                </div>
                                                <div className={styles.UTitle}>
                                                    {i.name}
                                                </div>
                                                <div className={styles.button}>
                                                    Batafsil
                                                </div>
                                            </div>
                                        </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    country: state.sidebar.country
});

export default connect(
    mapStateToProps,
    {UNChange,getAll}
)(Section1);
