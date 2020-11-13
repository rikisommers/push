import React,{Link} from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/styles.scss"
import "./menu.scss"

class Menu extends React.Component {
 
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {

    //const menuActive = this.state.showMenu ? 'is-active' : '';
    //const burgerActive = this.state.showMenu ? 'is-active' : '';
  
    return (   
    <div>
        
        <nav className="c-menu_nav">
          
            <div className="c-menu_nav-list">
              <AniLink paintDrip duration={0.3} to="/">Home</AniLink>
              <AniLink paintDrip duration={0.3} to="/about">About</AniLink>
              <AniLink swipe direction="up" duration={0.2} to="/contact">Contact</AniLink>
            </div>  

            <button onClick="toggleMenu">sd</button>
        </nav>
        
    </div>
    )
  }
}

export default Menu