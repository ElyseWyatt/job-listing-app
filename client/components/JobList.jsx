import React from 'react'
import {Link} from 'react-router-dom'
//Job list output
const JobList = props => {
    return (
        <div>
        <ul>
            {props.jobs.map((topost, id) => {
                return <li key={id}>{topost.job}: {topost.company}</li>
            })}
        </ul>
        <Link to='/submit'>Submit Job</Link>
        </div>
    )
}

export default JobList