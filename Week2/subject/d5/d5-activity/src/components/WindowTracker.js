import React from "react"
import "./WindowTracker.css"

const WindowTracker = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth);

        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <div>
            <h1>Window width: {windowWidth}px</h1>
        </div>
    )
}

export default WindowTracker