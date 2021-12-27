import React from 'react'

// props: buttonText, buttonFunction, account
export default function CustomButton(props) {

    if(props.account!=="Not Connected"){
        return (
                <button class="btn btn-large shadow-sm buttonText m-3"  onClick={(event)=>{
                        event.preventDefault()
                        props.buttonFunction()
                    }}>{props.buttonText}
                </button>
    )}else{
        return(
                <button class="shadow-sm buttonDisabled m-3">Not Connected 
                </button>
        )
    }
}
