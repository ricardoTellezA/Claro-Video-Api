import React from 'react'

const DescriptionTalent = ({talent, title}) => {
  

  return (
    <div className="description-actors-container">
    <p className="description-title-actors">{title}:</p>
    <div className="description-actors">
      {talent.talent !== undefined
        ? talent.talent.map((actor) => (
            <a href='#' key={actor.id} className="description-name-actors">
              {actor.fullname}
            </a>
          ))
        : null}
    </div>
  </div>
  )
}

export default DescriptionTalent