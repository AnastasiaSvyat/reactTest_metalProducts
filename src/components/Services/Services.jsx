import React from "react";
import servicesImg1 from "../../img/servicesImg1.png";
import servicesImg2 from "../../img/servicesImg2.png";
import servicesImg3 from "../../img/servicesImg3.png";
import servicesImg4 from "../../img/servicesImg4.png";
import servicesImg5 from "../../img/servicesImg5.png";
import servicesImg6 from "../../img/servicesImg6.png";
import servicesImg7 from "../../img/servicesImg7.png";
import servicesImg8 from "../../img/servicesImg8.png";
import servicesImg1Tel from "../../img/servicesImg1Tel.png";
import servicesImg2Tel from "../../img/servicesImg2Tel.png";
import servicesImg3Tel from "../../img/servicesImg3Tel.png";
import servicesImg4Tel from "../../img/servicesImg4Tel.png";
import servicesImg5Tel from "../../img/servicesImg5Tel.png";
import servicesImg6Tel from "../../img/servicesImg6Tel.png";
import servicesImg7Tel from "../../img/servicesImg7Tel.png";
import servicesImg8Tel from "../../img/servicesImg8Tel.png";
import sixesFirst from "../../img/sixes.png";
import sixesSecond from "../../img/sixesSecond.png";
import Media from 'react-media'



import classes from '../../Style/services.module.css';
import  { ScrollRotate } from 'react-scroll-rotate';


const servicesInfo =[
    {
        img: servicesImg1,
        imgTel: servicesImg1Tel,
        info: 'Производсто оборудования',
    },
    {
        img: servicesImg2,
        imgTel: servicesImg2Tel,
        info: 'Металическая мебель',
    },
    {
        img: servicesImg3,
        info: 'Металлоконструкция',
        imgTel: servicesImg3Tel,
    },
    {
        img: servicesImg4,
        info: 'Металлообработка',
        imgTel: servicesImg4Tel,
    },
    {
        img: servicesImg5,
        info: 'Раскрой металла',
        imgTel: servicesImg5Tel,
    },
    {
        img: servicesImg6,
        info: 'Конструкторское бюро',
        imgTel: servicesImg6Tel,
    },
   
   
]
const servInfo2 = [
    {
        img: servicesImg7,
        info: 'Аренда техники',
        imgTel: servicesImg7Tel,
    },
    {
        img: servicesImg8,
        info: 'Ремонт техники',
        imgTel: servicesImg8Tel,
    },

]

class Services extends React.Component{
    render(){
        return(
            <div className ={classes.scrollRotate}>
                <h2>Услуги</h2>
                    <div className = 'borderTop'></div>
                <div className = {classes.sixesFirst}>
                <ScrollRotate>
                    <img src={sixesFirst} alt=""/>
                </ScrollRotate>
                </div>
                <div className = {classes.sixesSecond}>
                <ScrollRotate>
                    <img src={sixesSecond} alt=""/>
                </ScrollRotate>
                </div>
                <div className = {classes.sixesThird}>
                <ScrollRotate>
                    <img src={sixesSecond} alt=""/>
                </ScrollRotate>
                </div>
                <div className = {classes.sixesForth}>
                <ScrollRotate>
                    <img src={sixesFirst} alt=""/>
                </ScrollRotate>
                </div>
                    <div className={classes.servicesBox}>
                        {servicesInfo.map(function(item,index){
                            return <div key = {index}>
                                <Media query={{ maxWidth: 599 }}>
                                    {page =>page ?  <div className = {classes.servicesBox_img} style={{'backgroundImage': `url(${item.imgTel})`}}>
                                    <div className ={classes.grey}>
                                        <div className ={classes.grey_info}>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                </div> 
                                :  
                                <div className = {classes.servicesBox_img} style={{'backgroundImage': `url(${item.img})`}}>
                                    <div className ={classes.grey}>
                                        <div className ={classes.grey_info}>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                </div>}
                                </Media>
                            </div>
                        })}
                        {servInfo2.map(function(item,index){
                            return <div key = {index}>
                                <Media query={{ maxWidth: 599 }}>
                                    {page =>page ? <div className = {classes.servicesBox_img2} style={{'backgroundImage': `url(${item.imgTel})`}}>
                                        <div className ={classes.grey}>
                                            <div className ={classes.grey_info}>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                : 
                                <div className = {classes.servicesBox_img2} style={{'backgroundImage': `url(${item.img})`}}>
                                    <div className ={classes.grey}>
                                        <div className ={classes.grey_info}>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                </div>}
                                </Media>
                            </div>
                        })}
                    </div>
                    <div className = {classes.servicesBox_button}>
                        <Media query={{ maxWidth: 599 }}>
                            {page =>page ? 
                                <button className = {classes.servicesBox_button}>Расчет стоимости</button>
                            : 
                                <button className = {classes.servicesBox_button}>Быстрый расчет цены по чертежу</button>
                            }
                        </Media>
                    </div>
            </div>
        )
    }
}


export default Services
