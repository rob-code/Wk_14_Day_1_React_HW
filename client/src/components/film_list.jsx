import React from 'react'
import Film from './film.jsx'

class FilmList extends React.Component{
  
  render(){
    const filmNodes = this.props.data.map( (film) => {
      return (
        <Film film={film.name} key={film.id}>
        {film.name}
        </Film>
        )
    })


  return (
    <div className="film-list">
      {filmNodes}
    </div>
    )
}

}




export default FilmList