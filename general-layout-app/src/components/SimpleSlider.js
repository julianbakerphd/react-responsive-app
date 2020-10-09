import React from "react";
import Slider from "react-slick";
import  home from '../img/home.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newWidth = '200px'
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <span className= "material-icons arrow-next "
        style={{ ...style, display: "block"}}
        onClick={onClick}>
        arrow_forward_ios
        </span>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    
    return (
  
        <span  className= "material-icons arrow-prev "
        style={{ ...style, display: "block"}}
        onClick={onClick}>
arrow_back_ios
</span>

     
    );
  }
export default class SimpleSlider extends React.Component {
  state = {
    width: 110,
    height: 360
  };
  render() {
    const settings = {

      infinite: true,
      speed: 500,

    };

    return (
      
        <div style={{height: this.props.dimensions.newHeight, width: this.props.dimensions.newWidth }} id="slide-container" >
          <Slider {...settings}>
            <div style={{height: this.props.dimensions.newHeight, width: this.props.dimensions.newWidth }} className="resize">
              <img style={{height: this.props.dimensions.newHeight, width: this.props.dimensions.newWidth }}  src={home} alt="home" />
            </div>
            <div style={{height: this.props.dimensions.newHeight, width: this.props.dimensions.newWidth }} className="resize">
              <img style={{height: this.props.dimensions.newHeight, width: this.props.dimensions.newWidth }}  src={home} alt="home" />
            </div>
          </Slider>
        </div>
     
    );
  }
}