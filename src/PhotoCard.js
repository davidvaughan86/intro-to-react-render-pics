import React from 'react'



const PhotoCard = (props) => { 


    console.log(props)
    return (
        <div className="meme-frame">
            <h6>{props.title}</h6>
            <p>{props.description}</p>
            
            
            <img src={props.url} />
        </div>
    )
}
export default PhotoCard;