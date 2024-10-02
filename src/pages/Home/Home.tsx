import React from "react";
import './home.css'

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Comments from "../../components/Comments/Comments";

export default function Home(){
    return(
        <div className="home">
            <Header />
            <Main />
            <About />
            <Comments />
        </div>
    )
}