import Index from "../components/universites";
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {getAll, UNChange} from "../components/redux/reducers/reducer/universities";
import window from "global";
import {AiOutlineArrowUp} from "react-icons/ai";

function Universities({country,setCountry,getAll}) {
    useEffect(() => {
        if (country === undefined){
            getAll();
        }
    })
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
        <>
            <a href="top" ref={linkToTop}/>
            <Index country={country} setCountry={setCountry}/>
            <div onClick={onScrollToTop}
                 className="scroll"
                 style={{
                     display: `${offTop > 400 ? "flex" : "none"}`
                 }}
            ><AiOutlineArrowUp className="icon"/>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country
});

export default connect(
    mapStateToProps,
    {UNChange,getAll}
)(Universities);