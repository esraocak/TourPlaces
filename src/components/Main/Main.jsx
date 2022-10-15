import React from 'react'

import './Main.scss';

const Main = ({item}) => {
    const {title,image,desc} = item;
  return (
    <div className='card'>
       <div className='title'>
            <h1>{title}</h1> 
        </div>
        <img src={image} alt="img" />
        <div className='card-over'>
          <p>{desc}</p>
        </div>
        
    </div>
  )
}

export default Main