import { useState, useEffect } from "react";
import initialImage from "../../image/initialImage.png"
import "./Meme.css"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "Shut up",
        bottomText: "and take my money",
        randomImage: initialImage
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        
    }, []);

    const getMemeImage = () => {
        const memesArray = allMemes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
    }

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="random-meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
        </main>
    );
}

export default Meme;