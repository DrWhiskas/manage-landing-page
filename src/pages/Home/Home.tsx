import React from "react";
import './home.css'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";

export default function Home(){
    return(
        <div className="home">
            <Header />
            <Main />
            <About />
        </div>
    )
}