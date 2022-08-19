import React from 'react'

const Stars = (props) => {

    var ratings = []

    for(let i=1;i<=Math.round(props.stars);i++){           
        ratings.push(
            <span key={i} className="fa fa-star checked"></span>
        )
    }
    for(let i=Math.round(props.stars)+1;i<=5;i++){
        ratings.push(<span key={i} className="fa fa-star"></span>)
    }

    return (
        <>
            {ratings}
        </>
    )
}

export default Stars