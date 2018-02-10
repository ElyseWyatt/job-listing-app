import React from 'react'
import {Link} from 'react-router-dom'
//Job list output
const JobList = props => {
    return (
        <div>
            <ul className='list-render'>
                {props.jobs.map((topost, id) => {
                    return <li key={id} className='job-font'><a href={topost.url}>{topost.job}: {topost.company}</a> <br></br> {topost.region}</li>
    
                })}
            </ul>
        </div>
    )
}

export default JobList

