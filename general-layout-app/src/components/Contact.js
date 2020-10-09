import React from 'react';
import ContactForm from './ContactForm'
export default function Contact(props) {
  const homeHeight = window.innerHeight - props.navbarHeight
  const styles = props.mobile 
    ? { height: `${homeHeight}px`
      }
    : {height: '80%'}
  
    if( props.mobile) {
      return (
        <div style={styles} className="contact" >
        <ContactForm />
       </div>
      )
    } else {
      return (
        <div style={styles} className="contact" >
        <ContactForm />
       </div>
      );
    }
}
