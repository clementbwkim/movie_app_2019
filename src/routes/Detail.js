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
    console.log("location", location);
    if(location.state) {
      return (
        <div className="detail-container">
          <div className="detail-items">
            <div className="detail-item-img">
              <img src={location.state.largePoster} alt={location.state.title} title={location.state.title} />
            </div>
            <div className="detail-item-texts">
              <h2>{location.state.title}</h2>
              <p>{location.state.summary}</p>
            </div>
          </div>
        </div>
      )
    }else {
      return null;
    }
  }
}

export default Detail;