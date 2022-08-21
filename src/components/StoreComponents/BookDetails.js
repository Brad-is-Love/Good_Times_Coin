import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"
import CustomButton from '../CustomButton'
import books from './books.json'
import Stars from './Stars'
import Review from './Review'

const BookDetails = (props) => {

const book = books[props.id-1]



  return (
    <>
        <div className='bookDetails row'>
            <div className='bookDetailsImage col-3 border-solid'>
                <img className='bookImage' src={bookSample} alt="The billionaire"/>
            </div>
            <div className='bookDetailsText col-6'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
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
    </>
  )
}

export default BookDetails