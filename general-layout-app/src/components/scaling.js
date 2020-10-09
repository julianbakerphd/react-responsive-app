export const scaling = (heightLimit, widthLimit, elementHeight, elementWidth) => {
    let newHeight = elementHeight
    let newWidth = elementWidth
     if( window.innerWidth< widthLimit || window.innerHeight < heightLimit) {
       const proportionalWidth = window.innerWidth / widthLimit
       const proportionalHeight = window.innerHeight / heightLimit
       
       if( (proportionalHeight <= 1) && (proportionalWidth > 1 ) ) {
         newHeight = elementHeight * proportionalHeight
         newWidth = elementWidth * proportionalHeight
     
       } else if ( (proportionalWidth <= 1) && (proportionalHeight > 1 ) ) {
         newHeight = elementHeight * proportionalWidth
         newWidth = elementWidth * proportionalWidth
       } else if ( (proportionalWidth <= 1) && (proportionalHeight <= 1 ) ) {
        
         if( proportionalHeight <= proportionalWidth) {
         newHeight = elementHeight * proportionalHeight
         newWidth = elementWidth * proportionalHeight
         } else {
         newHeight = elementHeight * proportionalWidth
         newWidth = elementWidth * proportionalWidth
         }
       }
       
     }
     
     
     return { newHeight:newHeight , newWidth: newWidth}
    
   }