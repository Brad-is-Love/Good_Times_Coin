import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"
import CustomButton from '../CustomButton'
import books from './books.json'
import authors from './authors.json'
import Stars from './Stars'
import Review from './Review'
import Author from './Author'

const BookDetails = (props) => {

const book = books[props.id]

var currentBook = window.location.origin;
var thisURL = currentBook + '/review/' + book.title + "/" + book.id

  return (
    <>
        <div className='bookDetails row'>
            <div className='bookDetailsImage col-3 border-solid'>
                <img className='bookImage' src={bookSample} alt="The billionaire"/>
                <a href={thisURL}>
                    Review this book
                </a>
            </div>

            <div className='bookDetailsText col-6'>
                <h1>{book.title}</h1>
                <h4>{authors[book.author].author}</h4>
                <div><Stars stars={book.stars}/> {" " +book.stars} {"("+book.reviews+")"}</div>
                <br/>
                {book.description}
                <Review id={book.id}/>
            </div>
            <div className='bookDetailsPayment col-3'>
                <h2><span>Buy eBook: </span> <span>{"$"+book.price}</span></h2>
                <CustomButton buttonText = "Pay X One"/>
                <CustomButton buttonText = "Pay X GTC"/>
            </div>
        </div>
        <Author author={book.author} />

    </>
  )
}

export default BookDetails