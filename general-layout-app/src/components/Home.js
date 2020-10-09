import React from 'react';

import SimpleSlider from './SimpleSlider'
export default function Home(props) {
const homeHeight = window.innerHeight - props.navbarHeight
const styles = props.mobile 
  ? {
      homeStyle: {
        marginTop: `${props.navbarHeight}px`,
        height: `${homeHeight}px`,
        zIndex: '100'
      },
      homeFixed: {
        height: `${props.navbarHeight}px`,
        marginTop: `${-props.navbarHeight}px`,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: 'red'
      }
    }
  : {
      homeStyle: {
        height: '80%'
      }
    }

  if(props.mobile) {
    return (
      <div>
        <div style={styles.homeFixed}></div>
        <div style={styles.homeStyle} className='home' >
        <SimpleSlider dimensions={props.dimensions} />
        </div>
      </div>
    )
  } else {
    return (

        <div style={styles.homeStyle} className="home" >
          <SimpleSlider dimensions={props.dimensions} />
        </div>
       
    );
  }
}

