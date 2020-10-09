import React from 'react'
const menuItems = ["Home", "YouTube", "Contact"]
export default function Drawer(props) {
   const _handleClick = (item) => {
    switch(item) {
        case "Home":
            window.scrollTo(0,0)
            break;
        case "YouTube":
            window.scrollTo(0,window.innerHeight - props.navbarHeight)
            break;  
        case "Contact":
            window.scrollTo(0,2*(window.innerHeight - props.navbarHeight))
            break;  
        default:
            break     
    }
   }
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$drawer")
   console.log(props.drawerWidth)
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$drawer")
   const styles = {
       color: '#ebebeb',
       marginTop: '10px',
       fontSize: `${props.drawerWidth/14.375}px`,
       marginLeft: '10px'
   } 

    const menuItemList = menuItems.map((menuItem, index) => {
        return (
                <div key={index} onClick={()=> {_handleClick(menuItem)}} style={styles}>{menuItem}</div>
            
        )
    })

    return(
            <div className="drawer" style={{width: `${props.drawerWidth}px`}}>
                <ul>
                    {menuItemList}
                </ul>
            </div>
    )
}