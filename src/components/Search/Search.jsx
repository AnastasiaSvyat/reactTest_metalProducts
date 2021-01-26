import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Vector from '../../img/Vector.png'
import classes from '../../Style/search.module.css'


class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            showButton : true,
            showMessage:false
        }
    }
    render(){
        return(
            <div>
              {this.state.showButton ?
                <div onClick={() => this.setState({showMessage:true}) }>
                  <img className = {classes.searchImg} src={Vector} alt=""/>
                </div> : 
                <div className = {classes.emptiness}></div>
              }
            <CSSTransition
              in={this.state.showMessage}
              timeout={300}
              classNames="alert"
              unmountOnExit
              onEnter={() => this.setState({showButton:false})}
              onExited={() => this.setState({showButton:true})}>
            <div className = {classes.searchInput}>
              <input type="text" placeholder = 'Поиск...'/>
                <div onClick={() => this.setState({showMessage:false})}>
                  <img src={Vector} alt=""/>
                </div>
            </div>
            </CSSTransition>
            </div>
        )
    }
}        

export default Search