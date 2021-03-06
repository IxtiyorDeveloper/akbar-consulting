import React from 'react';
import styles from "../../../styles/home/filial.module.scss"
import Link from "next/link"

function Filial(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Filiallar
            </div>
            <div className={styles.next}>
                <div className={styles.img}>
                    <img src="/map1.jpeg" alt="map"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.num}>
                        O'zbekiston bo'ylab <span>6</span> ta filial
                    </div>
                    <div className={styles.t2}>
                        O'zingizga eng yaqin bo'lgan filialimizga murojaat qilishingiz mumkin.
                    </div>
                    <Link href={'/filiallar'}>
                        <div className={styles.button}>
                            Barcha Filiallar
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Filial;