import Goku from "@/Components/HighOrderComponent/Goku";
import Vegeta from "@/Components/HighOrderComponent/Vegeta";
import React, { Fragment } from "react";
import style from '../../../js/assets/styles/highOrderComponent.module.css'


const Index = ()=>
{
    return (
        <Fragment>
            <div className={style.title}>
                <h1>Goku VS Vegeta</h1>
            </div>
            <div className={style.row}>
                <Vegeta/>
                <Goku/>
            </div>
        </Fragment>
    );
}

export default Index;