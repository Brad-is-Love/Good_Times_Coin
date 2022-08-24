import React from 'react'
import reviews from './reviews.json'
import Stars from './Stars'


const Review = (props) => {

    const feedback = []


    for(let i = 0; i<reviews.length; i++) {
        if(reviews[i].bookId===props.id){
            feedback.push({
                "id": i,
                "rating": reviews[i].stars,
                "review": reviews[i].review,
                "reviewer": reviews[i].reviewer
            })
        }
    }

    return (
        <div className='feedback'>
          {feedback.map((feedback, key) => {
            return(
                <div key={key}>
                    <div className='reviewer'>{feedback.reviewer}</div>
                    <Stars stars = {feedback.rating} />
                    <div className='review'>{feedback.review}</div>
                </div>
            )})}
        </div>
    )
}

export default Review