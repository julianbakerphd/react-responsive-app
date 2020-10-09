import React, { Component, Fragment } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import YouTube from './YouTube'
import Contact from './Contact'
import { scaling } from './scaling'

import '../index.css'


export default class App extends Component {
  constructor(props){
    super(props)

    this.state= {type: 'Home',
                mobile: window.innerWidth > 768 ? false : true,
                drawerWidth: null,
                marginLeft: 0,
                dimensions: {newHeight: null, newWidth: null},
                navbarHeight: 50,
                viewPortHeight: '100%',
                isActive: false}
    
  }

componentDidMount() {
  window.addEventListener('resize', this.handleResize)
  this.handleResize()
  this.content = this.SlideContent(this.state.type)
  
}
componentDidUpdate() {
  const drawerOpenWidth = window.innerWidth /3 
  const marginLeftOpen = -drawerOpenWidth
  if(this.state.drawerWidth !== drawerOpenWidth && this.state.isActive === true) {
    this.setState({ drawerWidth: drawerOpenWidth, marginLeft: marginLeftOpen })

  }

}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize)
}

 SlideContent = (type) => {
  switch(type) {
    case 'Home':
      return <Home dimensions={this.state.dimensions} mobile={this.state.mobile} />
    case 'YouTube':
      return <YouTube mobile={this.state.mobile}  />
    case 'Contact':
      return <Contact mobile={this.state.mobile}  />
    default: 
     return <Home dimensions={this.state.dimensions} mobile={this.state.mobile} />
  }
}
  
handleNavbarPress = (type) => {
  this.setState({type: type}) 
}

handleResize = () => {
  const dimensions = scaling(1000, 700, 800, 500)
  document.body.style.height = `${window.innerHeight}px`

  // document.getElementsByClassName("slick-slide").style.width = `${dimensions.newWidth}px`

  // document.getElementsByClassName("slide-slide").style.height = `${dimensions.newHeight}px`

  // document.getElementById("slide-image").style.width = `${imageWidth}px`
  // document.getElementById("slide-image").style.height = `${imageHeight}px`
  if(window.innerWidth > 768 && this.state.mobile === true) {
    this.setState({mobile: false})
  }
  if(window.innerWidth <= 768 && this.state.mobile === false) {
   this.setState({mobile: true})

  }
  
  this.setState({ viewPortHeight: window.innerHeight, dimensions: dimensions  })
   

}

openDrawer = () => {
  const drawerOpenWidth = `${window.innerWidth /3}px` 
  const marginLeftOpen = `${-drawerOpenWidth}px`
  this.state.isActive ? this.setState({  drawerWidth: 0, isActive: false, marginLeft: 0}) : this.setState({ drawerWidth: drawerOpenWidth, isActive: true, marginLeft: marginLeftOpen })

}
closeDrawer = () => {
 
}

getNavbarHeight = (height) => {
  if(this.state.navbarHeight !== height) {
  this.setState({ navbarHeight: height})
  }
}

render() {
  console.log("********************************************************123")
  console.log(this.state.navbarHeight);
  console.log("********************************************************123")
  this.content = this.SlideContent(this.state.type)

   const desktopVersion = (
           <Fragment>
           <Navbar getNavbarHeight={this.getNavbarHeight} navbarHeight={this.state.navbarHeight} mobile={this.state.mobile}  onClick={this.handleNavbarPress}/>
            {this.content}
           <Footer  mobile={this.state.mobile}/>
         </Fragment> 
    )
  
    const mobileVersion = (
      <Fragment >

      <Navbar getNavbarHeight={this.getNavbarHeight}  navbarHeight={this.state.navbarHeight} mobile={this.state.mobile} openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} isActive={this.state.isActive} drawerWidth={this.state.drawerWidth} onClick={this.handleNavbarPress}/>
        
        <Home navbarHeight={this.state.navbarHeight} dimensions={this.state.dimensions}  mobile={this.state.mobile} />
        <YouTube navbarHeight={this.state.navbarHeight} mobile={this.state.mobile} />
       <Contact navbarHeight={this.state.navbarHeight} mobile={this.state.mobile} />
      <Footer navbarHeight={this.state.navbarHeight} mobile={this.state.mobile}/>   
    </Fragment> 
)

    return ( this.state.mobile ? mobileVersion: desktopVersion
    )
  }
}


