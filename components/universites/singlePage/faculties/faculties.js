import React, {useEffect, useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from "../../../../styles/universities/singlePage/faculties/faculties.module.scss"
import data from "../../../../components/universityList/index"
import {Input} from 'antd';
import {BsArrowRight} from "react-icons/bs";

const {Search} = Input;


export default function Faculties({id}) {

    const [list, setList] = useState(data[parseInt(id)].fac)
    const [bool, setBool] = useState(true)
    const onSearch = value => {
        setList(data[parseInt(id)].fac.filter(i => i.g_fac.toLowerCase().includes(value.toLowerCase())))
    }
    console.log(id)
    const stylesSearch = {
        display: "flex"
    }
    const styleBg = {
        backgroundColor: "rgb(239,239,239)"
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={styles.wrapper} style={styleBg}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Fakultetlar
                </div>
                <div className={styles.search} style={stylesSearch}>
                    <div className={styles.qu}>
                        Fakultetni qidiring
                    </div>
                    <Search
                        placeholder="Fakultetni qidiring"
                        allowClear
                        enterButton="Qidiring"
                        size="large"
                        onChange={event => onSearch(event.target.value)}
                        className={styles.input}
                    />
                </div>
                <div style={{width: "100%"}}>
                    {
                        list.map((item, k) => {
                            return (
                                <Accordion expanded={expanded === `panel${item.id}`}
                                           onChange={handleChange(`panel${item.id}`)}
                                           key={k}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className={styles.wr}
                                    >
                                        <Typography className={styles.first}>
                                            {item.g_fac}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="column">
                                        {item.they.map((i, k) => {
                                            return (
                                                <Typography key={k} className={styles.second}>
                                                    <BsArrowRight/> {i.name}
                                                </Typography>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}