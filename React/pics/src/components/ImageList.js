import React from "react";

const ImageList = (props) => {
    const {images} = props
   return images.map(({description,id,urls}) => {
       return  <img alt={description} src={urls.regular} key={id}/>
    })
}


export default ImageList