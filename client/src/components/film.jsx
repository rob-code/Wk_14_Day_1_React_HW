import React from 'react'

const Film = (props) => {

  return (
    <div className="film-wrapper">
    <p className="film-icon inline">put the icon here</p> 
    <div className="film inline">
    {props.children}</div>
    <p className="showtimes inline">Showtimes</p>
    </div>

    )


}

export default Film