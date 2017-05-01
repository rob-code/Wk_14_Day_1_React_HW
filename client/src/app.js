import React from 'react';
import ReactDOM from 'react-dom';
import OpeningsBox from './components/openings_box.jsx'

window.onload = function(){
  ReactDOM.render(
    <OpeningsBox/>,
    document.getElementById('app')
  );
}
