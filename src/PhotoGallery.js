import React from 'react'
import PhotoCard from './PhotoCard'

const data = [
    {
        title: "EVIL LITTLE GIRL",
        description: "play with me you get burned",
        url: '/fire.jpg'
    },
    {
        title: "HIT THE BUTTON",
        description: "this is the GOTO GOAT",
        url: 'memes2.jpg'
    },
    {
        title: "NOT WHAT YOU THINK",
        description: "K Reeves blows your mind",
        url: 'memes.jpg'
    },
    {
        title: "ARGUING WITH CATS",
        description: "woman argues with cat at dinner",
        url: 'goodmemes.png'
    }
];


function PhotoGallery() {
    
    return (
        <>
        <h2>The Gallery</h2>
        <div className="meme-Gallery">
            {
                data.map(i => <PhotoCard 
                                    title={i.title}
                                    description ={i.description}
                                    url={i.url} 
                                />)
            }
        </div>
        </>
    );
}

export default PhotoGallery;