import React from 'react'
import Heading from './Heading';
import Book from './Book';
import books from './books.json'
// this is the store front top-level component
// child components will be products



const StoreFront = () => {
    console.log(books.length)
    for (let i = 0; i<books.length; i++){
        return(
            <div>
                <Heading/>
                <div className='bookContainer'>
                    <Book title={books[i].title}/>
                </div>   
            </div>
        )
    }
}

export default StoreFront