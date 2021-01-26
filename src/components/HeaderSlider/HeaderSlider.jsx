import React from 'react'
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import slider2 from '../../img/slider2.png'
import slider1 from '../../img/slider1.png'
import slider3 from '../../img/slider3.png'
import slider4 from '../../img/slider4.png'
import classes from '../../Style/headerSlider.module.css';

const sliderImg = [
    slider1,slider2,slider3,slider4
]


function HeaderSlider(){
    return(
        <div>
            <div className = {classes.slide}>
            <Fade>
                {sliderImg.map(function(item,index){
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

export default HeaderSlider