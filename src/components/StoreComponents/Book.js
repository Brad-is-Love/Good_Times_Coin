import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"
import Stars from './Stars'

const Book = (props) => {

return(
  <a href={"book/" + props.title + "/" + props.id}>
    <div className='bookTile'>
      <img className='bookImage' src={bookSample} alt="The billionaire"/>
      <div className='bookOverlay'>
        <div className='bookOverlayText'>
          <div className='bookTitle'>{props.title}</div>
          <div className='bookPrice'>$4</div>
          <div className='bookAuthor'>{props.author}</div>
          <div className='reviews'>
            <Stars stars={props.stars}/>
            <span className='pl-2 pb-2'>{props.stars} ({props.reviews})</span>
          </div>
        </div>
      </div>
      <div className='bookDescription'>
        <div className='bookDescriptionSlide'>
          <div className='bookTitle'>{props.title}</div>
          <div className='bookAuthor'>{props.author}</div>
          <div className='reviews'>
            <Stars stars={props.stars}/>
            <span className='pl-2 pb-2'>{props.stars} ({props.reviews})</span>
          </div>
          <div className='bookDescriptionText'>
          {props.description}
          </div>
        </div>
      </div>
    </div>
  </a>
)}

export default Book