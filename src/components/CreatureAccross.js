import React, {useLayoutEffect, useState} from 'react'

export const CreatureAccross = (props) => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const height = document.documentElement.clientHeight
        const width = document.documentElement.clientWidth
        
        const elem = document.getElementById(props.divid);
        const top = elem.getBoundingClientRect().top;
        const creatureWidth = elem.getBoundingClientRect().width
        
        const scrolled = (width+creatureWidth)*(height-30-top)/height-creatureWidth
        
        if(scrolled>0 && scrolled<width-creatureWidth){
            setScrollTop(scrolled)
        } else if((scrolled+creatureWidth)>width) {
            setScrollTop(width-creatureWidth)
        } else {
            setScrollTop(0)
        }
        
    }

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [onScroll])

    return (
        <div className='goodCreatureContainer'>
            <img className='goodCreature' id={props.divid} style={{right: `${scrollTop}px`}} src={props.creature}  alt="Good NF Creature" />
        </div>
    )
}

export default CreatureAccross
