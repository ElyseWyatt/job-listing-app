import React from 'react'
import {Link} from 'react-router-dom'
//Job list output
const JobList = props => {
    return (
        <div>
        <ul>
            {props.jobs.map((topost, id) => {
                return <li key={id} className='job-font'>{topost.job}: {topost.company} {topost.url}</li>
            })}
        </ul>
        </div>
    )
}

export default JobList

//Put different tags on jobs and companies. 