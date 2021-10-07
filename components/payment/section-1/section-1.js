import styles from "../../../styles/payment/section-1/section-1.module.scss"
import {FaCloudUploadAlt} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Phone from "../../phone/number";

function Section1() {
    const router = useRouter();
    const colorStyle = {
        backgroundColor:router.query.country === undefined || router.query.country === "Tanlanmagan"?"white":"#03E603"
    }
    const text = () => {
        if (router.query.country === undefined || router.query.country === "Tanlanmagan") {
            return (
                <div className="rowMain">
                    <div className="col1">
                        Iltimos avval universitetni tanlang
                    </div>
                    <div className="col1">
                        Davlat - <span>Tanlanmagan</span>
                    </div>
                    <div className="col1">
                        Universitet - <span>Tanlanmagan</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="rowMain">
                    <div className="col1">
                        Davlat - <span>{router.query.country}</span>
                    </div>
                    <div className="col1">
                        Universitet - <span>{router.query.un}</span>
                    </div>
                </div>
            )
        }
    }
    const [done, setDone] = useState(true);

    const [num3, setNum3] = useState("")
    const [num4, setNum4] = useState("")
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');

    const onChange = e => {
        if (e.target.files !== undefined){
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.process}>
                    <div className={styles.part} style={colorStyle}>
                        1-qism
                    </div>
                    <div className={styles.part}>
                        2-qism
                    </div>
                </div>
                <div>
                    {text()}
                </div>
                <div className={styles.title}>
                    1.Quyidagi kartalardan biriga to'lovni amalga oshirasiz:
                </div>
                <div className={styles.display}>
                    <div className={styles.row}>
                        <div className={styles.title1}>
                            UZCARD:1,000,000 so'm
                        </div>
                        <div className={styles.card}>
                            <div className={styles.circle}/>
                            8600 0123 4567 8910
                        </div>
                        <div className={styles.card}>
                            <div className={styles.circle}/>
                            Sharobiddinov Ixtiyor
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title1}>
                            VISA:100 $
                        </div>
                        <div className={styles.card}>
                            <div className={styles.circle}/>
                            8600 0201 6788 5065
                        </div>
                        <div className={styles.card}>
                            <div className={styles.circle}/>
                            Ibragimov Islom
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    2.To'lovingiz muvaffaqiyatli amalga oshganini tasdiqlovchi hujjatni skrinshot qilasiz
                </div>
                <div className={styles.title}>
                    3.Va quyidagi anketani to'ldirasiz.
                </div>
                <div className={styles.form}>
                    <div className={styles.in}>
                        <div className={styles.col}>
                            <div className={styles.label}>
                                1.Ism familyangiz
                            </div>
                            <input type="text" className={styles.input}/>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.label}>
                                2.Tel nomer 1 (telegram bor)
                            </div>
                            <Phone num3={num3} setNum3={setNum3} type={"third"}/>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <div className={styles.col}>
                            <div className={styles.label}>
                                3.Tel nomer 2
                            </div>
                            <Phone num4={num4} setNum4={setNum4} type={"fourth"}/>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.label}>
                                4.telegram username - akkountingiz
                            </div>
                            <input type="text" className={styles.input}/>
                        </div>
                    </div>
                    <div className={styles.in}>
                        <div className={styles.col}>
                            <div className={styles.label}>
                                5.To’lov cheki screenshoti
                            </div>
                            <label className={styles.inputF}>
                                <input type="file" onChange={event => onChange(event)} accept="image/*"/>
                                {
                                    filename === '' ?
                                        <span>
                                  <FaCloudUploadAlt className={styles.icon1}/>  rasm yuklang
                               </span>:
                                        <span>
                                    {filename}
                                </span>
                                }
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWr}>
                    <button type="submit" className={`${styles.buttonS} ${done ? "" : styles.able}`} disabled={done}>
                        Topshirish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section1;