import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from "../../styles/home/faq/faq.module.scss"
import data from "../../components/faqList/index"
import Link from "next/link"
import {Input} from 'antd';

const {Search} = Input;


export default function FAQ({num}) {

    const [list, setList] = useState(data)
    const [bool, setBool] = useState(true)
    const onSearch = value => {
        console.log(value)
        setList(data.filter(i => i.q.toLowerCase().includes(value.toLowerCase())))
    }
    const stylesSearch = {
        display: `${num === 28 ? "flex" : "none"}`
    }
    const stylesButton = {
        display: `${num === 28 ? "none" : "flex"}`
    }
    const styleBg = {
        backgroundColor: `${num === 28 ? "rgb(239,239,239)" : "rgb(239,239,239)"}`
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.wrapper} style={styleBg} id="savollar">
            <div className={styles.container}>
                <div className={styles.title}>
                    Ko'p so'raladigan savollar
                </div>
                <div className={styles.search} style={stylesSearch}>
                    <div className={styles.qu}>
                        Savollingizni qidiring
                    </div>
                    <Search
                        placeholder="Savollingizni qidiring"
                        allowClear
                        enterButton="Qidiring"
                        size="large"
                        className={styles.input}
                        onChange={event => onSearch(event.target.value)}
                    />
                </div>
                <div style={{width: "100%"}}>
                    {
                        list.map((i, k) => {
                                if (parseInt(i.id) < num) {
                                    return (
                                        <Accordion expanded={expanded === `panel${i.id}`}
                                                   onChange={handleChange(`panel${i.id}`)} key={k}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                                className={styles.wr}
                                            >
                                                <Typography className={styles.first}>
                                                    {i.q}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className={styles.second}>
                                                    {i.ans}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                }
                            })
                    }
                </div>
                <div className={styles.buttonWr} style={stylesButton}>
                    <Link href={"/faq"}>
                        <div className={styles.button}>
                            Barcha savollar
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}