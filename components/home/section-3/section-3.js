import styles from "../../../styles/home/section-3/section-3.module.scss";
import {FaUniversity} from "react-icons/fa"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Link from "next/link"
import {useState} from "react";


function Section3({text1, num1, text2, num2, text3, num3, button, link}) {
    const [ABool,setABool] = useState(true)
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.box1}>
                        <FaUniversity className={styles.icon}/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.then}>
                               <span>
                         {text1} -
                        </span>
                            <span>
                          <CountUp end={num1} redraw={true} duration={3} className="count"
                          active={ABool}
                          >
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} className={styles.in}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </span>
                        </div>
                        <div className={styles.then}>
                             <span>
                         {text2} -
                        </span>
                            <span>
                          <CountUp end={num2} redraw={true} duration={3} className="count"
                                   active={ABool}
                          >
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} className={styles.in}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </span>
                        </div>
                        <div className={styles.then}>
                               <span>
                         {text3} -
                        </span>
                            <span>
                          <CountUp end={num3} redraw={true} duration={3} className="count"
                                   active={ABool}
                          >
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} className={styles.in}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </span>
                        </div>
                    </div>
                    <Link href={link}>
                        <div className={styles.box2}>
                            {button}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Section3;