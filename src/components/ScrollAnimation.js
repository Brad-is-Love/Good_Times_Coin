import React, {useRef} from 'react'

const ScrollAnimation = () => {

        const ourRef = useRef(null);
        const topPosition = ourRef.current.getBoundingClientRect().top;

    return (
        <div>
            {topPosition}
        </div>
    )
}

export default ScrollAnimation
