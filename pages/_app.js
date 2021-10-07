import '../styles/globals.css'
import '../styles/input.scss'
import {Provider} from 'react-redux'
import {useStore} from '../components/redux/store'
import Head from "next/head";
import 'antd/dist/antd.css';
import {css} from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import React, {useEffect, useRef, useState} from "react";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";




const progress = new ProgressBar({
    size: 4,
    color: "rgb(237,237,0)",
    className: "bar-of-progress",
    delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({Component, pageProps}) {

      const override = css`
       display: block;
       margin: 300px auto;
       border-color: red;
      `;
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 3000)
    }, []);

    const store = useStore(pageProps.initialReduxState);
    return (
        spinner ? <div className="center">
                <SyncLoader color={"rgb(239,183,1)"} loading={true} css={override} size={20} margin={2}/></div> :
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
                {/*<script src="//code.jivosite.com/widget/MZvwRlO78r" async></script>*/}
                <title>akbar-consulting</title>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"></script>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"></link>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    crossOrigin="anonymous"
                />
                <link rel="shortcut icon" href="/a.png"/>
            </Head>
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        </>
    )
}

export default MyApp
