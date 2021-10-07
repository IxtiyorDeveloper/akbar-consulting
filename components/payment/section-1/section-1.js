import styles from "../../../styles/payment/section-1/section-1.module.scss"
import {FaCloudUploadAlt} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Phone from "../../phone/number";
import axios from "axios";
import ProgressBar from "../../apply/progress";
import {message} from "antd";

function Section1() {
    const router = useRouter();
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [name, setName] = useState('');
    const [acc, setAcc] = useState('');

    const colorStyle = {
        backgroundColor: router.query.country === undefined || router.query.country === "Tanlanmagan" ? "white" : "#03E603"
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
        if (e.target.files !== undefined) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    };
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name)
        formData.append('num3', num3)
        formData.append('num4', num4)
        formData.append('account', acc)
        try {
            const res = await axios.post('http://localhost:5000/screenshot', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data boundary=${form._boundary}'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
        } catch (err) {
            if (err.response.status === 500) {
                message.warn("There was a problem with the server")
            } else {
                message.warn(err.response.data.msg)
            }
        }
        setName('');
        setFile('');
        setFilename('');
        setAcc('')
        setNum3('')
        setNum4('')
        setDone(true)
    }
    useEffect(() => {
        if (num4 !== "" && num3 !== "" && acc !== "" && name !== "" && file !== "") {
            setDone(false)
        }
    },[num3,num4,name,acc])
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
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
                                UZCARD
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
                        <div className={styles.row}>
                            <div className={styles.title1}>
                                Bank malumotlari
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                  DAT "ASAKA BANK" XORAZM VIL., FIL
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                       X/R: 20208000405107718001
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                       VAL/X/R:20208840705107718001
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                       MFO:00581
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                       IFUT:79110
                            </div>
                            <div className={styles.card}>
                                <div className={styles.circle}/>
                                      STIR:306620600
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
                                <input type="text" className={styles.input} onChange={e => setName(e.target.value)}/>
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
                                <input type="text" className={styles.input} onChange={e => setAcc(e.target.value)}/>
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
                               </span> :
                                            <span>
                                    {filename}
                                </span>
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "25px"}}>
                        <ProgressBar percentage={uploadPercentage}/>
                    </div>
                    <div className={styles.buttonWr}>
                        <button type="submit" className={`${styles.buttonS} ${done ? "" : styles.able}`}
                                disabled={done}>
                            Topshirish
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Section1;