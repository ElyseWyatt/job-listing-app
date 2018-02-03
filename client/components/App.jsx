import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

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
            <h1>Hardware Jobs</h1>
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

