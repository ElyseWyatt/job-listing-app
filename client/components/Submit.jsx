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
            <h1>
               Submit Job
            </h1>
            <form className='submit-form'>
                <div>Job: <input name='job' onChange={this.handleChange} /></div>
                <div>Company: <input name='company' onChange={this.handleChange} /></div>
                {/* <select>
                    <option value="auckland">Auckland<input name='region' onChange={this.handleChange} /></option>
                    <option value="wellington">Wellington<input name='region' onChange={this.handleChange} /></option>
                    <option value="christchurch">Christchurch<input name='region' onChange={this.handleChange} /></option>
                </select> */}
                <div>Region: <input name='region' onChange={this.handleChange} /></div>
                <div>Job Ad Link: <input name='url' onChange={this.handleChange} /></div>
                <div className='submit-flex'>
                <Link to='/'><button type='button' onClick={() => this.props.addJob(this.state)}>ADD JOB</button></Link>
                <Link to='/'><button type='button' className='home-button'>HOME</button></Link>
                </div>
            </form>
            
            </div>
        )
    }
}

export default Submit


