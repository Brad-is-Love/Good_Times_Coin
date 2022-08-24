//pop-up style review a book (if you hold the NFT)
// shows the book title, author
// has a field to review - stored in database - not on chain

import React, {useState} from 'react'
import books from './books.json'
import reviews from './reviews.json'

const ReviewForm = (props) => {

    var bookDeets = window.location.pathname.split("/");
    var bookId = bookDeets[3]

    const revId = reviews.length
    
    const [revDeets, setRevDeets] = useState({
            "id": revId,
            "bookId": parseInt(bookId),
            "stars": 0,
            "review": "",
            "reviewer": ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRevDeets((prev) => {
            return{...prev,[name]:value}
        })
    }

   // this will obviously need to update a database instead of just a variable
    const submitReview = (e) => {
        e.preventDefault()
        revDeets.stars=parseInt(revDeets.stars)
        reviews.push(revDeets)
    }

  return (
    <>
    <h1>Leave a review for {books[bookId].title}</h1>
        <form onSubmit={submitReview}>
            <h4>Stars</h4>
            <input type="number" min="0" step="1" max='5' name="stars" onChange={handleChange}/>
            <h4>Review</h4>
            <textarea name="review" onChange={handleChange}></textarea>
            <h4>profile.name({props.account})</h4>
            <input type="text" name="reviewer" onChange={handleChange}/>
            
            <div>
            <br/>
                <button type="submit" onClick={submitReview}>Submit Review</button>
            </div>
        </form>
    </>
  )
}

export default ReviewForm