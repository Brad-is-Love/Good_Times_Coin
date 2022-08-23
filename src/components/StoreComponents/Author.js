import React from 'react'
import authors from './authors.json'
import books from './books.json'

const Author = (props) => {

    const booksByAuthor = []

    for(let i = 0; i<books.length; i++) {
        if(books[i].author===props.author){
            booksByAuthor.push({
                "id": i,
                "book": books[i].title
            })
        }
    }

  return (
    <div>
        <h2>About the Author</h2>
        <h4>{authors[props.author].author}</h4>
        <p>{authors[props.author].description}</p>
        <h4>Books by this Author:</h4>
        {booksByAuthor.map((book, key) => {
            return(
                <div key={key}>
                    <div className='reviewer'>{book.book}</div>
                    {/* <Stars stars = {feedback.rating} />
                    <div className='review'>{feedback.review}</div> */}
                </div>
        )})}
    </div>
  )
}

export default Author