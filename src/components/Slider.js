import React, {useState, useEffect, useRef} from 'react';
import "./slider.css";
import "./thumb.css";

function Slider({onChange, percentage}) {
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(-20)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = 20
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar = thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage)
        setMarginLeft(centerThumb)
        setPosition(percentage)
        setProgressBarWidth(centerProgressBar)
    }, [percentage])

    return (
        <div className="slider-container">
            <div className="progress-bar-cover" style={{
                width: `${progressBarWidth}px`
            }}></div>
            <div className="thumb" ref={thumbRef} style={{
                left:`${position}%`,
                marginLeft: `${marginLeft}px`
            }}></div>
            <input type="range" ref={rangeRef} step="0.01" className="range" onChange={onChange} />
            
        </div>
    )
}

export default Slider
