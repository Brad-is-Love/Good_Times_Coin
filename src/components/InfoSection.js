import React from 'react'

export default function InfoSection(props) {
    if(props.align === "right"){
    return (
        <div className='row justify-content-center infoCard py-5'>
            <div className='col-sm-9'>
                <div className='sectionTitleRight pt-2'>{props.title}</div>
                <div className='sectionText py-5'>
                    {props.text1}
                    <br /> <br />
                    {props.text2}
                    <br /> <br />
                    {props.text3}
                </div>
            </div>
        </div>
    )
    } else {
            return (
        <div className='row justify-content-center infoCard py-5'>
            <div className='col-sm-9'>
                <div className='sectionTitleLeft pt-2'>{props.title}</div>
                <div className='sectionText py-5 text-end'>
                    {props.text1}
                    <br /> <br />
                    {props.text2}
                    <br /> <br />
                    {props.text3}
                </div>
            </div>
        </div>
    )
    }
}
