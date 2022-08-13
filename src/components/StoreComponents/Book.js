// the book tile that displays in the grid

/* Props: Title, Author, Description, Contract Address? */

import React from 'react'
import bookSample from "../../craiyon_172824_billionaire.png"

const Book = props => 
    <div className='bookTile'>
      <div className='bookDescription'>
        <div className='bookDescriptionSlide'>
          <div className='bookDescriptionTitle'>Billionaire</div>
          <div className='bookDescriptionAuthor'>Mick Johansonson</div>
          <div className='bookDescriptionText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
      
      <img className='bookImage' src={bookSample} alt="The billionaire"/>
      <div className='bookOverlay'>    
        <div className='bookTitle'>Billionaire</div>
        <div className='bookAuthor'>Mick Johansonson</div>
      </div>
    </div>

export default Book