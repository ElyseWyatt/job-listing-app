import React from 'react'

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
            <form>
                <div>Job: <input name='job' onChange={this.handleChange} /></div>
                <div>Company: <input name='company' onChange={this.handleChange} /></div>
                <button type='button' onClick={() => this.props.addJob(this.state)}>Add Job</button>
            </form>
        )
    }
}

export default Submit