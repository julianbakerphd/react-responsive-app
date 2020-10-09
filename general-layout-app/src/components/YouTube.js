import React from 'react';

export default function YouTube(props) {
  const youtubeHeight = window.innerHeight - props.navbarHeight
  const styles = props.mobile 
    ? {
        youtubeStyle: {
          height: `${youtubeHeight}px`
        },
        youtubeFixed: {
          height: `${props.navbarHeight}px`,
          marginTop: `${-props.navbarHeight}px`,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          visibility: 'hidden',
          backgroundColor: 'red',
        }
      
      }
    : {
        youtubeStyle: {
          height: '80%'
        }
      }


    if( props.mobile) {
      return (
        <div>
          <div style={styles.youtubeFixed}></div>
          <div style={styles.youtubeStyle}  className="youtube">
          <p>YouTube</p>
        </div>
      </div>
      )
    } else {
      return (
        <div style={styles.youtubeStyle}  className="youtube">
        <p>YouTube</p>
      </div>
      );
    }
}


