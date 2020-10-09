import React from 'react'

export default function Footer(props) {
    const homeHeight = props.navbarHeight
    const styles = props.mobile 
      ? { 
          footerStyle: {
            height: `${homeHeight}px`,
            fontSize: `${16 * props.navbarHeight / 75}px`

          },
        }
      : {height: '10%'}

      if( props.mobile) {
        return (
            <footer style={styles.footerStyle} className="footer">
            &copy; NinjaPro {(new Date()).getFullYear()}
            </footer>
        )
      } else {
        return (
            <footer style={styles} className="footer">
            &copy; NinjaPro {(new Date()).getFullYear()}
            </footer>
        );
      }
}