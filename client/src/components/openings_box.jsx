import React from 'react'
import FilmList from './film_list.jsx'
import Title from './title.jsx'
import SeeMoreLink from './see_more_link.jsx'
import GetShowTimesButton from './get_showtimes_button.jsx'


class OpeningsBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
      {id: 1, name: "Sausage Party"},
      {id: 2, name: "Cafe Society"},
      {id: 3, name: "Morgan"},
      {id: 4, name: "Pirates of the Carribean"},
      {id: 5, name: "Tron"},
      {id: 6, name: "Shawshank Redemption"}
      ]
    }
  }

  render(){
    return (
      <div className='openings-box'>
      <Title/>
      <FilmList data={this.state.data}/>
      <SeeMoreLink/>
      <GetShowTimesButton/>
      </div>
      )

  }

}

export default OpeningsBox
