import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"
import Stars from './Stars'
import books from './books.json'
import authors from './authors.json'

const Book = (props) => {

return(
  <a href={"book/" + books[props.id].title + "/" + props.id}>
    <div className='bookTile'>
      <img className='bookImage' src={bookSample} alt="The billionaire"/>
      <div className='bookOverlay'>
        <div className='bookOverlayText'>
          <div className='bookTitle'>{books[props.id].title}</div>
          <div className='bookPrice'>{books[props.id].price}</div>
          <div className='bookAuthor'>{authors[books[props.id].author].author}</div>
          <div className='reviews'>
            {/* stars should be calculated in stars as the average of the reviews and the count */}
            <Stars stars={books[props.id].stars}/>
            <span className='pl-2 pb-2'>{books[props.id].stars} ({books[props.id].reviews})</span>
          </div>
        </div>
      </div>
      <div className='bookDescription'>
        <div className='bookDescriptionSlide'>
          <div className='bookTitle'>{books[props.id].title}</div>
          <div className='bookAuthor'>{authors[books[props.id].author].author}</div>
          <div className='reviews'>
            <Stars stars={books[props.id].stars}/>
            <span className='pl-2 pb-2'>{books[props.id].stars} ({books[props.id].reviews})</span>
          </div>
          <div className='bookDescriptionText'>
          {books[props.id].description}
          </div>
        </div>
      </div>
    </div>
  </a>
)}

export default Book