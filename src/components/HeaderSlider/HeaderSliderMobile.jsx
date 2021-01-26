import React from 'react'
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import slider1mobile from '../../img/slider1mobile.png'
import slider2mobile from '../../img/slider2mobile.png'
import slider3mobile from '../../img/slider3mobile.png'
import slider4mobile from '../../img/slider4mobile.png'
import classes from '../../Style/headerSlider.module.css';

const sliderImgMobile = [
    slider1mobile,slider2mobile,slider3mobile,slider4mobile
]


function HeaderSliderMobile(){
    return(
        <div>
            <div className = {classes.slide}>
            <Fade>
                {sliderImgMobile.map(function(item,index){
                    console.log(item);
                    return <div key = {index}>
                        <div className = {classes.sliderImg} style={{'backgroundImage': `url(${item})`}}>
                            <div className = {classes.header_insideBox}>
                                <div className = {classes.header_insideBox_first}><p>Высокоточное изготовление</p></div>
                                <div className ={classes.header_insideBox_second}><p>изделий из металла по чертежам</p></div>
                            </div>
                        </div>
                            </div>
                        })}
            </Fade>
            </div>
        </div>
    )
}

export default HeaderSliderMobile