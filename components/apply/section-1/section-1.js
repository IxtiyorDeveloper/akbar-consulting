import styles from "../../../styles/apply/section-1/section-1.module.scss"
import {FaCloudUploadAlt} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import data from "../../universityList/index"
import Checkbox from '@material-ui/core/Checkbox';
import {useRouter} from 'next/router'
import Phone from "../../phone/number";
import validator from "validator";
import DatePicker from "react-datepicker";
import axios from "axios";
import ProgressBar from "../progress/index";
import "react-datepicker/dist/react-datepicker.css";


function Section1() {
    const [checked, setChecked] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date('1998-03-21'));
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [country1, setCountry1] = useState("Tanlanmagan");
    const [id, setId] = useState(1)
    const [un1, setUn1] = useState("Tanlanmagan");
    const [done, setDone] = useState(true);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(new Date());
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [phone, setPhone] = useState(null);
    const [message1, setMessage1] = useState('');
    const [company, setCompany] = useState('');

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
        formData.append('surname', surname)
        formData.append('address', address)
        formData.append('num1', num1)
        formData.append('num2', num2)
        formData.append('email', email)
        formData.append('date', startDate)
        formData.append('university', un1)
        formData.append('country', country1)
        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data boundary=${form._boundary}'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
            const {fileName, filePath} = res.data;
            setUploadedFile({fileName, filePath});
            setMessage('File uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
        setName('');
        setSurname('');
        setEmail('');
        setCountry1('Tanlanmagan');
        setUn1('Tanlanmagan');
        setFile('');
        setNum1('');
        setNum2('');
        setStartDate(new Date())
        setAddress('');
        setEmailError('');
        setFilename('');
    }
    const bg = {
        display: `${dropdown ? "block" : "none"}`,
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 10
    }
    const bg1 = {
        display: `${dropdown1 ? "block" : "none"}`,
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
        alignItems: "flex-start",
        zIndex: 11
    }
    const styleDr1 = {
        display: `${dropdown1 ? "flex" : "none"}`,
        flexDirection: "column",
        alignItems: "flex-start",
        zIndex: 12
    }
    const router = useRouter();
    useEffect(() => {
        setId(parseInt(router.query.keyword));
        if (country1 === "Tanlanmagan") {
            data.map(i => {
                if (i.id === parseInt(router.query.keyword)) {
                    setCountry1(i.country);
                    setUn1(i.name)
                }
            })
        }
    })
    const HandleCountry = (a) => {
        if (a === "Rossiya") {
            setUn1("Moskva moliyaviy-sanoat Sinegeriya universiteti");
            setCountry1("Rossiya");
        } else {
            if (a === "Qozog'iston") {
                setUn1("Qozog'iston davlat universiteti");
                setCountry1("Qozog'iston");
            }
        }
    }
    const handleChange = (event) => {
        if (name === "" || surname === "" || address === "" || num1 === "" || num2 === "" || email === "") {
            alert("To'liq to'ldiring")
            setChecked(false);
        } else {
            setDone(!done)
            setChecked(!checked)
        }
    };
    const [emailError, setEmailError] = useState('');

    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Emailni to\'g\'ri yozing')
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div onClick={() => setDropdown(!dropdown)} style={bg}/>
                <div onClick={() => setDropdown1(!dropdown1)} style={bg1}/>
                <div className={styles.container}>
                    <div className={styles.process}>
                        <div className={styles.part}>
                           1-qism
                        </div>
                        <div className={styles.part}>
                            2-qism
                        </div>
                    </div>
                    <div className={styles.title}>
                        Quyidagi formani to'ldiring
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Ism
                            </div>
                            <input type="text" className={`${styles.input}`} placeholder="Ism"
                                   onChange={event => setName(event.target.value)}
                                   value={name}
                            />
                        </div>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Familya
                            </div>
                            <input type="text" className={styles.input} placeholder="Familya"
                                   onChange={event => setSurname(event.target.value)}
                                   value={surname}
                            />
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Yashash manzilingizni kiriting
                            </div>
                            <input type="text" className={styles.input} placeholder="Manzil"
                                   onChange={event => setAddress(event.target.value)}
                                   value={address}
                            />
                        </div>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Tug'ilgan sana
                            </div>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)}
                                        className={styles.input}/>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Tel nomer 1
                            </div>
                            <Phone num1={num1} setNum1={setNum1} type={"first"}/>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Tel nomer 2
                            </div>
                            <Phone num2={num2} setNum2={setNum2} type={"second"}/>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Email
                            </div>
                            <input type="text" className={styles.input}
                                   onChange={(e) => {
                                       validateEmail(e);
                                       setEmail(e.target.value)
                                   }}
                                   placeholder={"Email"}
                                   value={email}
                            />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{emailError}</span>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Pasport (.pdf, .doc, .docx)
                            </div>
                            <label className={styles.inputF}>
                                <input type="file" onChange={event => onChange(event)} accept=".pdf,.docx,.doc"/>
                                {
                                    filename === '' ?
                                        <span>
                                  <FaCloudUploadAlt className={styles.icon1}/>  fayl yuklang
                               </span> :
                                        <span>
                                    {filename}
                                </span>
                                }
                            </label>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Davlat
                            </div>
                            <div className={styles.abswr} onClick={() => setDropdown(!dropdown)}>
                                {country1} {dropdown ?
                                <BsChevronUp className={styles.icon}/>
                                :
                                <BsChevronDown className={styles.icon}/>
                            }
                                <div className={styles.abs} style={styleDr}>
                                    <div className={styles.absch} onClick={() => HandleCountry("Rossiya")}>
                                        Rossiya
                                    </div>
                                    <div className={styles.absch}>
                                        Tojikiston
                                    </div>
                                    <div className={styles.absch} onClick={() => setCountry1("Turkmaniston")}>
                                        Turkmaniston
                                    </div>
                                    <div className={styles.absch} onClick={() => HandleCountry("Qozog'iston")}>
                                        Qozog'iston
                                    </div>
                                    <div className={styles.absch} onClick={() => setCountry1("Qirg'iziston")}>
                                        Qirg'iziston
                                    </div>
                                    <div className={styles.absch} onClick={() => setCountry1("Dubay")}>
                                        Dubay
                                    </div>
                                    <div className={styles.absch} onClick={() => setCountry1("Turkiya")}>
                                        Turkiya
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.label}>
                                Universitet
                            </div>
                            <div className={styles.abswr} onClick={() => setDropdown1(!dropdown1)}>
                                {un1} {dropdown1 ?
                                <BsChevronUp className={styles.icon}/>
                                :
                                <BsChevronDown className={styles.icon}/>
                            }
                                <div className={styles.abs} style={styleDr1}>
                                    {

                                        data.map((i, k) => {
                                            if (i.country === country1) {
                                                return (
                                                    <div className={styles.absch} onClick={() => setUn1(i.name)}
                                                         key={k}>
                                                        {i.name}
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title2}>
                        Shartnoma shartlari
                    </div>
                    <div className={styles.ce}>
                        <a href="/shar.docx">Yuklab olish</a>
                    </div>
                    <div className={styles.radio}>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'primary checkbox'}}
                            className={styles.button}
                        />
                        Hamma shartlarni o'qidim, roziman
                    </div>
                    <div className={styles.progress}>
                        <ProgressBar percentage={uploadPercentage}/>
                    </div>

                    <div className={styles.buttonWr}>
                        <input
                            type="submit" className={`${styles.buttonS} ${done ? "" : styles.able}`}
                            disabled={done}
                            value="Topshirish"
                            onClick={() =>router.push({
                                pathname: '/payment',
                                query: {un: un1, country: country1}
                            })}
                        />
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Section1;