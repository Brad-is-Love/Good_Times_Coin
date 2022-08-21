import React from 'react'
import Book from './Book';
import books from './books.json'

const StoreFront = () => {

        return(
            <div>
                <div className='bookContainer'>
                    {books.map((book) => (
                        <div key={book.id}>
                            <Book id = {book.id} title = {book.title} author = {book.author} stars = {book.stars} reviews = {book.reviews} description = {book.description}/>
                        </div>
                    ))}
                </div>   
            </div>
        )

}

export default StoreFront