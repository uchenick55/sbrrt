import React from "react";
// @ts-ignore
import classes from "./Preloader.module.css"

type PreloaderType = {}

const Preloader: React.FC<PreloaderType> = () => {
   return <div >
            <div className={classes.spinner}></div>
       </div>
}
export default Preloader