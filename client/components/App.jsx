import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import Table from './Table'
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
      <div className='page-box'>
        <h1>Hardware Jobs</h1>
        <Table />
        <Submit addJob={this.addJob} />
      </div>
    )
    
  }
}


export default App

