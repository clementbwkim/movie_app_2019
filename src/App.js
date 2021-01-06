import React from 'react'
import PropTypes from 'prop-types';

class App extends React.Component {
  //바꿀 데이터를 state 안에 넣는다
  state = { //state is an object
    count: 0
  };
  plus = () => {
    //state를 새로 만들어준다, setState를 사용하지 않으면 새 state와 함께 render()를 호출하지 않는다 
    this.setState((current) => ({count: current.count + 1})) //setState(((current) => ({count: count.current.count +1})))
  };
  minus = () => {
    this.setState((current) => ({count: current.count - 1}))
  };
  render() {
    return (
    <div>
      <h2>The class number is : { this.state.count }</h2>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
