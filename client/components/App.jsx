import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import JobList from './JobList'
import Submit from './Submit'



class App extends React.Component {
  constructor () {
    super()
    this.state = {
      jobs: []
    }
    this.addJob = this.addJob.bind(this)
  }

addJob (job) {
  this.setState({
    jobs: [...this.state.jobs, job]
  })
}

  render () {
    return (
      <Router>
      <div className='page-box'>
        <Route exact path='/' render={() => {
          return (
            <div>
              <div className='nav-box'>

                <div className='link-box'>
                  <div className='heading'>
                    <h1>Hardware Jobs</h1>
                    <p className='blurb'>Current open positions at New Zealand hardware companies.</p>
                  </div>
                </div>

                <div className='link-box'>
                  <button type='button' button className='button'>
                    <Link to='/submit'>SUBMIT JOB</Link>
                  </button>
                </div>

              </div>
                
              <div className='job-box'>
                <div className='job-padding'>
                  <p className='job-text'><JobList jobs={this.state.jobs} /></p>
                </div>
              </div>
            </div>
          )
        }} />
        <Route path='/submit' render={() => {
          return <Submit addJob={this.addJob} />
        }} />
        </div>
      </Router>
    )
    
  }
}


export default App

