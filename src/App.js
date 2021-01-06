import React from 'react'

//props, { props.fav } === ({ fav }). { fav } 
function Potato({ fav }) {
  return (
    <h2>I love { fav }! very much.</h2>
  )
}

function App() {
  return (
    <div>
      <h2>Hello React Js, this is Clem here!</h2>
      {/** fav="Potato" :: props */}
      <Potato fav="Potato" /> {/**adding component in App.js */} 
      <Potato fav="Ramen" />
      <Potato fav="Kimbab" />
      <Potato fav="Chicken" />
    </div>
  );
}

export default App;
