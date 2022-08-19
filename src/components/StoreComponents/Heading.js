import React from 'react'

const Heading = () => {

  const cat = [
    "Cooking",
    "Romance",
    "Sci-Fi",
    "Bromance",
    "Non-Fiction",
    "Self-Help",
    "Comics",
    "Fantasy",
    "Action",
    "Thriller"]

  var categories = []

    for(let i=0;i<cat.length;i++){
      categories.push(<span key={i} className="category">{cat[i]}</span>)
    }

  return (
    <>
      <div className='categories'>
        {categories}
      </div>
    </>
  )
}

export default Heading