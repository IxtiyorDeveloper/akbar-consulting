import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Index from "../components/faq";
import Sidebar from "../components/sidebar/sidebar";
import {AiOutlineArrowUp} from "react-icons/ai";
import window from "global";

function Faq(props) {
    const linkToTop = useRef(null);

    function getPageYOffSet() {
        if (window !== undefined) {
            return window.pageYOffset;
        } else {
            return 0;
        }
    }

    const [offTop, setOffTop] = useState(getPageYOffSet());

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (window !== undefined) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function handleScroll() {
        setOffTop(getPageYOffSet);
    }

    const onScrollToTop = () => {
        linkToTop.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    return (
        <div>
            <a href="top" ref={linkToTop}/>
            <Sidebar/>
            <Header/>
            <Index num={28}/>
            <Footer/>
            <div onClick={onScrollToTop}
                 className="scroll"
                 style={{
                     display: `${offTop > 400 ? "flex" : "none"}`
                 }}
            ><AiOutlineArrowUp className="icon"/>
            </div>
        </div>
    );
}

export default Faq;