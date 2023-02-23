import React from 'react'
import Button from '../button/Button';

function Card({
  urlImage,
  alt_img,
  setShowDescription, 
  showDescription, 
  title_project,
  brief_description,
  url_logo,
  alt_logo
  }:any)
{
  return (
    <section>
      <div>
        <img 
          onClick={() => setShowDescription(!showDescription)}
          src={urlImage} 
          alt={alt_img} />
      </div>
      <div>
        {showDescription && (
          <div>
            <h3>{title_project}</h3>
            <p>{brief_description}</p>
          </div>
        )}
        <div>
          <img src={url_logo} alt={alt_logo} />
        </div>
      </div>
    </section>
  )
}

export default Card