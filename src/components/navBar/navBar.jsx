import React from 'react'
import Arrow from '../../img/arrow.png'
import Logo from '../../img/Rectangle 305.png'
import ArrowTwo from '../../img/arrow2.png'
import FlagTwo from '../../img/flag2.png'
import classes from '../../Style/navBar.module.css'
import Search from '../Search/Search'



class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
            langShow: true,
        }
        this.onClickLang = this.onClickLang.bind(this)
    }
    onClickLang(){
        this.setState(state => ({
            langShow: !state.langShow
        }))
    }
    render(){
        return(
            <div>
                <div className ={classes.header}>
                    <div className ={classes.logo}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                <div className ={classes.navMenu}>
                    <div><p>Главная</p></div>
                    <div><p>Услуги</p></div>
                    <div><p>Наши работы</p></div>
                    <div><p>О нас</p></div>
                    <div className = {classes.contacts}><p>Контакты</p></div>
                </div>
                <div className = {classes.searchAndLang}>
                     <div className = {classes.search}>
                        <Search/>
                    </div>
                    <div className = {classes.flag}>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/555/555451.svg?token=exp=1610983767~hmac=e2c310fda6fea5db42877c232f25935a" alt=""/>
                    </div>
                    <div className = {classes.arrow}>
                        <div onClick = {this.onClickLang}>
                            {this.state.langShow ? 
                            <img src={Arrow} alt=""/> : <img src={ArrowTwo} alt=""/> }
                        </div>
                    </div>
                    <div>
                        {this.state.langShow ? '' :
                        <div className = {classes.showLang}>
                            <div className ={classes.flagUK}>
                                <a href="#">
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/555/555614.svg?token=exp=1611261380~hmac=a2f134ad48783dd76c8bafa3c7339a74" alt=""/>
                                </a>
                            </div>
                            <div className={classes.flagUSA}>
                                <a href="#">
                                    <img src={FlagTwo} alt=""/>
                                </a>
                            </div>
                        </div> }
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default NavBar