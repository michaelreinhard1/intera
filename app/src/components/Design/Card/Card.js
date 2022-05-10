import React from 'react'
import './Card.scss'

const Card = ({image, alt, name, bio, children}) => {
  return (
    <div className="Card">
        <div className="Card__profile">
            <img src={image} alt={alt} />
        </div>
        <div className="Card__bio">
            <h1>{name}</h1>
            <p>
                {bio}
            </p>
        </div>
        {children}
    </div>
  )
}

export default Card