import React from "react";

import classes from '../../Style/ourCompany.module.css';

class OurCompany extends React.Component{
    render(){
        return(
            <div>
                <h2 className={classes.ourCompany_h2} >Наша компания</h2>
                <div className = 'borderTop'></div>
                    <div className = {classes.ourCompany_img1}>
                        <div className ={classes.ourCompany_grey1}>
                            <div className ={classes.ourCompany_grey_info1}>
                                <h3>Почему мы?</h3>
                                    <p>Люди - профессионалы с большим 
                            опытом работы.Полный спектр работ по металлообработке 
                            в одном месте - комплексный индивидуальный подход. 
                            Конструкторский отдел.Логистика. Многолетний опыт 
                            машиностроения - создание промышленого</p>
                            </div>
                        </div>
                    </div>
                    <div className = {classes.ourCompany_img2}>
                        <div className ={classes.ourCompany_grey2}>
                            <div className ={classes.ourCompany_grey_info2}>
                                <h3>Наши преимущества</h3>
                                    <p>Люди - профессионалы с большим 
                            опытом работы.Полный спектр работ по металлообработке 
                            в одном месте - комплексный индивидуальный подход. 
                            Конструкторский отдел. Логистика. Многолетний опыт 
                            машиностроения - создание промышленого</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default OurCompany