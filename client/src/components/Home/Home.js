import React, { useEffect, useState } from 'react';
import headerImage from './img/heading-image.png';
import learnImage from './img/learn-img.png';
import buildImage from './img/build-img.png';
import connectImage from './img/connect-img.png';
import RoadToCode from './img/roadtocode-logo.png';
import Github from './img/github-logo.png';
import Linkdin from './img/linkdin-logo.png'
import Twitter from './img/twitter-logo.png';
import YouTube from './img/you-tube-logo.png';
import Instagram from './img/instagram-logo.png'
import './Home.css';

function Home() {

  const [branch, setBranch] = useState(localStorage.getItem("branch") || '');
  const [sem, setSem] = useState(localStorage.getItem("sem") || '');

  useEffect(() => {
    if (branch) localStorage.setItem("branch", branch);
    if (sem) localStorage.setItem("sem", sem);
  }, [branch, sem])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block header-display-image"
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='info-div text-center main-div'>
              <h3 >✏️Learn Faster, Study Better !</h3>
              <h4> Get access to notes anytime, anywhere. </h4>
              <div className='mt-4'>
                <select className='select-branch' defaultValue={branch} onChange={(e) => { setBranch(e.target.value) }}>
                  <option>Select Branch</option>
                  <option value="computer-science">Computer Science & Engineering</option>
                  <option value="mechanical-engineering">Mechanical Engineering</option>
                  <option value="production-engineering">Production Engineering</option>
                  <option value="civil-engineering">Civil Engineering</option>
                  <option value="electronic-communication-engineering">Electronic & Communication Engineering</option>
                  <option value="chemical-engineering">Chemical Engineering</option>
                  <option value="electric-engineering">Eelectric Engineering</option>
                </select>
                <select className='select-sem' defaultValue={sem} onChange={(e) => { setSem(e.target.value) }}>
                  <option>Select Semester</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                  <option value="5">5th</option>
                  <option value="6">6th</option>
                  <option value="7">7th</option>
                  <option value="8">8th</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center main-div'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'><h3>How it Works</h3>
            <p>This is the website we wish we had when we were learning on our own.
              We scour the internet looking for only the best resources to supplement
              your learning and present them in a logical order.</p></div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>

      <div className='container main-div'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={learnImage}
              alt=""
              className="img-fluid mx-auto d-block lbc1-image"
            />
            <h5 className='text-center mt-2 mb-3'>Learn</h5>
            <p className='text-center'>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
          </div>
          <div className='col-md-4'>
            <img
              src={buildImage}
              alt=""
              className="img-fluid mx-auto d-block lbc2-image"
            />
            <h5 className='text-center mt-4 mb-3'>Build</h5>
            <p className='text-center'>Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.</p>
          </div>
          <div className='col-md-4'>
            <img
              src={connectImage}
              alt=""
              className="img-fluid mx-auto d-block lbc-image"
            />
            <h5 className='text-center mt-3 mb-3'>Connect</h5>
            <p className='text-center'>You're not alone. Learn and get help from our friendly community of beginner and experienced developers.</p>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row logo-div'>
          <div className='col-md-5 mt-4 mb-3 shadow'>
            <div className='createor-div'>
              This Project created by an Open-Book community.🎯
            </div>
          </div>
          <div className='col-md-7 row'>
            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://www.roadtocode.org/' target='blank'>
                <img src={RoadToCode} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>

            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://github.com/Vaibhavihole31' target='blank'>
                <img src={Github} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>

            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://www.linkedin.com/in/vaibhavi-hole/' target='blank'>
                <img src={Linkdin} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>

            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://twitter.com/VaibhaviHole' target='blank'>
                <img src={Twitter} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>

            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://www.youtube.com/c/RoadToCode' target='blank'>
                <img src={YouTube} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>
            <div className='socialmedia-logo mt-3 mb-3 shadow'>
              <a href='https://www.instagram.com/vaibhavi_n_hole/' target='blank'>
                <img src={Instagram} className="img-fuild logo-img mx-auto d-block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home