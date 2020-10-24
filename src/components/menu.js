
import React,{Link} from "react"


import "../styles/styles.scss"
import "./menu.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"


class Menu extends React.Component {
 
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {

    const menuActive = this.state.showMenu ? 'is-active' : '';
    //const burgerActive = this.state.showMenu ? 'is-active' : '';
  
    return (   
    <>
        
        <div className="c-menu_trigger" onClick={this.toggleMenu}>
            <div id="hamburger" className={menuActive}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            </div>
        </div>

        <nav className={`c-menu_nav ${menuActive}`}>
          
            <div className="c-menu_nav-list">
              <Link to="/"  >Home</Link>
              <Link to="/about" >About</Link>
              <Link to="/case-studies" >Case studies</Link>
              <Link to="/services"  >Services</Link>
              <Link to="/websites"  >Websites</Link>
              <Link to="/contact"  >Contact</Link>
              <Link to="/email-capture" >Cap</Link>
            </div>
       
        </nav>
        
    </>
    )
  }
}

export default Menu
