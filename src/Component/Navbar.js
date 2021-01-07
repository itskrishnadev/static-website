import React from 'react';
import logo from '../logo.svg'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.navLinks = React.createRef();
  }

  menuAnimation = () => {
    this.navLinks.current.classList.toggle("open");
  }

  render() {
    return (
<div style={styles.headerMain}>
        <nav style={{background: "#17135c"}}>
        <div class="logo">
            <img src={logo} alt="Logo Image" />
        </div>
        <div class="hamburger" onClick={this.menuAnimation}>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <section class="nav-links desktopalignNav" ref={this.navLinks}>
            <a href="#" onClick={this.menuAnimation}>Work</a>
            <a href="#" onClick={this.menuAnimation}>Solutions</a>
            <a href="#" onClick={this.menuAnimation}>Services</a>
            <a href="#" onClick={this.menuAnimation}>About us</a>
            <a href="#" onClick={this.menuAnimation}>Solutions</a>
        </section>
    </nav>
</div>
    );
  }
}

const styles = {
    headerMain:{
    }
}