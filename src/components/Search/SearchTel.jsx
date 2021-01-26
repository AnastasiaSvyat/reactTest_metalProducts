import React from "react";
import classes from '../../Style/navBarTel.module.css'

import Vector from '../../img/Vector.png'


class SearchTel extends React.Component{
    constructor(){
        super()
        this.state ={
            search:false
        }
    this.search = this.search.bind(this)
    }
    search(){
        this.setState({
            search:true
        })
    }
    render(){
        return(
            <div onClick = {this.search}>
                {this.state.search ? <div className = {classes.searchTelBox}>
                    <div className = {classes.inputTel}>
                        <input type="text"/>
                    </div>
                    <div className = {classes.searchTelBox_img}>
                        <img className = {classes.searchTel} src={Vector} alt=""/>
                    </div>
                </div> :
                    <img className = {classes.searchTel} src={Vector} alt=""/>
                }
            </div>
        )
    }
}
export default SearchTel