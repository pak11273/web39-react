import React from 'react'

const Link = (props) => {
    return (
        <div className='data'>
            {props.items.map(item => (
                <div className='info'>
                    <h4>{item.name}</h4>
                    <a href={item.url} target='_blank' rel='noreferrer'>Link</a>
                </div>
            ))}
        </div>
    )
} 

export default Link