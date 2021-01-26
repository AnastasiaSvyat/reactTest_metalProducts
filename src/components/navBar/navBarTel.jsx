import React from "react";
import classes from '../../Style/navBarTel.module.css'
import logoTel from '../../img/logoTel.png'
import Search from "../Search/Search";





class NavBarTel extends React.Component{
    constructor(){
        super()
        this.state ={
            showMenu:false,
            search:false
        }
        this.showMenu = this.showMenu.bind(this)
    }
    showMenu(){
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    render(){
        return(
            <div className = {classes.container}>
                <div className = {classes.logo}>
                    <img src={logoTel} alt="logo"/>
                </div>
                <div>
                    <Search/>
                </div>
                <div onClick = {this.showMenu} className ={classes.showMenuimg}>
                    {this.state.showMenu ? 
                        <img className={classes.close} src='https://www.flaticon.com/svg/vstatic/svg/748/748122.svg?token=exp=1611607676~hmac=c1b73da5533ccd1dcac9672a2c32d7de' alt=""/>
                    : 
                        <img src="https://www.flaticon.com/svg/vstatic/svg/808/808531.svg?token=exp=1611607804~hmac=0c4c3edd3394f797840336ba768f2698" alt=""/>
                    }
                </div>
                    {this.state.showMenu ? <div className={classes.showMenu}>
                        <div className = {classes.menuTextFirst}>
                            <div>Меню</div>
                            <div className = {classes.flagBox}>
                                <div className = {classes.flagRUTel}>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/555/555451.svg?token=exp=1610983767~hmac=e2c310fda6fea5db42877c232f25935a" alt=""/>
                                </div>
                                <div className = {classes.flagUKTel}>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/555/555614.svg?token=exp=1611261380~hmac=a2f134ad48783dd76c8bafa3c7339a74" alt=""/>
                                </div>
                                <div className = {classes.flagUSATel}>
                                    <img src='https://www.flaticon.com/svg/vstatic/svg/555/555417.svg?token=exp=1611686370~hmac=e4448720e6dd921330bb43179cff5d45' alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className = {classes.menuText}>Услуги</div>
                        <div className = {classes.menuText}>Наши работы</div>
                        <div className = {classes.menuText}>О нас</div>
                        <div className = {classes.menuText}>Контакты</div>
                    </div> : '' }
            </div>
        )
    }
}

export default NavBarTel