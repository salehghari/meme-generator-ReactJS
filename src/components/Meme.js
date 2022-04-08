import memesData from "../memesData"
import {useState} from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        firstText: "First Text",
        secondText: "Second Text",
        thirdText: "Third Text",
        fourthText: "Fourth Text",
        fifthText: "Fifth Text",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        boxCount: 0
    })
    const [firstPosition, setFirstPosition] = useState({
        y: 0,
        x: 0,
    })
    const [secondPosition, setSecondPosition] = useState({
        y: 0,
        x: 0,
    })
    const [thirdPosition, setThirdPosition] = useState({
        y: 0,
        x: 0,
    })
    const [fourthPosition, setFourthPosition] = useState({
        y: 0,
        x: 0,
    })
    const [fifthPosition, setFifthPosition] = useState({
        y: 0,
        x: 0,
    })
    //getting the meme images randomly
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        const inputCount = memesArray[randomNumber].box_count
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            boxCount: inputCount
        }))
    }
    // getting the value of inputs
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    function firstGoUp() {
        setFirstPosition(prevfirstPosition => ({
            ...prevfirstPosition,
            y : firstPosition.y - 10
        }))
    }
    function firstGoDown() {
        setFirstPosition(prevfirstPosition => ({
            ...prevfirstPosition,
            y : firstPosition.y + 10
        }))
    }
    function firstGoLeft() {
        setFirstPosition(prevfirstPosition => ({
            ...prevfirstPosition,
            x : firstPosition.x - 10
        }))
    }
    function firstGoRight() {
        setFirstPosition(prevfirstPosition => ({
            ...prevfirstPosition,
            x : firstPosition.x + 10
        }))
    }

    function secondGoUp() {
        setSecondPosition(prevsecondPosition => ({
            ...prevsecondPosition,
            y : secondPosition.y - 10
        }))
    }
    function secondGoDown() {
        setSecondPosition(prevsecondPosition => ({
            ...prevsecondPosition,
            y : secondPosition.y + 10
        }))
    }
    function secondGoLeft() {
        setSecondPosition(prevsecondPosition => ({
            ...prevsecondPosition,
            x : secondPosition.x - 10
        }))
    }
    function secondGoRight() {
        setSecondPosition(prevsecondPosition => ({
            ...prevsecondPosition,
            x : secondPosition.x + 10
        }))
    }

    function thirdGoUp() {
        setThirdPosition(prevthirdPosition => ({
            ...prevthirdPosition,
            y : thirdPosition.y - 10
        }))
    }
    function thirdGoDown() {
        setThirdPosition(prevthirdPosition => ({
            ...prevthirdPosition,
            y : thirdPosition.y + 10
        }))
    }
    function thirdGoLeft() {
        setThirdPosition(prevthirdPosition => ({
            ...prevthirdPosition,
            x : thirdPosition.x - 10
        }))
    }
    function thirdGoRight() {
        setThirdPosition(prevthirdPosition => ({
            ...prevthirdPosition,
            x : thirdPosition.x + 10
        }))
    }
    
    function fourthGoUp() {
        setFourthPosition(prevfourthPosition => ({
            ...prevfourthPosition,
            y : fourthPosition.y - 10
        }))
    }
    function fourthGoDown() {
        setFourthPosition(prevfourthPosition => ({
            ...prevfourthPosition,
            y : fourthPosition.y + 10
        }))
    }

    function fourthGoLeft() {
        setFourthPosition(prevfourthPosition => ({
            ...prevfourthPosition,
            x : fourthPosition.x - 10
        }))
    }
    function fourthGoRight() {
        setFourthPosition(prevfourthPosition => ({
            ...prevfourthPosition,
            x : fourthPosition.x + 10
        }))
    }

    function fifthGoUp() {
        setFifthPosition(prevfifthPosition => ({
            ...prevfifthPosition,
            y : fifthPosition.y - 10
        }))
    }
    function fifthGoDown() {
        setFifthPosition(prevfifthPosition => ({
            ...prevfifthPosition,
            y : fifthPosition.y + 10
        }))
    }
    function fifthGoLeft() {
        setFifthPosition(prevfifthPosition => ({
            ...prevfifthPosition,
            x : fifthPosition.x - 10
        }))
    }
    function fifthGoRight() {
        setFifthPosition(prevfifthPosition => ({
            ...prevfifthPosition,
            x : fifthPosition.x + 10
        }))
    }
    const firstStyles = {
        top: firstPosition.y,
        left: firstPosition.x
    }
    const secondStyles = {
        top: secondPosition.y,
        left: secondPosition.x
    }
    const thirdStyles = {
        top: thirdPosition.y,
        left: thirdPosition.x
    }
    const fourthStyles = {
        top: fourthPosition.y,
        left: fourthPosition.x
    }
    const fifthStyles = {
        top: fifthPosition.y,
        left: fifthPosition.x
    }
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    name="firstText"
                    value={meme.firstText}
                    onChange={handleChange}
                    placeholder="First text"
                    className="form--input"
                />
                <input 
                    type="text"
                    name="secondText"
                    value={meme.secondText}
                    onChange={handleChange}
                    placeholder="Second text"
                    className="form--input"
                />
                {meme.boxCount >= 3 && <input 
                    type="text"
                    name="thirdText"
                    value={meme.thirdText}
                    onChange={handleChange}
                    placeholder="Third text"
                    className="form--input"
                />}
                {meme.boxCount >= 4 && <input 
                    type="text"
                    name="fourthText"
                    value={meme.fourthText}
                    onChange={handleChange}
                    placeholder="Fourth text"
                    className="form--input"
                />}
                {meme.boxCount === 5 && <input 
                    type="text"
                    name="fifthText"
                    value={meme.fifthText}
                    onChange={handleChange}
                    placeholder="Fifth text"
                    className="form--input"
                />}
                <button onClick={getMemeImage} className="form--button white-text">
                    Get a new meme image
                </button>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text firstText" style={firstStyles}>{meme.firstText}</h2>
                    <h2 className="meme--text secondText" style={secondStyles}>{meme.secondText}</h2>
                    {meme.boxCount >= 3 && <h2 className="meme--text thirdText" style={thirdStyles}>{meme.thirdText}</h2>}
                    {meme.boxCount >= 4 && <h2 className="meme--text fourthText" style={fourthStyles}>{meme.fourthText}</h2>}
                    {meme.boxCount === 5 && <h2 className="meme--text fifthText" style={fifthStyles}>{meme.fifthText}</h2>}
                </div>
            </form>
            <div className="controlBtns">
                <p>first text position:</p>
                <button onClick={firstGoUp}>▲</button>
                <button onClick={firstGoDown}>▼</button>
                <button onClick={firstGoLeft}>◀</button>
                <button onClick={firstGoRight}>▶</button>
            </div>
            
            <div className="controlBtns">
                <p>second text position:</p>
                <button onClick={secondGoUp}>▲</button>
                <button onClick={secondGoDown}>▼</button>
                <button onClick={secondGoLeft}>◀</button>
                <button onClick={secondGoRight}>▶</button>
            </div>
            
            {meme.boxCount >= 3 && <div className="controlBtns">
                <p>third text position:</p>
                <button onClick={thirdGoUp}>▲</button>
                <button onClick={thirdGoDown}>▼</button>
                <button onClick={thirdGoLeft}>◀</button>
                <button onClick={thirdGoRight}>▶</button>
            </div>}
            
            {meme.boxCount >= 4 && <div className="controlBtns">
                <p>fourth text position:</p>
                <button onClick={fourthGoUp}>▲</button>
                <button onClick={fourthGoDown}>▼</button>
                <button onClick={fourthGoLeft}>◀</button>
                <button onClick={fourthGoRight}>▶</button>
            </div>}
            
            {meme.boxCount === 5 && <div className="controlBtns">
                <p>fifth text position:</p>
                <button onClick={fifthGoUp}>▲</button>
                <button onClick={fifthGoDown}>▼</button>
                <button onClick={fifthGoLeft}>◀</button>
                <button onClick={fifthGoRight}>▶</button>
            </div>}
        </main>
    )
  }