import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { scaling } from './scaling';

export default class ContactForm extends Component {

    scalingFont = (originalFontSize, scalingFactor) => {
    if(window.innerHeight <= window.innerWidth){
        return (originalFontSize * (window.innerHeight/scalingFactor)) 
    } else if (window.innerHeight > window.innerWidth) {
        return (originalFontSize * (window.innerWidth/scalingFactor)) 
    }
}
    inverseScaling = (originalSize, scalingFactor) => {
        if(window.innerHeight <= window.innerWidth){
            return (originalSize * (scalingFactor / window.innerHeight)) 
        } else if (window.innerHeight > window.innerWidth) {
            return (originalSize * (scalingFactor / window.innerWidth)) 
        }
    }
   

    render() {
        const scaledHeaderFont = `${this.scalingFont(25, 800)}px`
        const scaledParagraphFont = `${this.scalingFont(14, 800)}px`
        const scaledLabelFont = `${this.scalingFont(16, 800)}px`
        const scaledLineHeight = `${this.scalingFont(20, 800)}px`
        const scaledLetterSpacing = `${this.scalingFont(1.8, 800)}px`
        const scaledButtonHeight = `${this.scalingFont(40, 800)}px`
        const scaledButtonWidth = `${this.scalingFont(150, 800)}px`
        const scaledButtonFont = `${this.scalingFont(17, 800)}px`
        const scaledFormHeight = `${this.inverseScaling(700, 800)}px`
        const scaledFormWidth = `${this.inverseScaling(600, 800)}px` 
        const scaledFormPadding = `${this.inverseScaling(35, 800)}px`
        const scaledFormPaddingBottom = `${this.inverseScaling(50, 800)}px` 
        console.log("LETTEREDFDSSDFSDFFDSDFFDSDF")
        console.log(scaledLetterSpacing)
        console.log("LETTEREDFDSSDFSDFFDSDFFDSDF")
        const styles = {
            headerStyle: {
                fontSize: scaledHeaderFont,
                letterSpacing: scaledLetterSpacing
             
            },
            paragraphStyle: {
                fontSize: scaledParagraphFont,
                lineHeight: scaledLineHeight,
                letterSpacing: scaledLetterSpacing

            },
            labelStyle: {
                fontSize: scaledLabelFont,
                letterSpacing: scaledLetterSpacing
            },
            buttonStyle: {
                width: scaledButtonWidth,
                height: scaledButtonHeight,
                fontSize: scaledButtonFont
            }, 
            errorStyle: {
                fontSize: scaledLabelFont
            },
            contactFormStyle: {
                paddingTop: scaledFormPadding,
                paddingRight: scaledFormPadding,
                paddingLeft: scaledFormPadding,
                paddingBottom: scaledFormPaddingBottom,
                height: scaledFormHeight,
                width: scaledFormWidth,
                
            }
        }
        return(
            
            <Formik
            
                initialValues={{ name: '', email: '', comments: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .max(35, 'Must be 35 characters or less.')
                    .required('Please enter your name.'),
                    email: Yup.string()
                    .email('Invalid email address.')
                    .required("Please enter your email address."),
                    comments: Yup.string()
                    .max(850, "Must be 850 characters or less.")
                    .required("Please enter your comments.")
                })}
                onSubmit={(values) => {
                    alert("Thank you for your feedback.")
                }}
            >
                <Form style={styles.contactFormStyle} className="contact-form" >
                    <div>
                    <h2 style={styles.headerStyle}>Contact Form</h2> 
                    </div>
                    <div>
                    <p style={styles.paragraphStyle}> Comments? Found a software bug?   </p>
                    <p style={styles.paragraphStyle}> Please let us know.  Your feedback is greatly appreciated. </p>
                    </div>
                    <label style={styles.labelStyle}className="form-label" htmlFor="name">Name:
                                         <ErrorMessage render={msg => <span style={styles.errorStyle} className="error-message">{msg}</span>}  name="name" /></label>

                    <Field style={{fontSize: '100%'}} className="inputs" name="name" type="text" />
                    <label style={styles.labelStyle}className="form-label" htmlFor="email">Email:
                                        <ErrorMessage  render={msg => <span style={styles.errorStyle} className="error-message">{msg}</span>} name="email" /></label>
                    <Field style={{fontSize: '100%'}} className="inputs" name="email" type="email" />

                    <label style={styles.labelStyle} className="form-label" htmlFor="comments">Comments:                                                  <ErrorMessage render={msg => <span  
                                          style={styles.errorStyle} className="error-message">{msg}</span>} name="comments" /></label>
                    <Field style={{fontSize: '100%'}} component="textarea" 
                    className="comments-input" name="comments" type="text" />
                    <div style={{height: '40px' , width: '170px'}}>
 
                    <button style={styles.buttonStyle} className="submit-button" type="submit">Submit</button>
                    </div>

                </Form>
            </Formik>
        )
    }
}