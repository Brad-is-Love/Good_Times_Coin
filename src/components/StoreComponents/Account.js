import React from 'react'

export const Account = (props) => {
  return (
    <div>
        <div className='siteHeading'>Account</div>
        <div className='smallBlue'>{props.account}</div>
    </div>
  )
}

export default Account


// shows you account
// profile - smart contract
// has stuff only owner can see, like stats
// has public stuff as well like book list and photo

