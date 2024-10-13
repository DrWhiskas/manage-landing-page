import React from "react";
import './cta.css'

export default function Cta(){
    return(
        <section className="cta">
            <section className="cta__container">
                <h1 className="cta__catchphrase">
                    Simplify how your team works today.
                </h1>
                <button className="btn btn__cta">Get Started</button>
            </section>
        </section>
    )
}