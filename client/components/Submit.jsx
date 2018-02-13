import React from 'react'
import {Link} from 'react-router-dom'

//This is the separate page for /submit
class Submit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            job: '',
            company: '',
            url: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.isValid = this.isValid.bind(this)
    }

    handleChange (evt) {
        this.setState({
           [evt.target.name]: evt.target.value 
        })
    }

    isValid () {
        if (this.state.url.includes('http')) {
        return true }
        else {
            return false
        }
    }

    render () {
        return (
            <div>
            <h1>
               Submit Job
            </h1>
            <form className='submit-form'>
                <div> 
                    <input name='job' placeholder='Job Title' onChange={this.handleChange} />
                </div>
                <div> 
                    <input name='company' placeholder='Company' onChange={this.handleChange} />
                </div>
                {/* <select>
                    <option value="auckland">Auckland<input name='region' onChange={this.handleChange} /></option>
                    <option value="wellington">Wellington<input name='region' onChange={this.handleChange} /></option>
                    <option value="christchurch">Christchurch<input name='region' onChange={this.handleChange} /></option>
                </select> */}
                <div>
                    <input name='region' placeholder='Region' onChange={this.handleChange} />
                </div>
                <div>
                    {/* Job Link:  */}
                    <input name='url' placeholder='Full Job Link' onChange={this.handleChange} />
                </div>
                <div className='submit-flex'>
                <Link to='/'><button type='button' disabled={!this.isValid()} onClick={() => this.props.addJob(this.state)}>ADD JOB</button></Link>
                <Link to='/'><button type='button' className='home-button'>HOME</button></Link>
                </div>
            </form>
            
            </div>
        )
    }
}

export default Submit


// Add form validation
// Add default value of https://


//How to check if a string includes something
//if valid, it will return true, if not valid, false
//Will have to bind isValid function

// str.includes('https://')


