import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require("./Images/chandanImg2.png")}
                alt="ChandanImg"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.5em'}}>Chandan Kumar</h2>
            <h4 style={{color: 'grey'}}>I am a Frontend developer.</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi There, I am having 1.5years of experience.I am a Frontend developer.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Electronic City, Bangalore</p>
            <h5>Phone</h5>
            <p>9731316547</p>
            <h5>Email</h5>
            <p>kchandan234@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Pre University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2014}
                 endYear={2018}
                 schoolName="Graduation"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Internship"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Project Engineer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                      skill="React"
                      progress={80}
                      />
               
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;