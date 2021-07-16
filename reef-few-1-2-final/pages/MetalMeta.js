import data from './metal.json'
import React, { Component } from 'react'

<div>

</div>

class Metal extends Component {
    
  render() {
    const myArray = data
    return (
        <div>
          <h3>Metal Bands: {myArray.length}</h3> 
          <div className="bands">
          {data.map((postMetal) => {
              return <div className="band">
                    <h2>{postMetal.band_name}</h2>
                    <h3>Formed: {postMetal.origin}</h3>
                    <p>-{postMetal.formed}</p><br/>
                    <p>Fans: <i>{postMetal.fans}</i></p>

                    <Likes />
                    </div>
          })}
          </div>
        </div>
        )
  }
}

class Likes extends Component {
    state = {
    count: 0
    };
    handleClick = () => {
        this.setState(({ count }) => ({
        count: count + 1
        }));
    };
    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
}
export default Metal