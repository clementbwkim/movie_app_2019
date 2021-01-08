import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if(location.state) {
      return (
        <div className="detail-wrapper">
          <h2>{location.state.title}</h2>
          <p>{location.state.summary}</p>
        </div>
      )
    }else {
      return null;
    }
  }
}

export default Detail;