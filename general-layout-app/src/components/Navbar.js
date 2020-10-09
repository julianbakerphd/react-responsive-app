import React, { Component, createRef } from 'react'
import Drawer from './Drawer'
import { HamburgerElastic } from 'react-animated-burgers'
import ninja from '../img/ninja.png'
import ninja2 from '../img/ninja2.png'

const navbarItems = ["Home", "YouTube", "Contact"]

export default  class Navbar extends Component {
    constructor(props) {
        super(props)
        

    }

    render() {
        
        const styles = {
            desktopFont: {

                fontSize: `${16 * this.props.navbarHeight / 75}px` ,
                margin: `${10 * this.props.navbarHeight / 75}px`
            }
            
        }
        console.log(this.props.navbarHeight)
        const iconHeight = this.props.navbarHeight / 1.75
        const iconWidth = iconHeight * 4

        const iconMargin = `${iconHeight/3}px`
        const navbarItemList = navbarItems.map((navbarItem, index) => {
            return (
                    <div key={index} onClick={()=> {this.props.onClick(navbarItem)}} style={styles.desktopFont}>
                        {navbarItem}</div>
            )
        })
    
        const desktopMenu = (
            
                                <div
                                    ref={el => {
                                        if (!el) return;
                                        this.props.getNavbarHeight(el.getBoundingClientRect().height)  
                                    }}
                                    
                                className="navbar" >
                                    <img src={ninja} alt="home" height={iconHeight} width={iconWidth} />
                                    <div className="navbar-menu">
                                        {navbarItemList}
                                    </div>
                                </div>
                             )
    
        const mobileMenu = ( <div
                                ref={el => {
                                    if (!el) return;
                                    this.props.getNavbarHeight(el.getBoundingClientRect().height)  
                                }}
      
                                className="menu-icon-container" >
                                <img style={{marginLeft: iconMargin}} className="navbar-icon" src={ninja2} alt="home" height={iconHeight} width={iconHeight}  />
                                <HamburgerElastic style={{marginRight: iconMargin}} buttonWidth={iconHeight} isActive={this.props.isActive} toggleButton={this.props.openDrawer} />
                                <Drawer navbarHeight={this.props.navbarHeight} onClick={this.props.onClick}   drawerWidth={this.props.drawerWidth} />
    
                        </div>
    
                    )
        return ( this.props.mobile ? mobileMenu : desktopMenu)
    }


}




