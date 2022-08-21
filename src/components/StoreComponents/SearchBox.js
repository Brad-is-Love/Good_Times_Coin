import React from 'react'

const SearchBox = () => {
  return (
  
      <form className='searchContainer'>
          <input className='searchBar' placeholder='Search the Good Times Store'/>
          <button className='searchIcon' type='submit'><i className="fa fa-search"></i></button>
      </form>
  )
}

export default SearchBox