import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import JobList from './JobList'
import Form from './Form'



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
              <div className='title-nav'>
                <div className='title-spacing'>
                <h4>Hardware Jobs</h4>
                </div>
                <div className='title-spacing'>
                <Link to='/submit'><p>Submit Job</p></Link>
                </div>
              </div>
            <JobList jobs={this.state.jobs} />
            </div>
          )
        }} />
        <Route path='/submit' render={() => {
          return <Form addJob={this.addJob} />
        }} />
        </div>
      </Router>
    )
    
  }
}


export default App

