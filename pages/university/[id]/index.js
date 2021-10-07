import {useRouter} from "next/router";
import Section1 from "../../../components/universites/singlePage/section-1/section-1";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import {AiOutlineArrowUp} from "react-icons/ai";
import React, {useEffect, useRef, useState} from "react";
import window from "global";


function Index() {
    const router = useRouter();
    const {id} = router.query
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
            <Section1 id={id}/>
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

export default Index;