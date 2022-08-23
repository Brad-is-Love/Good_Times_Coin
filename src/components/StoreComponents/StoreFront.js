import React from 'react'
import Book from './Book';
import books from './books.json'

const StoreFront = () => {

        return(
            <div>
                <div className='bookContainer'>
                    {books.map((book) => (
                        <div key={book.id}>
                            <Book id = {book.id}/>
                        </div>
                    ))}
                </div>   
            </div>
        )

}

export default StoreFront