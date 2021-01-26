import React from 'react'
import classes from '../../Style/footer.module.css';
import text from '../../img/text.png'
import text2 from '../../img/text2.png'

import Media from 'react-media'





class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className = {classes.footer}>
                <div className = {classes.footer_aboutCompany}>
                    <div className = {classes.footer_aboutCompany_name}>
                        <p>О компании</p>
                    </div>
                    <div className = {classes.footer_aboutCompany_item}>
                        <p><a href="#">Наши работы</a></p>
                        <p><a href="#">Контакты</a></p>
                        <p><a href="#">Доставка</a></p>
                        <p><a href="#">Форма заказа</a></p>
                    </div>
                </div>
                <div className = {classes.footer_services}>
                    <div className = {classes.footer_services_name}>
                        <p>Услуги</p>
                    </div>
                    <Media query={{ maxWidth: 1359 }}>
          {page =>page ?  <div className = {classes.footer_services_itemBox}>
                        <p><a href="#">Производство оборудования</a></p>
                        <p><a href="#">Арт-объекты</a></p>
                        <p><a href="#">Металлическая мебель</a></p>
                        <p><a href="#">Металлообработка</a></p>
                        <p><a href="#">Лазерная резка</a></p>
                        <p><a href="#">Металлоконструкция</a></p>
                        <p><a href="#">Аренда спецтехники</a></p>
                    </div>
           :  
              <div className = {classes.footer_services_itemBox}>
              <div className = {classes.footer_services_first}>
                  <p><a href="#">Производство оборудования</a></p>
                  <p><a href="#">Металлическая мебель</a></p>
                  <p><a href="#">Металлоконструкция</a></p>
                  <p><a href="#">Металлообработка</a></p>
              </div>
              <div className = {classes.footer_services_second}>
                  <p><a href="#">Раскрой металла</a></p>
                  <p><a href="#">Конструкторское бюро</a></p>
                  <p><a href="#">Аренда техники</a></p>
                  <p><a href="#">Ремонт техники</a></p>
              </div>
              </div>}
                    </Media>
            </div>
                <div className = {classes.footer_contacts}>
                    <h4>Контактная информация</h4>
                    <p className = {classes.footer_contacts_street}>Заводская улица, 2В, Буча, <br/>
                    Киевская область, 08292</p>
                    <p className = {classes.footer_contacts_time}>ПН - ПТ: 09:00 - 18:00</p>
                    <p className = {classes.footer_contacts_tel}>+38(097)123-45-67</p>
                    <div className = {classes.footer_contacts_int}>
                        <a href="#"><img src="https://www.flaticon.com/svg/vstatic/svg/733/733603.svg?token=exp=1611158759~hmac=f089b7f3febbbe2413eaa6e363d5edd9" alt=""/></a>
                        <a href="#"><img src="https://www.flaticon.com/svg/vstatic/svg/1419/1419647.svg?token=exp=1611158817~hmac=dd50eba05ab939b29e14f5a7c3bac744" alt=""/></a>
                        <a href="#"><img src="https://www.flaticon.com/svg/vstatic/svg/37/37976.svg?token=exp=1611158849~hmac=4cdc888a887ec245d053a573eeb1c159" alt=""/></a>
                        <Media query={{ maxWidth: 599 }}>
                            {page =>page ? '' : 
                                <a href="#"><img src="https://www.flaticon.com/svg/vstatic/svg/60/60818.svg?token=exp=1611158974~hmac=840472bcd3003e83a248d4d39007ac0c" alt=""/></a>}
                        </Media>
                    </div>
                </div>
            </div>
            <div className={classes.footer_img}>
            <Media query={{ maxWidth: 599 }}>
          {page =>page ? <img src={text2} alt=""/> : <img src={text} alt=""/>}
      </Media>
            </div>
            </div>
        )
    }
}


export default Footer