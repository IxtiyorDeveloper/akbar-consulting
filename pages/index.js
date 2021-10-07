import Home from "../components/home";
import React, {useEffect, useRef, useState} from "react";
import window from "global";
import {AiOutlineArrowUp} from "react-icons/ai";

function Index() {
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
            <Home/>
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

export default Index;