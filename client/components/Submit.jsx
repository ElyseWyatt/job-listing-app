import React from 'react'
import {Link} from 'react-router-dom'
//This is the separate page for /submit
class Submit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            job: '',
            company: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (evt) {
        this.setState({
           [evt.target.name]: evt.target.value 
        })
    }

    render () {
        return (
            <div>
            <h2>
               Submit Job
            </h2>
            <form>
                <div>Job: <input name='job' onChange={this.handleChange} /></div>
                <div>Company: <input name='company' onChange={this.handleChange} /></div>
                <div>Link: <input name='url' onChange={this.handleChange} /></div>
                <button type='button' onClick={() => this.props.addJob(this.state)}>Add Job</button>
            </form>
            <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Submit