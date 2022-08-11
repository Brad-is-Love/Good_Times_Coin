import React from 'react'

const Account = (props) => {


  if (props.account === "Not Connected"){
    return(
      <>
        <div className='siteHeading'>Not Connected</div>
        <div>Ideally could have a button here to connect</div>
      </>
    )
  }

  return (
    <>
        <div className='siteHeading'>Account</div>
        <div className='smallBlue'>{props.account}</div>
        the info below should only display if there is any and should probably be from a component
        <div className='special'>
          Reading Profile
        </div>
        <div>
          <strong>Books owned:</strong> <br/>
          call Profile.booksOwned()<br/>
          <strong>Reviews:</strong>
        </div>

        <div className='special'>
          Author Profile
        </div>
        <div>
          <strong>Books published:</strong> <br/>
          call Profile.booksPublished()<br/>
          <strong>Reviews:</strong><br/>
          <strong>Money Earned</strong><br/>
          <strong>Author rank?</strong>

        </div>
    </>
  )
}

export default Account


// shows you account
// profile - smart contract
// has stuff only owner can see, like stats
// has public stuff as well like book list and photo

