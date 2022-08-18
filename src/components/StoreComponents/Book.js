import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"

const Book = (props) => {

return(
    <div className='bookTile'>
      <img className='bookImage' src={bookSample} alt="The billionaire"/>
      <div className='bookOverlay'>
        <div className='bookOverlayText'>
          <div className='bookTitle'>{props.title}</div>
          <div className='bookPrice'>$4</div>
          <div className='bookAuthor'>Mick Johansonson</div>
          <div className='reviews'>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className='pl-2 pb-2'>3.2/5 (122)</span>
          </div>
        </div>
      </div>
      <div className='bookDescription'>
        <div className='bookDescriptionSlide'>
          <div className='bookTitle'>How to be Rich and Look Good</div>
          <div className='bookAuthor'>Mick Johansonson</div>
          <div className='reviews'>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className='pl-2 pb-2'>3.2/5 (122)</span>
          </div>
          <div className='bookDescriptionText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </div>
        </div>
      </div>
      
    </div>
)}

export default Book