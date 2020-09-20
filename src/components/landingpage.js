import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("./Images/chandan_new.png")}
              alt="avatar"
              style={{height: '350px'}}
              />

            <div className="banner-text">
              <h1>Front End Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Redux | MongoDB</p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
