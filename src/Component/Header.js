import React, { Component } from 'react'
import logo from '../logo.svg'

export class Header extends Component {
    render() {
        return (
            <div>
        <header class="header-container" id="header">
            <div class="header-container__image-container">
            <img style={styles.logoImg} src={logo} alt="Logo Image" />
            </div>    
            <nav class="header-container__navbar" id="nav-bar">
                <div class="navbar-burger-container" >
                    <input type="checkbox" class="checkbox" />
                    <div class="span-container">
                        <span></span>
                        <span></span>
                        <span></span>    
                    </div>
                    <div class="navbar-burger-container__ul-container">
                        <a href="#services" class="navbar-link color--white nav-link"><span class="--turq"></span>Work</a>
                        <a href="#features" class="navbar-link color--white nav-link"><span class="--turq"></span>Solutions</a>
                        <a href="#pricing" class="navbar-link color--white nav-link"><span class="--turq"></span>Services</a>
                        <a href="#pricing" class="navbar-link color--white nav-link"><span class="--turq"></span>About us</a>
                    </div>
                </div>
            </nav>
        </header>
            </div>
        )
    }
}

export default Header
const styles = { 
    logoImg:{
        maxWidth:"50%"
    }
}